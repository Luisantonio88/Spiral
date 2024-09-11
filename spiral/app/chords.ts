export type ChordType =
  | "major"
  | "minor"
  | "dim"
  | "maj7"
  | "min7"
  | "7"
  | "min7b5";
export type Chords = { [key: string]: { [key in ChordType]: string[] } };

export const chords: Chords = {
  C: {
    major: ["C3", "E4", "G4", "C5"],
    minor: ["C3", "Eb4", "G4", "C5"],
    dim: ["C3", "Eb4", "Gb4", "C5"],
    maj7: ["C3", "E4", "G4", "B4"],
    min7: ["C3", "Eb4", "G4", "Bb4"],
    7: ["C3", "E4", "G4", "Bb4"],
    min7b5: ["C3", "Eb4", "Gb4", "Bb4"],
  },
  Db: {
    major: ["Db3", "Db4", "F4", "Ab4"],
    minor: ["Db3", "Db4", "F4", "Ab4"],
    dim: ["Db3", "Db4", "E4", "G4"],
    maj7: ["Db3", "F4", "Ab4", "C5"],
    min7: ["Db3", "E4", "Ab4", "B4"],
    7: ["Db3", "F4", "Ab4", "B4"],
    min7b5: ["Db3", "E4", "G4", "B4"],
  },
  D: {
    major: ["D3", "D4", "Gb4", "A4"],
    minor: ["D3", "D4", "F4", "A4"],
    dim: ["D3", "D4", "F4", "Ab4"],
    maj7: ["D3", "Gb4", "A4", "Db5"],
    min7: ["D3", "F4", "A4", "C5"],
    7: ["D3", "Gb4", "A4", "C5"],
    min7b5: ["D3", "F4", "Ab4", "C5"],
  },
  Eb: {
    major: ["Eb3", "Eb4", "G4", "Bb4"],
    minor: ["Eb3", "Eb4", "Gb4", "Bb4"],
    dim: ["Eb3", "Eb4", "Gb4", "A4"],
    maj7: ["Eb3", "D4", "G4", "Bb4"],
    min7: ["Eb3", "Db4", "Gb4", "Bb4"],
    7: ["Eb3", "Db4", "G4", "Bb4"],
    min7b5: ["Eb3", "Db4", "Gb4", "A4"],
  },
  E: {
    major: ["E3", "E4", "Ab4", "B4"],
    minor: ["E3", "E4", "G4", "B4"],
    dim: ["E3", "E4", "G4", "Bb4"],
    maj7: ["E3", "D4", "Ab4", "B4"],
    min7: ["E3", "D4", "G4", "B4"],
    7: ["E3", "D4", "Ab4", "B4"],
    min7b5: ["E3", "D4", "G4", "Bb4"],
  },
  F: {
    major: ["F3", "F4", "A4", "C5"],
    minor: ["F3", "F4", "Ab4", "C5"],
    dim: ["F3", "F4", "Ab4", "B4"],
    maj7: ["F3", "E4", "A4", "C5"],
    min7: ["F3", "Eb4", "Ab4", "C5"],
    7: ["F3", "Eb4", "A4", "C5"],
    min7b5: ["F3", "Eb4", "Ab4", "B4"],
  },
  Gb: {
    major: ["Gb3", "Db4", "Gb4", "Bb4"],
    minor: ["Gb3", "Db4", "Gb4", "A4"],
    dim: ["C3", "C4", "Gb4", "A4"],
    maj7: ["Gb3", "Db4", "F4", "Bb4"],
    min7: ["Gb3", "Db4", "E4", "A4"],
    7: ["Gb3", "Db4", "E4", "Bb4"],
    min7b5: ["Gb3", "C4", "E4", "A4"],
  },
  G: {
    major: ["G3", "D4", "G4", "B4"],
    minor: ["G3", "D4", "G4", "Bb4"],
    dim: ["G3", "Db4", "G4", "Bb4"],
    maj7: ["G3", "D4", "Gb4", "B4"],
    min7: ["G3", "D4", "F4", "Bb4"],
    7: ["G3", "D4", "F4", "B4"],
    min7b5: ["G3", "Db4", "F4", "Bb4"],
  },
  Ab: {
    major: ["Ab3", "Eb4", "Ab4", "C5"],
    minor: ["Ab3", "Eb4", "Ab4", "B4"],
    dim: ["Ab3", "D4", "Ab4", "B4"],
    maj7: ["Ab3", "Eb4", "G4", "C5"],
    min7: ["Ab3", "Eb4", "Gb4", "B4"],
    7: ["Ab3", "Eb4", "Gb4", "C5"],
    min7b5: ["Ab3", "D4", "Gb4", "B4"],
  },
  A: {
    major: ["A3", "E4", "A4", "Db5"],
    minor: ["A3", "E4", "A4", "C5"],
    dim: ["A3", "Eb4", "A4", "C5"],
    maj7: ["A3", "E4", "Ab4", "Db5"],
    min7: ["A3", "E4", "G4", "C5"],
    7: ["A3", "E4", "G4", "Db5"],
    min7b5: ["A3", "Eb4", "G4", "C5"],
  },
  Bb: {
    major: ["Bb3", "D4", "F4", "Bb4"],
    minor: ["Bb3", "Db4", "F4", "Bb4"],
    dim: ["Bb3", "Db4", "E4", "Bb4"],
    maj7: ["Bb3", "F4", "A4", "D5"],
    min7: ["Bb3", "F4", "Ab4", "Db5"],
    7: ["Bb3", "F4", "Ab4", "D5"],
    min7b5: ["Bb3", "E4", "Ab4", "Db5"],
  },
  B: {
    major: ["B3", "Eb4", "Gb4", "B4"],
    minor: ["B3", "D4", "Gb4", "B4"],
    dim: ["B3", "D4", "F4", "B4"],
    maj7: ["B3", "Eb4", "Gb4", "Bb4"],
    min7: ["B3", "D4", "Gb4", "A4"],
    7: ["B3", "Eb4", "Gb4", "A4"],
    min7b5: ["B3", "D4", "F4", "A4"],
  },
};
