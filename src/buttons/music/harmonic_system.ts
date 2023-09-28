import type { MidiNumber } from "./types";

export function noteName(note: MidiNumber): string {
    return ((7 * (note + 3)) % 12).toString();
}
