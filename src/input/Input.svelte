<script lang="ts">
    import { input_store } from "./input_store";
    import PointerDown from "./PointerDown.svelte";
</script>

<div>
    <PointerDown bind:isPointerDown={$input_store.isPointerDown} />
</div>
