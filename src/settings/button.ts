//music
import { type MidiNumber } from "../buttons/music/types";

/** Lower note for the range (must be multiple of 12) */
export const noteRange = 12 * 4;
export const toneType: OscillatorType = "triangle";
export const startTone: MidiNumber = 58;
export const volume = 1.5;

//appearance

export const buttonSize = "80px";
export const buttonMargin = "4px";
