<script lang="ts" setup>
const { signupPage = 'https://viteconf.org' } = defineProps<{
	signupPage?: string;
}>();

const user = useUser();
const ticket = useTicket();

const confDate = { month: 'October', days: '11-12', year: '2022' };

const showCTA = useShowAfterUserInit(600);
const showDates = useShowAfterUserInit(1200);
</script>

<template>
	<section
		class="section-container"
		:style="`transition: opacity 0.6s; opacity: ${showCTA ? 1 : 0}`"
	>
		<section
			class="dates-container"
			:style="`transition: opacity 0.6s; opacity: ${showDates ? 1 : 0}`"
		>
			<div class="dates">
				<h1>
					<span class="gradient-stroke" :data-text="confDate.month">
						{{ confDate.month }}
					</span>
					<span class="gradient-full">{{ confDate.days }}</span>
				</h1>
			</div>
		</section>

		<section class="details">
			<p class="description">
				<slot>Making Web Development Instant</slot>
			</p>
			<div v-if="user && ticket">
				<button class="social-button blue" @click="goToUserTicket">
					View your ticket
				</button>
			</div>
			<template v-else>
				<p class="subheading">
					Register now and get your <strong>free ticket</strong> to a
					first-of-its-kind online conference
				</p>
				<RegistrationEmailForm :signupPage="signupPage" />
			</template>
		</section>
	</section>
</template>

<style scoped lang="scss">
@mixin gradient-text($gradient) {
	@supports (mix-blend-mode: lighten) {
		position: relative;
		display: block;
		color: #fff;
		background: #000;
		-webkit-text-stroke: 4px #fff;
		mix-blend-mode: lighten;

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: var(--app-background-gradient-blue_to_violet);
			pointer-events: none;
			mix-blend-mode: multiply;
		}

		&::after {
			content: attr(data-text);
			position: absolute;
			left: 0;
			z-index: 1;
			color: var(--app-color-shell);
			-webkit-text-stroke: 1px transparent;
			pointer-events: none;
		}
	}
}

.section-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: flex-start;
	gap: 100px;
	width: min(100%, var(--app-size-container-max-width));
	margin-top: 40px;
	margin-bottom: 32px;
	padding: 0 52px;
	@media screen and (max-width: 1200px) {
		gap: 72px;
	}
	@media screen and (max-width: 1024px) {
		grid-template-columns: 1fr 1.4fr;
		gap: 84px;
		padding: 0 64px;
	}
	@media screen and (max-width: 1000px) {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		margin-top: 16px;
	}
	@media screen and (max-width: 500px) {
		padding: 0 16px;
		margin-top: 4px;
	}
}

.dates-container {
	flex: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	transform-origin: center top;
	.dates {
		display: flex;
		flex-direction: column;
		align-items: center;
		transform: translateY(-20px);
	}
}

.gradient-stroke {
	display: block;
	color: var(--app-color-shell);
	font-weight: 800;
	line-height: 0.9;
	font-size: 120px;
	-webkit-background-clip: text;
	background-clip: text;
	&:before {
		content: attr(data-text);
		position: absolute;
		padding-right: 5px;
		background: var(--app-background-gradient-blue_to_violet);
		background-clip: text;
		-webkit-text-stroke: 4px transparent;
		z-index: -1;
	}
	@media screen and (max-width: 1200px) {
		font-size: 108px;
	}
	@media screen and (max-width: 1024px) {
		font-size: 90px;
	}
	@media screen and (max-width: 500px) {
		font-size: 72px;
	}
	&.year {
		font-size: 184px;
		@media screen and (max-width: 1200px) {
			font-size: 166px;
		}
		@media screen and (max-width: 1024px) {
			font-size: 138px;
		}
		@media screen and (max-width: 500px) {
			font-size: 114px;
		}
	}
}

.gradient-full {
	font-size: 200px;
	font-weight: 800;
	letter-spacing: -8px;
	line-height: 0.86;
	background-image: var(--app-background-gradient-blue_to_violet);
	background-clip: text;
	-webkit-text-fill-color: transparent;
	@media screen and (max-width: 1200px) {
		font-size: 180px;
	}
	@media screen and (max-width: 1024px) {
		font-size: 150px;
	}
	@media screen and (max-width: 500px) {
		font-size: 128px;
	}
}

.details {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: min(560px, 100%);
	margin-top: 8px;
}

.description {
	max-width: 550px;
	margin-bottom: 32px;
	font-size: 2rem;
	font-weight: 800;
	line-height: 1.16;
	@media screen and (max-width: 1200px) {
		font-size: 1.9rem;
	}
	@media screen and (max-width: 1024px) {
		font-size: 1.64rem;
	}
	@media screen and (max-width: 1000px) {
		// max-width: 380px;
		margin-bottom: 40px;
		font-size: 1.4rem;
		font-weight: 600;
		text-align: center;
	}
}

.subheading {
	margin-bottom: 24px;
	color: var(--app-color-foreground-blue-light);
	font-size: 1.6rem;
	@media screen and (max-width: 1024px) {
		font-size: 1.5rem;
	}
	@media screen and (max-width: 1000px) {
		margin-bottom: 32px;
		font-size: 1.6rem;
		text-align: center;
	}
	@media screen and (max-width: 500px) {
		margin-bottom: 16px;
		font-size: 1.4rem;
	}
}

form {
	@media screen and (max-width: 1000px) {
		width: 100%;
	}
}
</style>
