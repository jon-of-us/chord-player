<script lang="ts">
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
    import type { Sound } from "./music/types";

    export let sound: Sound;
    export let shortcutKey: string;
    export let label: string;
    let isOn = false;

    const dispatch = createEventDispatcher();

    function playSound(): void {
        isOn = true;
        sound.start();
        dispatch("click");
    }

    function stopSound(): void {
        isOn = false;
        sound.stop();
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
    on:touchstart={playSound}
    on:touchend={stopSound}
    style:background-color={isOn ? "#606060" : "#404040"}
>
    {label}
</button>

<style>
    button {
        width: 80px;
        height: 80px;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
    }
</style>
