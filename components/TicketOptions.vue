<script setup lang="ts">
import { FRAMEWORKS, type Framework } from '~~/helpers/constants';
import { projects } from '../conference';

const ticket = useTicket();

function selectFramework(framework: Framework) {
	if (ticket.value) {
		const updatedTicket = {
			...ticket.value,
			favoriteFrameworks: framework,
		};
		setTicket(updatedTicket);
		ticket.value = updatedTicket;
	}
}
</script>

<template>
	<div class="ticket-editor">
		<div class="frameworks-picker">
			<div
				:class="[
					'framework',
					framework,
					{ selected: framework === ticket.favoriteFrameworks.split(',')[0] },
				]"
				v-for="framework in FRAMEWORKS"
				@click="selectFramework(framework)"
			>
				<img
					width="100"
					height="100"
					:title="framework"
					:alt="`Select ${framework.toLocaleLowerCase()} theme`"
					:src="
						projects[framework.toLowerCase()]?.logo ??
						`/projects/${framework.toLocaleLowerCase()}.svg`
					"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.ticket-editor {
	width: 100%;
	max-width: 800px;
	@media screen and (max-width: 738px) {
		margin-top: 64px;
	}
}

.select-title {
	font-size: 1em;
	font-weight: bold;
}

.frameworks-picker {
	display: flex;
	flex-wrap: wrap;
	font-size: 0.9rem;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	margin: 24px 0;
	@media screen and (min-width: 738px) {
		width: 700px;
	}
	@media screen and (min-width: 900px) {
		max-width: 1200px;
		width: 900px;
		margin-left: -50px;
	}
}

.frameworks-picker img {
	transform-origin: 50% 50%;
	transition: 0.16s ease;
	transition-property: transform, width, height, opacity;
	width: 64px;
	height: 64px;
	cursor: pointer;
	padding: 12px 12px;
	opacity: 0.5;
	object-fit: contain;
	@media screen and (max-width: 738px) {
		width: 84px;
		height: 84px;
		padding: 1.4em;
	}
	@media screen and (max-width: 500px) {
		padding: 1.8em;
	}
}

.frameworks-picker .framework {
	position: relative;
	transition: 0.16s ease;
	transition-property: transform, opacity;
	backface-visibility: hidden;
	&::before {
		content: '';
		position: absolute;
		bottom: 6px;
		left: calc(50% - 4px);
		height: 8px;
		width: 8px;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
		background-color: rgba(255, 255, 255, 0.16);
		border-radius: 4px;
		transform: scale(0);
		opacity: 0;
		transition: 0.16s ease;
		transition-property: transform, opacity;
	}
	&.selected img,
	&:hover img {
		transform: translateY(-12px) scale(1.3);
	}
}
.frameworks-picker .framework.selected::before {
	transform: scaleX(1);
	opacity: 1;
}
@media screen and (min-width: 738px) {
	.frameworks-picker img:hover {
		transform: none;
	}
}
.frameworks-picker div.selected img,
.frameworks-picker img:hover {
	opacity: 1;
}
</style>
