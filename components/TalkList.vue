<script lang="ts" setup>
import { postConferenceTalks, preConferenceTalks, talks } from '../conference';
</script>

<template>
	<h5>
		A full day of launches, learnings, and celebrations from the projects
		reimagining Web Development.
	</h5>
	<section class="section-container">
		<div class="section-content">
			<h4>ViteConf Talks</h4>
			<ul class="talks-list">
				<li
					class="talks-container"
					v-for="(talk, index) in Object.values(talks)"
					v-bind:key="index"
				>
					<TalkCard :talk="talk"></TalkCard>
				</li>
			</ul>
			<h4>Pre Conference Talks</h4>
			<ul class="talks-list">
				<li
					class="talks-container"
					v-for="(talk, index) in Object.values(preConferenceTalks)"
					v-bind:key="index"
				>
					<TalkCard :talk="talk"></TalkCard>
				</li>
			</ul>
			<h4>Post Conference Talks</h4>
			<ul class="talks-list">
				<li
					class="talks-container"
					v-for="(talk, index) in Object.values(postConferenceTalks)"
					v-bind:key="index"
				>
					<TalkCard :talk="talk"></TalkCard>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped lang="scss">
h5 {
	margin-top: 16px;
	padding: 0 16px;
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

.talks-list {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	gap: 2rem;
	margin-top: 64px;
	margin-bottom: 150px;
	padding: 0;
	max-width: 80%;
	li {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		list-style: none;
	}
}
</style>
