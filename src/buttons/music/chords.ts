import type { midiNumber, Sound } from "./tones";
import { Tone } from "./tones";
import * as ms from "../../settings/music_settings";

export enum chordType {
    major,
    minor,
    diminished,
}

function chordTones(root: midiNumber, type: chordType): midiNumber[] {
    let basis: midiNumber[] = [];
    switch (type) {
        case chordType.major:
            basis = [root, root + 4, root + 7];
        case chordType.minor:
            basis = [root, root + 3, root + 7];
        case chordType.diminished:
            basis = [root, root + 3, root + 6];
    }
    basis = basis.map((tone) => (tone % 12) + ms.noteRange);
    // let bass = [
    // (root % 12) + ms.noteRange - 12,
    // (root % 12) + ms.noteRange - 24,
    // ];
    return basis;
    // return basis.concat(bass);
}

export class Chord implements Sound {
    private tones: Tone[] = [];

    constructor(private root: midiNumber, private type: chordType) {
        this.tones = chordTones(root, type).map((tone) => new Tone(tone));
    }

    start(): void {
        this.tones.forEach((tone) => tone.start());
    }

    stop(): void {
        this.tones.forEach((tone) => tone.stop());
    }
}
