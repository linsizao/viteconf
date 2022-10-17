<script setup lang="ts">
import { projects } from '../conference';
</script>

<template>
	<section class="section-container partners-container">
		<div class="section-content">
			<h4>Brought to you by</h4>
			<a
				target="_blank"
				rel="noopener"
				href="https://stackblitz.com/"
				class="main-sponsor"
			>
				<img
					loading="lazy"
					alt="StackBlitz"
					src="/images/logos/stackblitz-logo.svg"
				/>
			</a>
			<h6>and our Community Partners</h6>
			<div class="community-partners-container">
				<a target="_blank" rel="noopener" href="https://www.netlify.com/">
					<img loading="lazy" alt="Netlify" src="/images/logos/netlify.svg" />
				</a>
				<a
					target="_blank"
					rel="noopener"
					href="https://workers.cloudflare.com/"
				>
					<img
						loading="lazy"
						alt="Cloudflare Workers"
						src="/images/logos/cloudflare-worker.svg"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://www.thisdot.co/">
					<img
						loading="lazy"
						alt="This Dot Labs"
						src="/images/logos/dotlabs.svg"
						style="transform: translate(0, 5px)"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://www.shopify.com/">
					<img loading="lazy" alt="Shopify" src="/images/logos/shopify.svg" />
				</a>
				<a target="_blank" rel="noopener" :href="projects.storyblok.url">
					<img
						loading="lazy"
						alt="Storyblok"
						src="/images/logos/storyblok.svg"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://astro.build">
					<img loading="lazy" alt="Astro" src="/images/logos/astro.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://bun.sh">
					<img
						loading="lazy"
						widht="60"
						height="60"
						src="/projects/bun.svg"
						alt="Bun logo"
					/><img
						loading="lazy"
						height="50"
						width="80"
						src="/images/logos/bun.png"
						alt="Bun"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://vercel.com">
					<img loading="lazy" alt="Vercel" src="/images/logos/vercel.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://firebase.google.com/">
					<img loading="lazy" alt="Firebase" src="/images/logos/firebase.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://nuxtlabs.com/">
					<img loading="lazy" alt="NuxtLabs" src="/images/logos/nuxtlabs.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://fauna.com/">
					<img
						loading="lazy"
						height="50"
						width="140"
						alt="Fauna"
						src="/images/logos/fauna.svg"
					/>
				</a>
				<a target="_blank" rel="noopener" :href="projects.vueschool.url">
					<img
						loading="lazy"
						alt="Vue School"
						src="/images/logos/vueschool.svg"
						style="transform: translate(0, 5px); max-width: 175px"
					/>
				</a>
				<a target="_blank" rel="noopener" :href="projects.aws.url">
					<img
						loading="lazy"
						alt="AWS Amplify"
						src="/images/logos/aws-amplify.svg"
						style="transform: translate(0, 5px); max-width: 175px"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://zeroslopeevents.com/">
					<img
						loading="lazy"
						alt="Zero Slope"
						src="/images/logos/zeroslope.svg"
						style="transform: translate(0, 6px); max-width: 175px"
					/>
				</a>
				<a target="_blank" rel="noopener" :href="projects.supabase.url">
					<img loading="lazy" alt="supabase" src="/images/logos/supabase.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://dashibase.com/">
					<img
						loading="lazy"
						alt="Dashibase"
						src="/images/logos/dashibase.svg"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://mui.com/">
					<img loading="lazy" alt="MUI" src="/images/logos/mui.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://vuejs.org/">
					<img
						style="transform: scale(1.1)"
						loading="lazy"
						alt="Vue"
						src="/images/logos/vue.svg"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://angular.io/">
					<img loading="lazy" alt="Angular" src="/images/logos/angular.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://ionic.io/">
					<img loading="lazy" alt="ionic" src="/images/logos/ionic.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://nx.dev/">
					<img loading="lazy" alt="Nx" src="/images/logos/nx.svg" />
				</a>
				<a target="_blank" rel="noopener" href="https://deno.land/">
					<img loading="lazy" alt="Deno Logo" src="/projects/deno.svg" /><span
						style="font-size: 35px; margin-left: 2px; font-weight: 700"
						>Deno</span
					>
				</a>
				<a target="_blank" rel="noopener" href="https://nativescript.org/">
					<img
						loading="lazy"
						alt="NativeScript"
						src="/images/logos/nativescript.svg"
					/>
				</a>
				<a
					target="_blank"
					rel="noopener"
					style="
						width: 200px;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-items: space-around;
					"
					href="https://sveltesociety.dev/"
				>
					<img
						loading="lazy"
						alt="Svelte Society"
						src="/images/logos/sveltesociety.svg"
					/>
					<div
						style="
							height: 46px;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-items: space-around;
							font-size: 20px;
							font-weight: 700;
							line-height: 23px;
						"
					>
						<p>Svelte</p>
						<p>Society</p>
					</div>
				</a>
				<a target="_blank" rel="noopener" href="https://sveltesirens.dev/">
					<img
						loading="lazy"
						alt="Svelte Sirens"
						src="/images/logos/sveltesirens.svg"
						style="transform: scale(1.2)"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://storybook.js.org/">
					<img
						loading="lazy"
						alt="Storybook"
						src="/images/logos/storybook.svg"
					/>
				</a>
				<a target="_blank" rel="noopener" href="https://bytes.dev/">
					<img loading="lazy" alt="Bytes" src="/images/logos/bytes.png" />
				</a>
				<a target="_blank" rel="noopener" href="https://deepgram.com/">
					<img loading="lazy" alt="Deepgram" src="/images/logos/deepgram.svg" />
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
h6 {
	margin-bottom: 3.5rem;
}
.main-sponsor {
	margin-bottom: 92px;
	@media screen and (max-width: 500px) {
		padding: 0 42px;
	}
	img {
		width: 380px;
		max-width: 100%;
	}
}

.community-partners-container {
	display: flex;
	justify-content: center;
	justify-items: center;
	flex-wrap: wrap;
	gap: 64px 92px;
	width: min(90%, var(--app-size-container-max-width));
	img {
		height: 52px;
		max-width: 160px;
		object-fit: contain;
	}
	@media screen and (max-width: 1000px) {
		padding: 0 42px;
	}
	@media screen and (max-width: 500px) {
		gap: 64px;
	}
	a {
		display: flex;
		justify-content: center;
		gap: 7px;
		width: 200px;
	}
}
</style>
