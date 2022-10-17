<script lang="ts" setup>
import DiscordIcon from '~icons/ic/round-discord';
import TwitterIcon from '~icons/mdi/twitter';
</script>

<template>
	<div class="section-content get-involved">
		<h4>Get Involved!</h4>
		<div class="social-button-container">
			<a
				class="feature blue"
				href="https://twitter.com/ViteConf"
				aria-label="Follow ViteConf on Twitter"
			>
				<TwitterIcon />
				<div>
					<span>Follow us on Twitter</span>
					@ViteConf
				</div>
			</a>
			<a
				class="feature"
				href="https://chat.vitejs.dev/"
				aria-label="Join Discord"
			>
				<DiscordIcon />
				<div>
					<span>Discuss on Discord</span>
					chat.vitejs.dev
				</div>
			</a>
			<a href="https://github.com/vitejs/vite">
				<img aria-hidden="true" role="presentation" src="/images/github.svg" />
				Contribute to the repo
			</a>
			<a href="https://vitejs.dev/guide/">
				<img
					aria-hidden="true"
					role="presentation"
					src="/images/icons/book-light.svg"
				/>
				Read the Vite docs
			</a>
		</div>
	</div>
</template>

<style scoped lang="scss">
h2 {
	font-weight: 700;
}

.social-button-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 24px;
	width: min(100%, 720px);
	margin-bottom: 64px;
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
}

.social-button-container a {
	@media screen and (max-width: 1000px) {
		justify-content: center;
		align-items: center;
	}
}

.get-involved {
	margin-top: 0;
	margin-bottom: 100px;
	@media screen and (max-width: 500px) {
		margin-bottom: 0;
		padding: 0 16px;
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
