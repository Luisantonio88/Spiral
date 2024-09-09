"use client";

import React, { useRef } from "react";
import AudioPlayer from "./AudioPlayer";

interface ChordPlayerProps {
  instrument: string;
  sprites: { [key: string]: any };
  setActiveKeys: (keys: string[]) => void;
  chordType: string;
}

export default function ChordPlayer({
  instrument,
  sprites,
  setActiveKeys,
  chordType,
}: ChordPlayerProps) {
  type ChordType = "major" | "minor" | "dim" | "maj7" | "min7" | "7" | "min7b5";
  type Chords = { [key: string]: { [key in ChordType]: string[] } };

  const chords: Chords = {
    C: {
      major: ["C3", "E4", "G4", "C5"],
      minor: ["C3", "Eb4", "G4", "C5"],
      dim: ["C3", "Eb4", "Gb4", "C5"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    Db: {
      major: ["Db3", "Db4", "F4", "Ab4"],
      minor: ["Db3", "Db4", "F4", "Ab4"],
      dim: ["Db3", "Db4", "E4", "G4"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["Db3", "F4", "Ab4", "B4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    D: {
      major: ["D3", "D4", "Gb4", "A4"],
      minor: ["D3", "D4", "F4", "A4"],
      dim: ["D3", "D4", "F4", "Ab4"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    Eb: {
      major: ["Eb3", "Eb4", "G4", "Bb4"],
      minor: ["Eb3", "Eb4", "Gb4", "Bb4"],
      dim: ["Eb3", "Eb4", "Gb4", "A4"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["Eb3", "Db4", "Gb4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    E: {
      major: ["E3", "E4", "Ab4", "B4"],
      minor: ["E3", "E4", "G4", "B4"],
      dim: ["E3", "E4", "G4", "Bb4"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    F: {
      major: ["F3", "F4", "A4", "C5"],
      minor: ["F3", "F4", "Ab4", "C5"],
      dim: ["F3", "F4", "Ab4", "B4"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["F3", "Eb4", "Ab4", "C5"],
    },
    Gb: {
      major: ["Gb3", "Db4", "Gb4", "Bb4"],
      minor: ["Gb3", "Db4", "Gb4", "A4"],
      dim: ["C3", "C4", "Gb4", "A4"],
      maj7: ["Gb3", "Db4", "F4", "Bb4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    G: {
      major: ["G3", "D4", "G4", "B4"],
      minor: ["G3", "D4", "G4", "Bb4"],
      dim: ["G3", "Db4", "G4", "Bb4"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    Ab: {
      major: ["Ab3", "Eb4", "Ab4", "C5"],
      minor: ["Ab3", "Eb4", "Ab4", "B4"],
      dim: ["Ab3", "D4", "Ab4", "B4"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["Ab3", "Eb4", "Gb4", "B4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    A: {
      major: ["A3", "E4", "A4", "Db5"],
      minor: ["A3", "E4", "A4", "C5"],
      dim: ["A3", "Eb4", "A4", "C5"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    Bb: {
      major: ["Bb3", "D4", "F4", "Bb4"],
      minor: ["Bb3", "Db4", "F4", "Bb4"],
      dim: ["Bb3", "Db4", "E4", "Bb4"],
      maj7: ["C3", "E4", "G4", "B4"],
      min7: ["Bb3", "F4", "Ab4", "Db5"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
    B: {
      major: ["B3", "Eb4", "Gb4", "B4"],
      minor: ["B3", "D4", "Gb4", "B4"],
      dim: ["B3", "D4", "F4", "B4"],
      maj7: ["B3", "Eb4", "Gb4", "Bb4"],
      min7: ["C3", "Eb4", "G4", "Bb4"],
      7: ["C3", "E4", "G4", "Bb4"],
      min7b5: ["C3", "Eb4", "Gb4", "Bb7"],
    },
  };

  const audioPlayerRef = useRef<{
    playSound: (notes: string | string[]) => void;
  } | null>(null);

  const playChord = (chordKey: string, chordType: ChordType) => {
    if (audioPlayerRef.current) {
      const notes = chords[chordKey][chordType];
      audioPlayerRef.current.playSound(notes);
      setActiveKeys(notes);
      setTimeout(() => setActiveKeys([]), 500); // Reset active keys after some time
    }
  };

  return (
    <>
      <AudioPlayer
        ref={audioPlayerRef}
        instrument={instrument}
        sprites={sprites}
      />{" "}
      {chordType === "triads" && (
        <div className="flex flex-row items-center justify-center mt-12 gap-1">
          <div className="chord-key Gb">
            <button
              className="chord-button III"
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Ab", "minor")}
            >
              Ab-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Gb", "major")}
            >
              Gb
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("F", "dim")}
            >
              F&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Eb", "minor")}
            >
              Eb-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Db", "major")}
            >
              Db
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("B", "major")}
            >
              Cb
            </button>
          </div>
          <div className="chord-key Db">
            <button
              className="chord-button VI"
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Gb", "major")}
            >
              Gb
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Eb", "minor")}
            >
              Eb-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Db", "major")}
            >
              Db
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("C", "dim")}
            >
              C&deg;
            </button>
          </div>
          <div className="chord-key Ab">
            <button
              className="chord-button II"
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("G", "dim")}
            >
              G&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Db", "major")}
            >
              Db
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key Eb">
            <button
              className="chord-button V"
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("D", "dim")}
            >
              D&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key Bb">
            <button
              className="chord-button I"
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("A", "dim")}
            >
              A&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key F">
            <button
              className="chord-button IV"
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("E", "dim")}
            >
              E&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key C main-key">
            <button
              className="chord-button VII"
              onClick={() => playChord("B", "dim")}
            >
              B&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key G">
            <button
              className="chord-button III"
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Gb", "dim")}
            >
              F#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key D">
            <button
              className="chord-button VI"
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Db", "dim")}
            >
              C#&deg;
            </button>
          </div>
          <div className="chord-key A">
            <button
              className="chord-button II"
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Ab", "dim")}
            >
              G#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key E">
            <button
              className="chord-button V"
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Eb", "dim")}
            >
              D#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key B">
            <button
              className="chord-button I"
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Bb", "dim")}
            >
              A#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Gb", "major")}
            >
              F#
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Eb", "minor")}
            >
              D#-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key F#">
            <button
              className="chord-button IV"
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Bb", "minor")}
            >
              A#-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Gb", "major")}
            >
              F#
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("F", "dim")}
            >
              E#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Eb", "minor")}
            >
              D#-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Db", "major")}
            >
              C#
            </button>
          </div>
        </div>
      )}
      {chordType === "7th" && (
        <div className="flex flex-row items-center justify-center mt-12 gap-1">
          <div className="chord-key Gb">
            <button
              className="chord-button III"
              onClick={() => playChord("Bb", "min7")}
            >
              Bb-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Ab", "min7")}
            >
              Ab-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Gb", "maj7")}
            >
              Gb&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("F", "min7b5")}
            >
              F-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Eb", "min7")}
            >
              Eb-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Db", "7")}
            >
              Db7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("B", "maj7")}
            >
              Cb&#9653;7
            </button>
          </div>
          <div className="chord-key Db">
            <button
              className="chord-button VI"
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Gb", "major")}
            >
              Gb
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Eb", "minor")}
            >
              Eb-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Db", "major")}
            >
              Db
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("C", "dim")}
            >
              C&deg;
            </button>
          </div>
          <div className="chord-key Ab">
            <button
              className="chord-button II"
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("G", "dim")}
            >
              G&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Db", "major")}
            >
              Db
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key Eb">
            <button
              className="chord-button V"
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("D", "dim")}
            >
              D&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key Bb">
            <button
              className="chord-button I"
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("A", "dim")}
            >
              A&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key F">
            <button
              className="chord-button IV"
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("E", "dim")}
            >
              E&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key C main-key">
            <button
              className="chord-button VII"
              onClick={() => playChord("B", "dim")}
            >
              B&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key G">
            <button
              className="chord-button III"
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Gb", "dim")}
            >
              F#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key D">
            <button
              className="chord-button VI"
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Db", "dim")}
            >
              C#&deg;
            </button>
          </div>
          <div className="chord-key A">
            <button
              className="chord-button II"
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Ab", "dim")}
            >
              G#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key E">
            <button
              className="chord-button V"
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Eb", "dim")}
            >
              D#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key B">
            <button
              className="chord-button I"
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Bb", "dim")}
            >
              A#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Gb", "major")}
            >
              F#
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Eb", "minor")}
            >
              D#-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key F#">
            <button
              className="chord-button IV"
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Bb", "minor")}
            >
              A#-
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Gb", "major")}
            >
              F#
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("F", "dim")}
            >
              E#&deg;
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Eb", "minor")}
            >
              D#-
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Db", "major")}
            >
              C#
            </button>
          </div>
        </div>
      )}
    </>
  );
}
