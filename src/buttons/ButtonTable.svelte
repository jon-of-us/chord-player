<script lang="ts">
    import ButtonRow from "./ButtonRow.svelte";
    import { Instrument } from "./music/instrument";
    import { chordType } from "./music/chord";
    import { startTone } from "../settings/button";
    import AudioActivateBar from "./AudioActivateBar.svelte";

    let showAudioActivate = false;
    function activateAudio() {
        showAudioActivate = true;
        setTimeout(() => {
            showAudioActivate = false;
        }, 1000);
    }
    let instrument = new Instrument(activateAudio);
</script>

<main>
    <AudioActivateBar bind:showAudioActivate />
    <ButtonRow
        {startTone}
        shortcutKeys={["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü"]}
        chrdType={chordType.major}
        {instrument}
    />
    <ButtonRow
        startTone={startTone + 9}
        shortcutKeys={["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"]}
        chrdType={chordType.minor}
        {instrument}
    />
    <ButtonRow
        startTone={startTone + 2 * 9}
        shortcutKeys={["y", "x", "c", "v", "b", "n", "m", ",", ".", "-", "_"]}
        chrdType={chordType.diminished}
        {instrument}
    />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
