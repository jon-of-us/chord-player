import * as Soundfont from "soundfont-player";
import type { MidiNumber } from "./types";

export class Instrument {
    private instrument: Soundfont.Player | null;

    constructor() {
        this.instrument = null;
    }

    async play(note: MidiNumber): Promise<Soundfont.Player> {
        if (this.instrument == null) {
            this.instrument = await Soundfont.instrument(
                new (window.AudioContext ||
                    (window as any).webkitAudioContext)(),
                "acoustic_grand_piano"
            );
        }
        return this.instrument.play(note.toString());
    }
}
