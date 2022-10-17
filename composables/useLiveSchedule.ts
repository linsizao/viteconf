import { schedule } from '~~/conference';

export function useLiveSchedule() {
	const currentTime = $(useIntervalDate(1000 * 5));

	const secondSchedule = schedule.map((section) => ({
		...section,
		talks: section.talks.map((talk) => ({
			...talk,
			start: new Date(+talk.start + /** +12 hours */ 1000 * 60 * 60 * 12),
		})),
	}));

	const allTalks = [...schedule, ...secondSchedule]
		.map((section) => {
			const talks = section.talks;
			talks.forEach((val) => (val.sectionTitle = section.title));
			return section.talks;
		})
		.flat(1);

	// Show only the first 12 hour talks only
	const firstTalkTime = allTalks[0].start;
	const talks = allTalks.filter(
		(talk) =>
			talk.start <
			new Date(
				Math.max(+new Date(), +firstTalkTime) +
					/** +12 hours */ 1000 * 60 * 60 * 12
			)
	);

	// Split schedule up by current time
	const talksDone = $computed(() =>
		talks.filter((talk) => +talk.start < +currentTime)
	);

	const upcomingTalks = $computed(() =>
		talks.filter((talk) => +talk.start + talk.duration > +currentTime)
	);

	const currentTalk = $computed(() => talksDone[talksDone.length - 1]);

	/*
    // Keeps track of whether the 0th index talk is first in upcoming talks or 1st index talk is.
    // So as to avoid duplicate rendering
    let upcomingTalkIndex = $ref<0 | 1>(0);

    const upcomingTalk = $computed(() =>
        upcomingTalks[0]?.speaker?.displayName !== 'TBD'
            ? upcomingTalks[(upcomingTalkIndex = 0)]
            : upcomingTalks[(upcomingTalkIndex = 1)]
    );
    */
	return $$({ currentTalk, upcomingTalks });
}
