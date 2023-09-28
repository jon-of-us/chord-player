import type { MidiNumber, Sound } from "./types";
import { Tone } from "./tones";
import * as ms from "../../settings/music_settings";
import { Instrument } from "./instrument";

export enum chordType {
    major,
    minor,
    diminished,
}

function chordTones(root: MidiNumber, type: chordType): MidiNumber[] {
    let basis: MidiNumber[] = [];
    switch (type) {
        case chordType.major:
            basis = [root, root + 4, root + 7];
            break;
        case chordType.minor:
            basis = [root, root + 3, root + 7];
            break;
        case chordType.diminished:
            basis = [root, root + 3, root + 6];
            break;
    }
    basis = basis.map((tone) => (tone % 12) + ms.noteRange);
    let bass = [
        (root % 12) + ms.noteRange - 12,
        // (root % 12) + ms.noteRange - 24,
    ];
    // return basis;
    return basis.concat(bass);
}

export class Chord implements Sound {
    private tones: Tone[] = [];

    constructor(instrument: Instrument, root: MidiNumber, type: chordType) {
        this.tones = chordTones(root, type).map(
            (tone) => new Tone(instrument, tone)
        );
    }

    start(): void {
        this.tones.forEach((tone) => tone.start());
    }

    stop(): void {
        this.tones.forEach((tone) => tone.stop());
    }
}
