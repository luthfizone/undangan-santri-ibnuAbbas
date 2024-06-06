<script lang="ts">
    export let text: String = "TEXT";
    export let icon: string = ""
    export let size: "sm" | "md" | "lg" = "md";
</script>

<button on:click class="w-fit flex gap-2 items-center { size === 'sm' ? 'px-6 py-1' : size === 'md' ? 'px-8 py-2' : 'px-10 py-4' } rounded  font-semibold text-primary bg-gradient-to-r from-green-600 to-green-400">
    {#if icon}
        <i class="{icon}"></i>
    {/if}
    {text}
</button>