<script lang="ts">
    export let isMouseDown: boolean;
    import { onMount } from "svelte";

    onMount(() => {
        window.addEventListener("mousedown", () => {
            isMouseDown = true;
        });
        window.addEventListener("mouseup", () => {
            isMouseDown = false;
        });
        window.addEventListener("touchstart", () => {
            isMouseDown = true;
        });
        window.addEventListener("touchend", () => {
            isMouseDown = false;
        });
    });
</script>

<div />
