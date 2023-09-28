//music
import { type MidiNumber } from "../buttons/music/types";

/** Lower note for the range (must be multiple of 12) */
export const noteRange = 12 * 4;
export const toneType: OscillatorType = "triangle";
export const startTone: MidiNumber = 49;
export const volume = 1.7;

//appearance

export const buttonSize = "80px";
export const buttonFontSize = "20px";
export const buttonMargin = "4px";
