<!-- Button.svelte -->

<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import type { Sound } from "./music/tones";
    export let sound: Sound;
    export let shortcutKey: string;

    function playSound(): void {
        sound.start();
    }

    function stopSound(): void {
        if (sound) {
            sound.stop();
        }
    }

    function handleKeyDown(event: KeyboardEvent): void {
        if (event.key === shortcutKey) {
            playSound();
        }
    }

    function handleKeyUp(event: KeyboardEvent): void {
        if (event.key === shortcutKey) {
            stopSound();
        }
    }

    onMount(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            stopSound();
        };
    });

    onDestroy(() => {
        stopSound();
    });
</script>

<button
    on:mousedown={playSound}
    on:mouseup={stopSound}
    on:mouseleave={stopSound}
>
    Press me!
</button>

<style>
    button {
        width: 80px;
        height: 80px;
        background-color: #888;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

    button:hover {
        background-color: #666;
    }
</style>
