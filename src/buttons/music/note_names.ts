import type { MidiNumber } from "./types";

export function newNoteName(note: MidiNumber): string {
    return ((7 * (note + 3)) % 12).toString();
}

export function oldNoteName(note: MidiNumber): string {
    return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][
        note % 12
    ];
}
