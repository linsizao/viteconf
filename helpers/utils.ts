import { TicketInfo } from '~~/composables/useFirebase';
import { SpeakerData } from '~~/conference';
import { Framework } from './constants';

export const createBlankTicket = (options?: { screenName?: string, photo?: string, ticketNumber?: number }): TicketInfo => ({
	displayName: 'Name',
	favoriteFrameworks: 'vite' as Framework,
	isSpeaker: false,
	photo: 'https://avatars.githubusercontent.com/u/65625612?s=200',
	screenName: 'username',
	ticketNumber: 0,
	uid: 'uid',
	...options
});

export const logoPath = (speaker: SpeakerData) =>
	speaker.project?.logo ??
	`/projects/${speaker.project?.name.toLowerCase().replace(' ', '_')}.svg`;

export const talkTitleToSlug = (title: string) => {
	return title
		.split(' ')
		.join('_')
		.replace(/[^a-zA-Z0-9_-]/g, '')
		.toLowerCase();
};
export const scheduleLinkFromTalkTitle = (title) =>
	`/schedule/${talkTitleToSlug(title)}`;

const timeFormatOptions = (
	options: Intl.DateTimeFormatOptions
): Intl.DateTimeFormatOptions => ({
	hour: 'numeric',
	minute: '2-digit',

	...options,
});

export const toTalkStartTime = (t: Date) =>
	t.toLocaleTimeString(
		'en',
		timeFormatOptions({
			timeZone: 'America/Los_Angeles',
			timeZoneName: 'short',
		})
	);

export const toTalkStartLocaleTime = (
	t: Date,
	options?: Intl.DateTimeFormatOptions
) => {
	// Get client locale and timezone (could be different than server)
	const { locale, timeZone } = Intl.DateTimeFormat().resolvedOptions();
	return t.toLocaleTimeString(
		locale,
		timeFormatOptions({ timeZone, ...options })
	);
};
