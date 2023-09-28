<script lang="ts">
    import ButtonRow from "./ButtonRow.svelte";
    import { Instrument } from "./music/instrument";
    import { chordType } from "./music/chords";

    let instrument = new Instrument();
</script>

<main>
    <ButtonRow
        startTone={60}
        shortcutKeys={["a", "s", "d", "f", "g", "h", "j"]}
        chrdType={chordType.major}
        {instrument}
    />
</main>
