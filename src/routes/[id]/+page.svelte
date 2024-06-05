<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Gallery from "$lib/components/Gallery.svelte";


</script>


<!-- HTML -->
<div class="container w-[520px] mx-auto bg-primary h-full">
    <!-- welcome -->
    <div class="welcome flex flex-col items-center w-full h-section mb-40">
        <img src="/img/bg-welcome-ibnuabbas.png" class="w-full" alt="bg-bg-welcome-ibnuabbas">
        <div class="texts mt-20 mb-10 flex flex-col gap-4 justify-center text-center text-primary">
            <h2>Yth. Bapak & Ibu Wali Santri</h2>
            <h1 class="font-secondary">Muhammad Luthfi Akbar</h1>
            <p>di tempat</p>
        </div>
        <Button text="Buka Undangan" icon="fa-solid fa-envelope-open" color="greenish-gradient" />
    </div>

    <!-- invitation info -->
    <div class="invitation-info mx-auto w-[480px] h-[1156px] flex flex-col items-center p-7 pt-52 mb-20">
        <div class="titles text-center text-secondary flex flex-col items-center gap-5">
            <h2>Kami mengundang Anda, untuk menghadiri acara</h2>
            <h2><span class="text-accent">Wisuda Pondok Pesantren<br>Tahfizhul Qur’an Ibnu Abbas Klaten</span> SMPIT-SMAIT-Ma’had Aly Tahun Ajaran 2022-2023</h2>
        </div>
        <div class="info-blocks flex flex-col gap-10 mb-10">
            <div class="top flex justify-between">
                <img src="/img/info-tanggal.png" alt="">
                <img src="/img/info-waktu.png" alt="">
            </div>
            <img src="/img/info-alamat.png" alt="">
        </div>
        <Button text="Buka Map" icon="fa-solid fa-location-dot" color="greenish-gradient" />
    </div>

    <!-- cover -->
    <div class="cover">
        <img src="/img/bg-cover-ibnuabbas.png" alt="" class="w-full">
    </div>

    <!-- susunan acara -->
    <div class="susunan-acara p-8 mb-20">
        <img src="/img/susunan-acara.png" alt="" class="w-full">
    </div>

    <!-- galeri -->
    <div class="galeri flex flex-col items-center mb-40">
        <h2 class="text-primary text-center mb-[30px]">Galeri</h2>
        <div class="galleries flex flex-col justify-center gap-[30px] px-[30px] mb-[30px]">
            <Gallery imgUrl="/img/galleries/img-1.png" />
            <Gallery imgUrl="/img/galleries/img-2.png" />
            <Gallery imgUrl="/img/galleries/img-3.png" />
            <Gallery imgUrl="/img/galleries/img-4.png" />
            <Gallery imgUrl="/img/galleries/img-5.png" />
            <Gallery imgUrl="/img/galleries/img-6.png" />
            <Gallery imgUrl="/img/galleries/img-7.png" />
            <Gallery imgUrl="/img/galleries/img-8.png" />
        </div>
        <Button text="Buka Semua Foto" icon="fa-solid fa-images" color="greenish-gradient" />
    </div>

    <!-- quote -->
    <div class="quote flex flex-col items-center px-10 mb-40">
        <img src="/img/motif-green-islamic-1.png" alt="">
        <div class="content flex flex-col items-center gap-10 mt-20 mb-20">
            <img src="/img/illustration-graduation.png" alt="">
            <div class="texts text-primary text-center">
                <p class="mb-10 italic">“Esok mungkin tak ada lagi tawa & tangis bersama. Tapi ingatlah, selama 3 hingga 6 tahun kita pernah bersama-sama. Jangan jadikan perpisahan ini sebagai alasan untuk memutus tali ukhuwah islamiyah. Jadikan perpisahan ini sebagai hal yang justru meningkatkan solidaritas kita. Kerjarlah mimpi kalian dan sampai bertemu lagi di titik terbaik menurut takdi Allah SWT”</p>
                <p>- Alfan Fikri Abdulhakim</p>
            </div>
        </div>
        <img src="/img/motif-green-islamic-1.png" class="rotate-180" alt="">
    </div>

    <!-- penutup -->
    <div class="penutup flex flex-col items-center gap-24 px-5">
        <div class="penutup-1 flex flex-col items-center gap-5 text-primary text-center">
            <p>Merupakan suatu kehormatan & kebahagiaan bagi kami, apabila Bapak / Ibu / Saudara/i berkenan hadir pada acara tersebut.</p>
            <p>Demikian undangan ini kami sampaikan. Kami haturkan Jazakumullahu khairan katsiran</p>
            <h1 class="font-accent">Wassalamualaikum Warahmatullah Wabarokatuh</h1>
        </div>
        <img src="/img/motif-green-islamic-2.png" alt="">
        <div class="penutup-2 flex flex-col items-center gap-5 text-primary text-center">
            <h1 class="font-accent">Terimakasih</h1>
            <p>Hormat kami,</p>
            <p>Direktur PPTQ Ibnu Abbas Klaten</p>
            <h2>Dr. KH. Hakimuddin Salim, L.c., M.A.</h2>
            <p>Dan Keluarga Besar<br>Pondok Pesantren Tahfidzul Qur'an<br>Ibnu Abbas Klaten</p>
        </div>
    </div>

    <!-- footer -->
    <footer class="bg-primary py-4 text-center text-primary mt-20">
        <p>Made with ❤️ by TakeDevs</p>
    </footer>
</div>


<style lang="postcss">
    .container{
        background-image: url(/img/bg-dark-undangan.png);
        background-repeat: round;
    }
    .invitation-info {
        background-image: url("/img/bg-info.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>