<script lang="ts">
    import { input_store } from "./input_store";
    import MouseDown from "./MouseDown.svelte";
</script>

<div>
    <MouseDown bind:isMouseDown={$input_store.mouse.isDown} />
</div>
