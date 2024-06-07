<script lang="ts">
    export let index: number;

    const prevHandler = () => {
        index--;
    }

    const nextHandler = () => {
        index++;
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-full flex justify-center gap-5">
    <i class="fa-solid fa-circle-chevron-left" on:click={prevHandler}></i>
    <i class="fa-solid fa-circle-chevron-right" on:click={nextHandler}></i>
</div>

<style lang="postcss">
    i {
        @apply text-primary text-3xl;
    }
</style>