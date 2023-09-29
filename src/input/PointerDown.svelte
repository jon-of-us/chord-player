<script lang="ts">
    export let isPointerDown: boolean;

    window.addEventListener("pointerDown", () => {
        isPointerDown = true;
    });
    window.addEventListener("pointerUp", () => {
        isPointerDown = false;
    });
</script>
