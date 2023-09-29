import { writable } from "svelte/store";

export const input_store = writable({
    mouse: {
        isDown: false,
    },
});
