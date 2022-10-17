<script lang="ts" setup>
import { speakersTeaser } from '../conference';
</script>

<template>
	<section class="section-container">
		<div class="section-content">
			<h5>
				A full day of launches, learnings, and celebrations from the projects
				reimagining Web Development.
			</h5>
			<h2 style="font-weight: 400">Speaker list unveiling soon.</h2>
			<h2>Featuring talks from:</h2>
			<ul class="speaker-logo-list">
				<li class="speaker" v-for="speaker in speakersTeaser">
					<SpeakerTeaserCard :speaker="speaker"></SpeakerTeaserCard>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped lang="scss">
h2 {
	font-weight: 700;
}

.section-container {
	position: relative;
	margin-bottom: 100px;
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

.speaker-logo-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 52px;
	margin-top: 64px;
	padding: 0;
	max-width: 80%;
	li {
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
</style>
