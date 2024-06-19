<script lang="ts">
	import { scale } from 'svelte/transition';
	import Gallery from '$lib/components/Gallery.svelte';

	// transition variables
	let galeriTransition: boolean = false;

	// gallery assets
	const galleryAssetUrls = [
		'/img/galleries/home/img-1.png',
		'/img/galleries/home/img-2.png',
		'/img/galleries/home/img-3.png',
		'/img/galleries/home/img-4.png',
		'/img/galleries/home/img-5.png',
		'/img/galleries/home/img-6.png',
		'/img/galleries/home/img-7.png',
		'/img/galleries/home/img-8.png',
		'/img/galleries/home/img-9.png',
		'/img/galleries/home/img-10.png',
		'/img/galleries/home/img-11.png',
		'/img/galleries/home/img-12.png',
		'/img/galleries/home/img-13.png',
		'/img/galleries/home/img-14.png',
		'/img/galleries/home/img-15.png',
		'/img/galleries/home/img-16.png',
		'/img/galleries/home/img-17.png',
		'/img/galleries/home/img-18.png',
		'/img/galleries/home/img-19.png',
		'/img/galleries/home/img-20.png'
	];

	// toggle transition variables of each sections
	function actionWhenInViewport(e: any) {
		const elementId = e.id;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				if (elementId === 'galeriTransition') {
					galeriTransition = true;
				}
			}
		});

		observer.observe(e);
	}
</script>

<div class="container flex flex-col w-[375px] mx-auto">
	<div class="container w-full mx-auto bg-primary h-full">
		<div class="flex flex-col items-center w-full h-2/4">
			<img src="/img/bg-welcome-ibnuabbas.png" class="w-full" alt="bg-bg-welcome-ibnuabbas" />
		</div>

		<!-- Galeri -->
		<div
			id="galeriTransition"
			use:actionWhenInViewport
			class="galeri flex flex-col items-center mt-20"
		>
			{#if galeriTransition}
				<h2
					class="text-primary text-center mb-[30px]"
					transition:scale={{ delay: 500, duration: 500 }}
				>
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
			{/if}
		</div>

		<!-- footer -->
		<footer class="bg-primary py-4 text-center text-primary mt-10">
			<p>
				Made with ❤️ by <a
					href="https://takedevs.alfanmask.com/"
					target="_blank"
					class="text-[#ffd700] cursor-pointer">TakeDevs</a
				>
			</p>
		</footer>
	</div>
</div>

<style lang="postcss">
	.container {
		background-image: url(/img/bg-dark-undangan.png);
		background-repeat: round;
	}
</style>
