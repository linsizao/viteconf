<script lang="ts" setup></script>

<template>
	<section class="section-container">
		<div class="section-content">
			<h4>Code Of Conduct</h4>
			<div class="coc">
				<h5>Our Pledge</h5>
				<p>
					In the interest of fostering an open and welcoming environment, we as
					contributors and maintainers pledge to making participation in our
					project and our community a harassment-free experience for everyone,
					regardless of age, body size, disability, ethnicity, sex
					characteristics, gender identity and expression, level of experience,
					education, socio-economic status, nationality, personal appearance,
					race, religion, political party, or sexual identity and orientation.
					Note, however, that religion, political party, or other ideological
					affiliation provide no exemptions for the behavior we outline as
					unacceptable in this Code of Conduct.
				</p>
				<h5>Our Standards</h5>

				<p>
					Examples of behavior that contributes to creating a positive
					environment include:
				</p>

				<ul>
					<li>Using welcoming and inclusive language</li>
					<li>Being respectful of differing viewpoints and experiences</li>
					<li>Gracefully accepting constructive criticism</li>
					<li>Focusing on what is best for the community</li>
					<li>Showing empathy towards other community members</li>
				</ul>

				<p>Examples of unacceptable behavior by participants include:</p>

				<ul>
					<li>
						The use of sexualized language or imagery and unwelcome sexual
						attention or advances
					</li>
					<li>
						Trolling, insulting/derogatory comments, and personal or political
						attacks
					</li>
					<li>Public or private harassment</li>
					<li>
						Publishing others' private information, such as a physical or
						electronic address, without explicit permission
					</li>
					<li>
						Other conduct which could reasonably be considered inappropriate in
						a professional setting
					</li>
				</ul>

				<h5>Our Responsibilities</h5>

				<p>
					Project maintainers are responsible for clarifying the standards of
					acceptable behavior and are expected to take appropriate and fair
					corrective action in response to any instances of unacceptable
					behavior.
				</p>

				<p>
					Project maintainers have the right and responsibility to remove, edit,
					or reject comments, commits, code, wiki edits, issues, and other
					contributions that are not aligned to this Code of Conduct, or to ban
					temporarily or permanently any contributor for other behaviors that
					they deem inappropriate, threatening, offensive, or harmful.
				</p>

				<h5>Scope</h5>

				<p>
					This Code of Conduct applies both within project spaces and in public
					spaces when an individual is representing the project or its
					community. Examples of representing a project or community include
					using an official project e-mail address, posting via an official
					social media account, or acting as an appointed representative at an
					online or offline event. Representation of a project may be further
					defined and clarified by project maintainers.
				</p>

				<h5>Enforcement</h5>

				<p>
					Instances of abusive, harassing, or otherwise unacceptable behavior
					may be reported by contacting the ViteConf moderators by DM at
					<a href="https://chat.vitejs.dev">Vite Land</a>. All complaints will
					be reviewed and investigated and will result in a response that is
					deemed necessary and appropriate to the circumstances. The project
					team is obligated to maintain confidentiality with regard to the
					reporter of an incident. Further details of specific enforcement
					policies may be posted separately.
				</p>

				<p>
					Project maintainers who do not follow or enforce the Code of Conduct
					in good faith may face temporary or permanent repercussions as
					determined by other members of the project's leadership.
				</p>

				<h5>Attribution</h5>

				<p>
					This Code of Conduct is adapted from the
					<a href="https://www.contributor-covenant.org">Contributor Covenant</a
					>, version 1.4, available at
					https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
				</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
.section-container {
	position: relative;
	margin-top: 90px;
	background-color: #000;
}

.section-content {
	margin-top: 40px;
	max-width: min(85%, 780px);
}

h4 {
	margin-bottom: 52px;
	font-size: 4.2rem;
	font-weight: 800;
	line-height: 1;
	letter-spacing: -2px;
}
h5 {
	max-width: unset;
	font-size: 2.5rem;
	margin-top: 3rem;
}
p {
	margin-top: 2rem;
	margin-bottom: 2rem;
}
a {
	color: var(--app-color-foreground-violet-light);
}
</style>
