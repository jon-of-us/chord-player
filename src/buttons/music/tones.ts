import * as Soundfont from "soundfont-player";
import type { Instrument } from "./instrument";
import type { MidiNumber, Sound } from "./types";

export class Tone implements Sound {
    private sound: Soundfont.Player | null = null;

    constructor(private instrument: Instrument, private note: MidiNumber) {}

    async start(): Promise<void> {
        if (this.sound == null) {
            this.sound = await this.instrument.play(this.note);
        }
    }

    stop(): void {
        if (this.sound != null) {
            this.sound.stop();
            this.sound = null;
        }
    }
}
