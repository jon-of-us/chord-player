<!-- App.svelte -->

<script>
    import ButtonRow from "./buttons/ButtonRow.svelte";
    import { chordType } from "./buttons/music/chords";
</script>

<main>
    <ButtonRow
        startTone={50}
        shortcutKeys={["a", "s", "d", "f", "g", "h", "j"]}
        chrdType={chordType.major}
    />
</main>
