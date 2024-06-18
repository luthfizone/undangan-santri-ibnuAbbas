<!-- <script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import { fade, fly, scale, slide } from 'svelte/transition';
	import Gallery from '$lib/components/Gallery.svelte';

	let galeriTransition: boolean = false;

	const galleryAssetUrls = [
		'/img/galleries/img-1.png',
		'/img/galleries/img-2.png',
		'/img/galleries/img-3.png',
		'/img/galleries/img-4.png',
		'/img/galleries/img-5.png',
		'/img/galleries/img-6.png',
		'/img/galleries/img-7.png',
		'/img/galleries/img-8.png'
	];

	const openNewTab = (url: string) => {
		window.open(url, '_blank');
	};
</script>

<h1 class="text-3xl">Welcome to Undangan</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<i class="fa-regular fa-lightbulb"></i>

<div class="galeri flex flex-col items-center mb-40">
	<h2 class="text-primary text-center mb-[30px]" transition:scale={{ delay: 500, duration: 500 }}>
		Galeri
	</h2>
	<div
		class="galleries flex flex-col justify-center gap-[30px] px-[30px] mb-[30px]"
		transition:scale={{ delay: 1000, duration: 1000 }}
	>
		{#each galleryAssetUrls as assetUrl, i}
			<div transition:scale={{ delay: 1000 + i * 1000, duration: 1000 }}>
				<Gallery imgUrl={assetUrl} />
			</div>
		{/each}
	</div>
	<Button
		text="Buka Semua Foto"
		icon="fa-solid fa-images"
		on:click={() =>
			openNewTab(
				'https://drive.google.com/drive/folders/1k9yTRwgDualOaZ1ETqQLqAiZ3KefkEhd?usp=sharing '
			)}
	/>
</div> -->
