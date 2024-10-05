export type ChordType =
  | "major"
  | "minor"
  | "dim"
  | "maj7"
  | "min7"
  | "7"
  | "min7b5"
  | "maj9"
  | "min9"
  | "9";

export type Voicing = string[]; // Each voicing will be an array of notes

// The VoicingGroup will store multiple voicings per chord and string set
export type VoicingGroup = {
  [stringSet: string]: Voicing[]; // String set as a key, multiple voicings as an array
};

// Chords will now store voicing groups for each chord type
export type Chords = {
  [chordName: string]: {
    [chordType in ChordType]: VoicingGroup;
  };
};

// Example for the C chord:
export const chords: Chords = {
  C: {
    major: {
      "1-3": [
        ["C4", "E4", "G4"],
        ["E4", "G4", "C5"],
        ["G4", "C5", "E5"],
      ],
      "2-4": [
        ["G3", "C4", "E4"],
        ["C4", "E4", "G4"],
        ["E4", "G4", "C5"],
      ],
      "3-5": [
        ["E3", "G3", "C4"],
        ["G3", "C4", "E4"],
        ["C3", "E3", "G3"],
      ],
      "4-6": [
        ["G2", "C3", "E3"],
        ["C3", "E3", "G3"],
        ["E3", "G3", "C4"],
      ],
    },
    minor: {
      "1-3": [
        ["C4", "Eb4", "G4"],
        ["Eb4", "G4", "C5"],
        ["G4", "C5", "Eb5"],
      ],
      "2-4": [
        ["G3", "C4", "Eb4"],
        ["C4", "Eb4", "G4"],
        ["Eb4", "G4", "C5"],
      ],
      "3-5": [
        ["Eb3", "G3", "C4"],
        ["G3", "C4", "Eb4"],
        ["C3", "Eb3", "G3"],
      ],
      "4-6": [
        ["G2", "C3", "Eb3"],
        ["C3", "Eb3", "G3"],
        ["Eb3", "G3", "C4"],
      ],
    },
    dim: {
      "1-3": [
        ["C4", "Eb4", "Gb4"],
        ["Eb4", "Gb4", "C5"],
        ["Gb4", "C5", "Eb5"],
      ],
      "2-4": [
        ["Gb3", "C4", "Eb4"],
        ["C4", "Eb4", "Gb4"],
        ["Eb4", "Gb4", "C5"],
      ],
      "3-5": [
        ["Eb3", "Gb3", "C4"],
        ["Gb3", "C4", "Eb4"],
        ["C3", "Eb3", "Gb3"],
      ],
      "4-6": [
        ["Gb2", "C3", "Eb3"],
        ["C3", "Eb3", "Gb3"],
        ["Eb3", "Gb3", "C4"],
      ],
    },
    maj7: {
      "1-4": [
        ["E3", "B3", "C4", "G4"],
        ["G3", "C4", "E4", "B4"],
        ["B3", "E4", "G4", "C5"],
        ["C4", "G4", "B4", "E5"],
      ],
      "2-5": [
        ["C3", "G3", "B3", "E4"],
        ["E3", "B3", "C4", "G4"],
        ["G3", "C4", "E4", "B4"],
        ["B3", "E4", "G4", "C5"],
      ],
      "3-6": [
        ["G2", "C3", "E3", "B3"],
        ["B2", "E3", "G3", "C4"],
        ["C3", "G3", "B3", "E4"],
        ["E3", "B3", "C4", "G5"],
      ],
    },
    min7: {
      "1-4": [
        ["Eb3", "Bb3", "C4", "G4"],
        ["G3", "C4", "Eb4", "Bb4"],
        ["Bb3", "Eb4", "G4", "C5"],
        ["C4", "G4", "Bb4", "Eb5"],
      ],
      "2-5": [
        ["C3", "G3", "Bb3", "Eb4"],
        ["Eb3", "Bb3", "C4", "G4"],
        ["G3", "C4", "Eb4", "Bb4"],
        ["Bb3", "Eb4", "G4", "C5"],
      ],
      "3-6": [
        ["G2", "C3", "Eb3", "Bb3"],
        ["Bb2", "Eb3", "G3", "C4"],
        ["C3", "G3", "Bb3", "Eb4"],
        ["Eb3", "Bb3", "C4", "G5"],
      ],
    },
    7: {
      "1-4": [
        ["E3", "Bb3", "C4", "G4"],
        ["G3", "C4", "E4", "Bb4"],
        ["Bb3", "E4", "G4", "C5"],
        ["C4", "G4", "Bb4", "E5"],
      ],
      "2-5": [
        ["C3", "G3", "Bb3", "E4"],
        ["E3", "Bb3", "C4", "G4"],
        ["G3", "C4", "E4", "Bb4"],
        ["Bb3", "E4", "G4", "C5"],
      ],
      "3-6": [
        ["G2", "C3", "E3", "Bb3"],
        ["Bb2", "E3", "G3", "C4"],
        ["C3", "G3", "Bb3", "E4"],
        ["E3", "Bb3", "C4", "G5"],
      ],
    },
  },
  // Add other chords (D, E, etc.)
};
