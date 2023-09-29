import * as Soundfont from "soundfont-player";
import type { MidiNumber } from "./types";
import * as s from "../../settings/button";

export class Instrument {
    private instrument: Soundfont.Player | null = null;

    constructor(private initalizeCallback = () => {}) {}

    async play(note: MidiNumber): Promise<Soundfont.Player | null> {
        if (this.instrument == null) {
            this.initalizeCallback();
            let AudioContext = new (window.AudioContext ||
                (window as any).webkitAudioContext)();
            this.instrument = await Soundfont.instrument(
                AudioContext,
                // "acoustic_grand_piano"
                "src/buttons/music/acoustic_grand_piano-mp3.js" as any
            );
            let volume = AudioContext.createGain();
            volume.connect(AudioContext.destination);
            this.instrument.connect(volume);
            volume.gain.value = s.volume;
            return null;
        } else {
            return this.instrument.play(note.toString());
        }
    }
}
