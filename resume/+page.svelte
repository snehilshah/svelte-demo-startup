<svelte:head>
	<title>resume</title>
	<meta
		name="description"
		content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
	/>
	<meta name="og:title" content="" />
	<meta
		name="og:description"
		content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
	/>
	<meta name="og:type" content="website" />
	<meta name="og:url" content="" />
	<meta name="og:site_name" content="" />
	<meta name="twitter:title" content="" />
	<meta
		name="twitter:description"
		content=""
	/>
</svelte:head>

<div class="mt-4 space-y-3 text-neutral-700 dark:text-neutral-300 sm:text-lg">
	<div class="resume-section">
		<h2>Education</h2>
		<div class="resume-content space-y-1">
			<div class="spread">
				<h3 class="resume-heading">Mumbai University</h3>
				<i class="text-end">Aug. 2020 - May 2024</i>
			</div>
			<div class="spread">
				<i class="leading-tight">
					Bachelor of Computer Engineering<br />
				</i>
			</div>
			<p>CGPA: <b>8.7</b></p>
		</div>
	</div>
	<div class="resume-section">
		<h2>Technical Skills</h2>
		<div class="resume-content space-y-1">
			<p>
				<b>Languages: </b> C++, Java, JavaScript, Python, Rust, C, Go, HTML, CSS
			</p>
			<p>
				<b>Developer Tools: </b> Git, Linux, Visual Studio, NPM 
			</p>
			<p>
				<b>Awards: </b> Tech Expo 2024 Runner Up
			</p>
		</div>
	</div>
	<div class="resume-section">
		<h2>Experience</h2>
		<div class="resume-content space-y-5">
			<div class="space-y-1">
				<div class="spread">
					<h3 class="resume-heading">Full Stack Developer Intern </h3>
					<p class="text-end">Nov. 2022 - Apr. 2023</p>
				</div>
				<div class="spread">
					<i>Indian Development Foundation (NGO)</i>
				</div>
				<ul class="list-disc list-inside pl-3 pt-1">
					<li>
						Created backend and handled database administration
					</li>
					<li>Built the logic for the management of all personnel.</li>
					<li>Simplified the grading system for teachers.</li>
				
				</ul>
			</div>
			<div class="space-y-1">
				<div class="spread">
					<b class="text-xl">Software Developer Intern</b>
					<p class="text-end">Apr 2023 - Nov 2023</p>
				</div>
				<div class="spread">
					<i>Agenda Builder</i>
					<i>Mumbai</i>
				</div>
				<ul class="list-disc list-inside pl-3 pt-1">
					<li>Created a project planner with complete customizable layout</li>
					<li>Built all the backend APIs and database connections</li>
					<li>
						Implemented authentication with Google accounts using JWT
					</li>
				</ul>
			</div>
			<div class="space-y-1">
				<div class="spread">
					<b class="text-xl">More experience</b>
					<p class="text-end">July 2023 - Sep 2023</p>
				</div>
				<div class="spread">
					<i>Self-Employed</i>
				</div>
				<ul class="list-disc list-inside pl-3 pt-1">
					<li>Deployed 10,000 lines of code without encountering a single bug</li>
					<li>Squashed bugs faster than you can say "Are you sure it's not a feature?"</li>
					<li>
						Implemented code that's so compact and efficient, it's practically poetry. 
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="resume-section">
		<h2>Projects</h2>
		<div class="resume-content space-y-4">
			<div class="space-y-1">
				<div class="spread">
					<p>
						<b class="text-lg">S3A-Net for FSL Based HSI Classification</b><br />
						<i>Python, Tensorflow</i>
					</p>
					<p class="text-end">Present</p>
				</div>
				<ul class="list-disc list-inside pl-3 pt-1">
					<li>
						Developed S3A-Net, a groundbreaking Spatial-Spectral Self-Attention Network, for hyperspectral image classification with superior results
					</li>
					<li>
						Implemented <b>self-attention</b> mechanisms within S3A-Net to capture spatial and spectral features effectively, boosting 
						classification model's discriminative power.
					</li>
					<li>Integrated few-shot learning techniques into the framework, enabling accurate classification with limited labeled training samples.</li>
				</ul>
			</div>
			<div class="space-y-1">
				<div class="spread">
					<p>
						<b class="text-lg">Plan-it ©</b> <br/>
						<i>Nextjs, TailwindCSS</i>
					</p>
					<p class="text-end">March 2023</p>
				</div>
				<ul class="list-disc list-inside pl-3 pt-1">
					<li>
						Led development of 'Plan-It,' a task management solution with NLP integration for streamlined organization and collaboration.
					</li>
					<li>
						Overcame <b>NLP implementation</b> challenges through research, framework selection, and iterative improvement.
						</li>
					<li>
						Delivered robust task management system with intuitive interfaces, collaboration features, and smart task suggestions, ensuring 
						effective goal achievement with data security.
						</li>

				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.resume-section h2 {
		@apply font-serif text-2xl border-b-[1px] text-black dark:text-white;
	}
	.resume-section .resume-content {
		@apply sm:px-4 py-3;
	}
	.resume-heading {
		@apply font-serif text-xl font-bold text-black dark:text-white;
	}

	.spread {
		@apply flex justify-between items-center font-serif text-black dark:text-white;
	}

	i {
		@apply font-serif text-[105%] leading-[100%] text-neutral-800 dark:text-[#D4D4D4];
	}
</style>
