<!-- ButtonRow.svelte -->

<script lang="ts">
    import { Chord, chordType } from "./music/chords";
    import type { midiNumber } from "./music/tones";
    import Button from "./Button.svelte";

    export let startTone: midiNumber;
    export let chrdType: chordType;
    /** also determins row length*/
    export let shortcutKeys: string[];
</script>

<div class="button-row">
    {#each shortcutKeys as shortcutKey, i}
        <Button sound={new Chord(startTone + 7 * i, chrdType)} {shortcutKey} />
    {/each}
</div>

<style>
    /* Row styling */
    .button-row {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
    }
</style>
