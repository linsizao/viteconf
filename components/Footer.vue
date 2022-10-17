<script lang="ts" setup>
const footerItems = [
	{
		heading: 'Get Involved',
		links: [
			{
				title: 'Follow us on Twitter: @ViteConf',
				url: 'https://twitter.com/ViteConf',
			},
			{
				title: 'Discuss on Discord: chat.vitejs.dev',
				url: 'https://chat.vitejs.dev/',
			},
			{ title: 'Read the Docs', url: 'https://vitejs.dev/guide/' },
			{
				title: 'Contribute to the repo on GitHub',
				url: 'https://github.com/vitejs/vite',
			},
		],
	},
	{
		heading: 'Conference Details',
		links: [
			{ title: 'October 11 - 12, 2022' },
			{ title: 'Sign up for Free', url: '#' },
			{ title: 'Watch live all day from all over the world' },
		],
	},
	{
		heading: '',
		links: [
			{ title: 'Privacy', url: 'https://stackblitz.com/privacy-policy' },
			{
				title: 'Terms of Service',
				url: 'https://stackblitz.com/terms-of-service',
			},
		],
	},
];
</script>

<template>
	<footer class="section-container">
		<div class="section-content">
			<div class="footer-item" v-for="(item, i) in footerItems" :key="i">
				<h3>{{ item.heading }}</h3>
				<ul>
					<template v-for="(link, i) in item.links" :key="i">
						<li v-if="link.url">
							<a :href="link.url" v-html="link.title"></a>
						</li>
						<li v-else class="no-link" v-html="link.title"></li>
					</template>
				</ul>
			</div>
		</div>
		<div class="section-content copyright">
			<p>
				Made with love by the ViteConf team&nbsp;&nbsp;•&nbsp;&nbsp;Brought to
				you by
				<a href="https://stackblitz.com">
					<img
						loading="lazy"
						alt="StackBlitz"
						src="/images/logos/stackblitz-logo.svg"
					/>
				</a>
			</p>
		</div>
	</footer>
</template>

<style scoped lang="scss">
footer {
	display: flex;
	justify-content: center;
	margin-top: 64px;
	padding: 64px 16px;
	background: #000;
	& > div {
		flex: 1;
	}
}

.section-content {
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	gap: 140px;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		justify-content: flex-start;
		padding-left: 52px;
	}
	@media screen and (max-width: 500px) {
		padding-left: 0;
	}
}

.footer-item {
	@media screen and (max-width: 500px) {
		width: 100%;
		padding: 0 24px;
	}
	h3 {
		margin-bottom: 47px;
		color: #fff;
		font-size: 1rem;
		font-weight: 800;
		@media screen and (max-width: 500px) {
			font-size: 1.8rem;
		}
	}
	ul {
		padding: 0;
		li {
			list-style: none;
			font-size: 0.94rem;
			font-weight: 600;
			color: var(--app-color-foreground-violet-light);
			@media screen and (max-width: 500px) {
				font-size: 1.2rem;
			}
			&.no-link {
				@media screen and (max-width: 500px) {
					padding: 16px 0;
				}
				padding: 8px 0;
				color: rgba(255, 255, 255, 0.8);
			}
		}
		a {
			display: block;
			padding: 8px 0;
			@media screen and (max-width: 500px) {
				padding: 16px 0;
			}
			&:hover {
				color: #fff;
			}
		}
	}
}

.copyright {
	margin: 0;
	font-size: 0.84rem;
	font-weight: 600;
	line-height: 2;
	color: #aaa;
	@media screen and (max-width: 500px) {
		text-align: center;
		line-height: 2.4;
	}
	a {
		font-weight: bolder;
		color: #fff;

		img {
			display: inline-block;
			vertical-align: middle;
			margin-left: 10px;
			margin-top: -1px;
			height: 20px;
		}
	}
}
</style>
