<script lang="ts">
    import { Chord, chordType } from "./music/chord";
    import type { MidiNumber } from "./music/types";
    import Button from "./Button.svelte";
    import { Instrument } from "./music/instrument";
    import { newNoteName, oldNoteName } from "./music/note_names";
    import * as s from "../settings/button";

    export let startTone: MidiNumber;
    export let chrdType: chordType;
    /** also determins row length*/
    export let shortcutKeys: string[];
    export let instrument: Instrument;

    function note(i: number) {
        return startTone + 7 * i;
    }
</script>

<div class="button-row">
    <h1 style:width={s.buttonSize}>{chrdType.toString()}</h1>
    {#each shortcutKeys as shortcutKey, i}
        <Button
            label={newNoteName(note(i))}
            topDescriptionLabel={oldNoteName(note(i))}
            bottomDescriptionLabel={`press ${shortcutKey}`}
            sound={new Chord(instrument, note(i), chrdType)}
            {shortcutKey}
        />
    {/each}
</div>

<style>
    /* Row styling */
    .button-row {
        display: flex;
        flex-direction: row;
        touch-action: none;
    }
</style>
