<script lang="ts" setup>
import { toTalkStartLocaleTime } from '~~/helpers/utils';
import { speakers, startDateTime, type SpeakerListLayout } from '../conference';

const {
	focusedSpeaker,
	layout = 'rows',
	showSchedule = false,
} = defineProps<{
	focusedSpeaker: keyof typeof speakers;
	layout?: SpeakerListLayout;
	showSchedule?: boolean;
}>();
const formattedStartDate = toTalkStartLocaleTime(startDateTime, {
	timeZoneName: 'short',
});
</script>

<template>
	<section
		v-if="showSchedule"
		class="section-container speakers-list-container"
	>
		<div class="section-content">
			<ConferenceSchedule />
		</div>
	</section>
	<section class="section-container speakers-list-container">
		<div class="section-content">
			<h4>Speakers</h4>
			<ul class="speaker-logo-list" :class="layout">
				<template v-for="(speaker, i) in speakers" v-bind:key="i">
					<li
						class="speaker"
						v-if="speaker.displayName && speaker.displayName != 'TBD'"
						v-bind:key="i"
					>
						<SpeakerCard
							:speaker="speaker"
							:layout="layout"
							:focus="focusedSpeaker === speaker.screenName"
						/>
					</li>
				</template>
			</ul>
		</div>
	</section>
</template>

<style scoped lang="scss">
$breakpoint-md: 760px;
h5 {
	margin-top: 16px;
	padding: 0 16px;
}
h4 {
	position: relative;
	margin-bottom: 52px;
	font-size: 4.2rem;
	font-weight: 800;
	line-height: 1;
	letter-spacing: -2px;
	transform: translateY(-24px);
	@media screen and (max-width: $breakpoint-md) {
		text-align: center;
		width: 100%;
		font-size: 3.2rem;
	}
	&::before {
		position: absolute;
		content: '';
		top: 40%;
		left: -30%;
		width: 160%;
		height: 20%;
		background-image: linear-gradient(-45deg, #c916ffa1 50%, #f836db91 50%);
		filter: blur(54px);
		z-index: 0;
		@media screen and (max-width: $breakpoint-md) {
			overflow-x: hidden;
			width: 100%;
			left: 0;
		}
	}
}

h6 {
	position: relative;
	z-index: 1;
	background-image: var(--app-background-gradient-blue_to_violet);
	margin-bottom: -50px;
	text-decoration: underline;
	text-decoration-style: solid;
	text-decoration-color: transparent;
	text-decoration-thickness: 2px;
	transition: text-decoration-color 300ms ease-in;

	&:hover {
		text-decoration-color: var(--app-color-foreground-violet-mid);
	}
}

.section-container {
	position: relative;
	margin-bottom: 100px;
	margin-top: 52px;
	background-color: #000;

	@media screen and (max-width: 500px) {
		padding: 0 16px;
		display: flex;
		flex-direction: column-reverse;
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 80px;
	}

	&::before {
		top: -80px;
		background-image: linear-gradient(
			to bottom right,
			transparent 50%,
			#000 50%
		);
	}

	&::after {
		bottom: -80px;
		background-image: linear-gradient(to top left, transparent 50%, #000 50%);
	}
}

.section-content {
	@media screen and (max-width: 500px) {
		margin-bottom: 0;
	}
}

.speaker-logo-list {
	display: flex;
	flex-direction: column;
	padding: 0;
	li {
		display: flex;
		width: min(800px, 100%);
		margin: 0 auto;
		list-style: none;
		@media screen and (max-width: 500px) {
			width: 100%;
		}
	}
	@media screen and (max-width: 500px) {
		max-width: 100%;
		width: 100%;
		gap: 8px;
	}
}

.speaker-logo-list.grid {
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 1140px;
	gap: 32px;
	@media screen and (max-width: 500px) {
		gap: 24px;
		margin-bottom: 64px;
	}
	li {
		flex: 0 1;
		min-width: calc(33% - 18px);
		margin: 0;
		transition: ease 0.1s opacity, ease 0.2s transform;
		@media screen and (max-width: 1200px) {
			min-width: 32%;
		}
		@media screen and (max-width: 900px) {
			min-width: 48%;
		}
		@media screen and (max-width: 600px) {
			min-width: 100%;
		}
	}
	&:hover li:hover {
		transform: scale(1.05);
	}
}

.speaker-logo-list.card {
	gap: 2.4rem;
	margin: 0 1rem;
	li {
		transition: ease 0.3s transform;
		&:hover {
			transform: scale(1.05);
		}
	}
}
</style>
