<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import { ConfirmationType, type RSVPConfirmation } from '../../constants/rsvp_confirmation';
	import RsvpMessage from '$lib/components/RSVPMessage.svelte';
	import PaginationNavigator from '$lib/components/PaginationNavigator.svelte';
	import { rsvps, createRSVP, loadRSVPS } from '../../stores/rsvp';
	import { numDataPerPage } from '../../constants/numbers';
	import { page } from '$app/stores';
	import santriData from '../../data/outputSantriName.json';

	// get santri's name by param id
	const data = santriData;

	const paramId = $page.params.id;
	const name: string = data[paramId as keyof typeof data];

	// transition variables
	let invitationInfoTransition: boolean = false;
	let coverTransition: boolean = false;
	let susunanAcaraTransition: boolean = false;
	let galeriTransition: boolean = false;
	let quoteTransition: boolean = false;
	let rsvpTransition: boolean = false;
	let penutup1Transition: boolean = false;
	let penutup2Transition: boolean = false;

	// gallery assets
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

	// rsvp
	let rsvp: RSVPConfirmation = {
		name: '',
		confirmation: ConfirmationType.HADIR,
		message: ''
	};
	const submitRsvp = async (e: any) => {
		e.preventDefault();
		await createRSVP(rsvp);
		rsvp = {
			name: '',
			confirmation: ConfirmationType.HADIR,
			message: ''
		};
		await loadRSVPS();
	};
	let paginationIndex: number = 1;
	$: {
		// prevent index out arrays
		if (paginationIndex > Math.ceil($rsvps.length / numDataPerPage)) {
			paginationIndex = 1;
		} else if (paginationIndex < 1) {
			paginationIndex = Math.ceil($rsvps.length / numDataPerPage);
		}
	}

	// helper
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		section?.scrollIntoView({ behavior: 'smooth' });
	};

	const openNewTab = (url: string) => {
		window.open(url, '_blank');
	};

	const downloadImage = (url: string, filename: string) => {
		var link = document.createElement('a');
		link.href = url;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	// toggle transition variables of each sections
	function actionWhenInViewport(e: any) {
		const elementId = e.id;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				if (elementId === 'invitationInfoTransition') {
					invitationInfoTransition = true;
				} else if (elementId === 'coverTransition') {
					coverTransition = true;
				} else if (elementId === 'susunanAcaraTransition') {
					susunanAcaraTransition = true;
				} else if (elementId === 'galeriTransition') {
					galeriTransition = true;
				} else if (elementId === 'quoteTransition') {
					quoteTransition = true;
				} else if (elementId === 'rsvpTransition') {
					rsvpTransition = true;
				} else if (elementId === 'penutup1Transition') {
					penutup1Transition = true;
				} else if (elementId === 'penutup2Transition') {
					penutup2Transition = true;
				}
			}
		});

		observer.observe(e);
	}
</script>

<!-- HTML -->
<div class="container w-full mx-auto bg-primary h-full">
	<!-- welcome -->
	<div class="welcome flex flex-col items-center w-full h-section mb-40">
		<img src="/img/bg-welcome-ibnuabbas.png" class="w-full" alt="bg-bg-welcome-ibnuabbas" />
		<div class="texts mt-20 mb-10 flex flex-col gap-4 justify-center text-center text-primary">
			<h2 style="font-size: 18px;">Yth. Bapak & Ibu Wali Santri</h2>
			<h1 class="font-secondary px-2" style="font-size: 24px;">
				{name ? name : 'Santriwan/Santriwati'}
			</h1>
			<p>di tempat</p>
		</div>
		<Button
			text="Buka Undangan"
			icon="fa-solid fa-envelope-open"
			on:click={() => scrollToSection('invitationInfoTransition')}
		/>
	</div>

	<!-- invitation info -->
	<div
		id="invitationInfoTransition"
		use:actionWhenInViewport
		class="mx-auto w-[340px] h-[908px] flex flex-col items-center p-7 pt-24 mb-20"
	>
		{#if invitationInfoTransition}
			<div
				class="titles text-center text-secondary flex flex-col items-center gap-5 mb-10"
				transition:fade={{ delay: 500 }}
			>
				<!-- <h2>Kami mengundang Anda, untuk menghadiri acara</h2> -->
				<!-- <h2><span class="text-accent">Wisuda Pondok Pesantren<br>Tahfizhul Qur’an Ibnu Abbas Klaten</span> SMPIT-SMAIT-Ma’had Aly Tahun Ajaran 2022-2023</h2> -->
				<img src="/img/infos/info-title.png" alt="" />
			</div>
			<div class="info-blocks flex flex-col gap-4 mb-4" transition:scale={{ delay: 1500 }}>
				<div class="top flex justify-between">
					<img src="/img/infos/info-tanggal.png" alt="" />
					<img src="/img/infos/info-waktu.png" alt="" />
				</div>
				<img src="/img/infos/info-alamat.png" alt="" />
			</div>
			<div transition:scale={{ delay: 3000 }}>
				<Button
					text="Buka Map"
					icon="fa-solid fa-location-dot"
					on:click={() => openNewTab('https://maps.app.goo.gl/oXiRefHXZBYL3Cyg8')}
				/>
			</div>
		{/if}
	</div>

	<!-- cover -->
	<div id="coverTransition" use:actionWhenInViewport class="cover mb-10">
		{#if coverTransition}
			<img
				src="/img/bg-cover-ibnuabbas.png"
				alt=""
				class="w-full"
				transition:fade={{ delay: 500, duration: 1000 }}
			/>
		{/if}
	</div>

	<!-- susunan acara -->
	<div id="susunanAcaraTransition" use:actionWhenInViewport class="susunan-acara p-4 mb-20">
		{#if susunanAcaraTransition}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img
				src="/img/susunan-acara.png"
				alt=""
				class="w-full"
				on:click={() => downloadImage('/img/susunan-acara.png', 'Susunan Acara.png')}
				transition:scale={{ delay: 2000, duration: 500 }}
			/>
		{/if}
	</div>

	<!-- galeri -->
	<div
		id="galeriTransition"
		use:actionWhenInViewport
		class="galeri flex flex-col items-center mb-40"
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
			<Button
				text="Buka Semua Foto"
				icon="fa-solid fa-images"
				on:click={() => openNewTab('TODO')}
			/>
		{/if}
	</div>

	<!-- quote -->
	<div
		id="quoteTransition"
		use:actionWhenInViewport
		class="quote flex flex-col items-center px-4 mb-40"
	>
		{#if quoteTransition}
			<img
				src="/img/motif-green-islamic-1.png"
				alt=""
				transition:fade={{ delay: 500, duration: 1000 }}
			/>
			<div class="content flex flex-col items-center gap-10 mt-20 mb-20">
				<img
					src="/img/illustration-graduation.png"
					alt=""
					transition:scale={{ delay: 500, duration: 1000 }}
				/>
				<div
					class="texts text-primary text-center"
					transition:fade={{ delay: 1000, duration: 1000 }}
				>
					<p class="mb-10 italic opacity-75">
						“Selamat kepada para wisudawan wisudawati, dan kami titipkan kepada wali santri, kami
						telah berjuang dengan segala keterbatasan kami untuk mendidik putra-putri bapak ibu
						semuanya sampai marhalah mereka lulus. Mereka sejatinya, secara tuntutan syariah, sama
						persis dengan kita. Sebagai Da'i. Sebagai Murabbi. Sebagai Mujahid. Maka kami mohon
						bapak ibu untuk mengikutsertakan mereka dalam dunia dakwah, dalam dunia perbaikan
						masyarakat...”
					</p>
					<p>
						(Pesan Allahuyarham KH. Mu'inudinillah Basri pada Wisuda Santri PPTQ Ibnu Abbas
						Klaten tahun 2018)
					</p>
				</div>
			</div>
			<img
				src="/img/motif-green-islamic-1.png"
				class="rotate-180"
				alt=""
				transition:fade={{ delay: 500, duration: 1000 }}
			/>
		{/if}
	</div>

	<!-- RSVP -->
	<div
		id="rsvpTransition"
		use:actionWhenInViewport
		class="rsvp flex flex-col items-center mb-40 px-5"
	>
		{#if rsvpTransition}
			<h2
				class="text-accent text-center font-bold mb-2"
				transition:fade={{ delay: 500, duration: 500 }}
			>
				Wishes & RSVP
			</h2>
			<p class="text-primary text-center mb-8" transition:fade={{ delay: 500, duration: 500 }}>
				Ucapan Selamat & Konfirmasi Kehadiran
			</p>
			<form action="" class="w-full mb-10" transition:fade={{ delay: 500, duration: 500 }}>
				<div class="mb-4 w-full">
					<input
						type="text"
						placeholder="Nama"
						name="nama"
						id="nama"
						bind:value={rsvp.name}
						class="w-full bg-white bg-opacity-25 focus:bg-opacity-50 px-4 py-2 border-none rounded outline-secondary focus:outline-0 text-primary"
					/>
				</div>
				<div class="mb-4">
					<textarea
						name="ucapan"
						placeholder="Ucapan"
						id="ucapan"
						bind:value={rsvp.message}
						class="w-full bg-white bg-opacity-25 focus:bg-opacity-50 px-4 py-2 border-none rounded outline-secondary focus:outline-0 text-primary min-h-40"
					></textarea>
				</div>
				<div class="mb-4">
					<select
						name="konfirmasi-kehadiran"
						id="konfirmasi-kehadiran"
						bind:value={rsvp.confirmation}
						class="w-full bg-white bg-opacity-25 focus:bg-opacity-50 px-4 py-2 border-none rounded outline-secondary focus:outline-0 text-primary text-opacity-50"
					>
						<option value="konfirmasi-kehadiran" selected class="w-full bg-primary text-primary"
							>Konfirmasi Kehadiran</option
						>
						<option value={ConfirmationType.HADIR}>Hadir</option>
						<option value={ConfirmationType.TIDAK_HADIR}>Tidak Hadir</option>
						<option value={ConfirmationType.RAG_RAGU}>Ragu-Ragu</option>
					</select>
				</div>
				<button
					type="submit"
					class="w-full flex gap-2 items-center justify-center px-8 py-2 rounded font-semibold text-primary bg-gradient-to-r from-green-600 to-green-400"
					on:click={submitRsvp}>KIRIM</button
				>
			</form>
			<div class="rsvps w-full flex flex-col gap-4" transition:fade={{ delay: 500, duration: 500 }}>
				{#each $rsvps as rsvp, i}
					{#if i >= paginationIndex * numDataPerPage - numDataPerPage && i < paginationIndex * numDataPerPage}
						<RsvpMessage {rsvp} />
					{/if}
				{/each}
				{#if $rsvps.length > numDataPerPage}
					<PaginationNavigator bind:index={paginationIndex} />
				{/if}
			</div>
		{/if}
	</div>

	<!-- penutup -->
	<div class="penutup flex flex-col items-center gap-24 px-5">
		<div
			id="penutup1Transition"
			use:actionWhenInViewport
			class="penutup-1 flex flex-col items-center gap-5 text-primary text-center"
		>
			{#if penutup1Transition}
				<p class="opacity-75" transition:fade={{ delay: 500, duration: 1000 }}>
					Merupakan suatu kehormatan & kebahagiaan bagi kami, apabila Bapak / Ibu / Saudara/i
					berkenan hadir pada acara tersebut.
				</p>
				<p class="opacity-75" transition:fade={{ delay: 500, duration: 1000 }}>
					Demikian undangan ini kami sampaikan. Kami haturkan Jazakumullahu khairan katsiran
				</p>
				<h1 class="font-accent" transition:fade={{ delay: 500, duration: 1000 }}>
					Wassalamualaikum<br />Warahmatullah Wabarokatuh
				</h1>
			{/if}
		</div>
		<img src="/img/motif-green-islamic-2.png" alt="" />
		<div
			id="penutup2Transition"
			use:actionWhenInViewport
			class="penutup-2 flex flex-col items-center gap-5 text-primary text-center"
		>
			{#if penutup2Transition}
				<h1 class="font-accent" transition:fade={{ delay: 500, duration: 1000 }}>Terimakasih</h1>
				<p class="opacity-75" transition:fade={{ delay: 500, duration: 1000 }}>Hormat kami,</p>
				<p class="opacity-75" transition:fade={{ delay: 500, duration: 1000 }}>
					Direktur PPTQ Ibnu Abbas Klaten
				</p>
				<h2 style="font-size: 21px;" transition:fade={{ delay: 500, duration: 1000 }}>
					Muhammad Uqbah Aziz, Lc., MH
				</h2>
				<p class="opacity-75" transition:fade={{ delay: 500, duration: 1000 }}>
					Dan Keluarga Besar<br />Pondok Pesantren Tahfidzul Qur'an<br />Ibnu Abbas Klaten
				</p>
			{/if}
		</div>
	</div>

	<!-- footer -->
	<footer class="bg-primary py-4 text-center text-primary mt-20">
		<p>
			Made with ❤️ by <a
				href="https://takedevs.alfanmask.com/"
				target="_blank"
				class="text-[#ffd700] cursor-pointer">TakeDevs</a
			>
		</p>
	</footer>
</div>

<style lang="postcss">
	.container {
		background-image: url(/img/bg-dark-undangan.png);
		background-repeat: round;
	}
	#invitationInfoTransition {
		background-image: url('/img/bg-info.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
	select option {
		background: var(--bg-primary);
	}
</style>
