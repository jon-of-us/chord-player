<script lang="ts">
    import { Chord, chordType } from "./music/chord";
    import type { MidiNumber } from "./music/types";
    import Button from "./Button.svelte";
    import { Instrument } from "./music/instrument";
    import { newNoteName } from "./music/note_names";
    import * as s from "../settings/button";

    export let startTone: MidiNumber;
    export let chrdType: chordType;
    /** also determins row length*/
    export let shortcutKeys: string[];
    export let instrument: Instrument;
</script>

<div class="button-row">
    <h1 style:width={s.buttonSize}>{chrdType.toString()}</h1>
    {#each shortcutKeys as shortcutKey, i}
        <Button
            label={newNoteName(startTone + 7 * i)}
            sound={new Chord(instrument, startTone + 7 * i, chrdType)}
            {shortcutKey}
        />
    {/each}
</div>

<style>
    /* Row styling */
    .button-row {
        display: flex;
        flex-direction: row;
    }
</style>
