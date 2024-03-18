<script lang="ts">
	import Icon from '@iconify/svelte';
	const icon_size = 24;
</script>

<div class="mt-20 mb-8">
	<div class="flex flex-col gap-6 items-center justify-center">
		<div class="flex gap-6 text-black dark:text-white">
			<a href="https://github.com/adityaSawant0912/" target="_blank">
				<Icon
					icon="mdi:github"
					width={icon_size}
					height={icon_size}
					class="transition-all hover:brightness-[.80]"
				/>
			</a>
			<a href="mailto:adityasawant09@gmai.com" target="_blank">
				<Icon
					icon="mdi:email"
					width={icon_size}
					height={icon_size}
					class="transition-all hover:brightness-[.80]"
				/>
			</a>
			<a href="https://www.linkedin.com/in/adityasawant09/" target="_blank">
				<Icon
					icon="devicon:linkedin"
					width={icon_size}
					height={icon_size}
					class="transition-all hover:brightness-[.80]"
				/>
			</a>
		</div>
	</div>
</div>
