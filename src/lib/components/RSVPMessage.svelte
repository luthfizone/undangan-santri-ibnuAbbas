<script lang="ts">
	import type { ConfirmationType, RSVPConfirmation } from "../../constants/rsvp_confirmation";

    export let rsvp: RSVPConfirmation;

    // Remove all double quotes from confirmation and enclose the resulting string in double quotes
    rsvp.message = `"${rsvp.message.replace(/"/g, '')}"`;
</script>

<div class="w-full flex flex-col gap-4 px-2 py-4 rounded bg-gray-300">
    <div class="top flex justify-between items-center">
        <p class="text-accent !font-bold !text-xl">{rsvp.name}</p>
        <p class="bg-accent px-2 py-[2px] rounded-full text-primary !text-sm">{rsvp.confirmation}</p>
    </div>
    <p class="text-secondary italic">{rsvp.message}</p>
</div>