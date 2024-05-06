<script lang="ts">
    export let showAudioActivate: boolean;
</script>

<h1 style:opacity={showAudioActivate ? 1 : 0}>
    audio activates... (internet required)
</h1>

<style>
    h1 {
        color: rgb(255, 83, 83);
        transition: 0.2s opacity ease-in-out;
    }
</style>
