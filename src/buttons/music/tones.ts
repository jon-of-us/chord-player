import * as ms from "../../settings/music_settings";

export type midiNumber = number;

function getFrequency(midiNumber: number) {
    return Math.pow(2, (midiNumber - 69) / 12) * 440;
}

export interface Sound {
    start(): void;
    stop(): void;
}

export class Tone implements Sound {
    private audioContext: AudioContext;
    private oscillator: OscillatorNode | undefined;
    private isPlaying: boolean = false;
    private frequency: number;

    constructor(
        note: midiNumber = 69,
        private type: OscillatorType = ms.toneType
    ) {
        this.frequency = getFrequency(note);
        this.audioContext = new window.AudioContext();
    }

    start(): void {
        if (!this.isPlaying) {
            this.initializeOszillator();
            this.oscillator!.start();
            this.isPlaying = true;
        }
    }

    initializeOszillator() {
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = this.type;
        this.oscillator.frequency.setValueAtTime(
            this.frequency,
            this.audioContext.currentTime
        );
        this.oscillator.connect(this.audioContext.destination);
    }

    stop(): void {
        if (this.isPlaying) {
            this.oscillator!.stop();
            this.oscillator!.disconnect();
            this.isPlaying = false;
        }
    }
}
