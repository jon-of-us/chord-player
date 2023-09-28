<script lang="ts">
    import { Chord, chordType } from "./music/chords";
    import type { MidiNumber } from "./music/types";
    import Button from "./Button.svelte";
    import { Instrument } from "./music/instrument";
    import { noteName } from "./music/harmonic_system";

    export let startTone: MidiNumber;
    export let chrdType: chordType;
    /** also determins row length*/
    export let shortcutKeys: string[];
    export let instrument: Instrument;
</script>

<div class="button-row">
    {#each shortcutKeys as shortcutKey, i}
        <Button
            label={noteName(startTone + 7 * i)}
            sound={new Chord(instrument, startTone + 7 * i, chrdType)}
            {shortcutKey}
        />
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
