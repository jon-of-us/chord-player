<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import type { Sound } from "./music/types";
    import * as s from "../settings/button";
    import { input_store } from "../input/input_store";

    export let sound: Sound;
    export let shortcutKey: string;
    export let label: string;
    export let topDescriptionLabel = "";
    export let bottomDescriptionLabel = "";
    let isOn = false;

    function playSound(): void {
        isOn = true;
        sound.start();
    }

    function stopSound(): void {
        isOn = false;
        sound.stop();
    }

    function handleMouseEnter(): void {
        isOn = true;
        if ($input_store.mouse.isDown) {
            setTimeout(() => {
                if (isOn) {
                    playSound();
                }
            }, 200);
        }
    }

    function handleTouchMove(): void {
        if (!isOn) {
            handleMouseEnter();
        }
    }

    function handleKeyDown(event: KeyboardEvent): void {
        if (event.key === shortcutKey && !isOn) {
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
    on:touchstart={playSound}
    on:mouseenter={handleMouseEnter}
    on:touchmove={handleTouchMove}
    on:pointerleave={stopSound}
    on:pointerup={stopSound}
    style:background-color={isOn ? "#606060" : "#404040"}
    style:width={s.buttonSize}
    style:height={s.buttonSize}
    style:margin={s.buttonMargin}
>
    {label}
    <p class="descriptionlabel" id="topDescriptionLabel">
        {topDescriptionLabel}
    </p>
    <p class="descriptionlabel" id="bottomDescriptionLabel">
        {bottomDescriptionLabel}
    </p>
</button>

<style>
    button {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;
        position: relative;
        font-weight: 300;
        font-size: 1.8rem;
        user-select: none;
        touch-action: none;
    }
    button:hover {
        opacity: 0.8;
    }
    .descriptionlabel {
        font-weight: 300;
        font-size: 1rem;
        margin: 0;
        margin-top: 6px;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        position: absolute;
        align-self: center;
        user-select: none;
    }
    button:hover .descriptionlabel {
        opacity: 0.6;
    }
    #topDescriptionLabel {
        top: 0px;
    }
    #bottomDescriptionLabel {
        bottom: 0px;
    }
</style>
