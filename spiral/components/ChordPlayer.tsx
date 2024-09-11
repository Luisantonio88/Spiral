"use client";

import React, { useRef } from "react";
import ChordManager from "./ChordManager"; // Import ChordManager
import { ChordType, chords } from "@/app/chords";

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
  const chordManagerRef = useRef<{
    playChord: (chordName: string, chordType: ChordType) => void;
  } | null>(null);

  const playChord = (chordKey: string, chordType: ChordType) => {
    if (chordManagerRef.current) {
      chordManagerRef.current.playChord(chordKey, chordType);
    }
  };

  const onDragStart = (
    e: React.DragEvent<HTMLButtonElement>,
    chordDisplay: string,
    chordKey: string,
    chordType: ChordType
  ) => {
    e.dataTransfer.setData("chord", `${chordDisplay},${chordKey},${chordType}`);
  };

  return (
    <>
      <ChordManager
        ref={chordManagerRef}
        instrument={instrument}
        sprites={sprites}
        setActiveKeys={setActiveKeys} // Pass setActiveKeys to ChordManager
      />
      {chordType === "triads" && (
        <div className="flex flex-row items-center justify-center mt-8">
          <div className="chord-key Gb">
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Bb-", "Bb", "minor")}
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Ab-", "Ab", "minor")}
              onClick={() => playChord("Ab", "minor")}
            >
              Ab-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Gb", "Gb", "major")}
              onClick={() => playChord("Gb", "major")}
            >
              Gb
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Fdim", "F", "dim")}
              onClick={() => playChord("F", "dim")}
            >
              F&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Eb-", "Eb", "minor")}
              onClick={() => playChord("Eb", "minor")}
            >
              Eb-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "Db", "Db", "major")}
              onClick={() => playChord("Db", "major")}
            >
              Db
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Cb", "B", "major")}
              onClick={() => playChord("B", "major")}
            >
              Cb
            </button>
          </div>
          <div className="chord-key Db">
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Bb-", "Bb", "minor")}
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "Ab", "Ab", "major")}
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Gb", "Gb", "major")}
              onClick={() => playChord("Gb", "major")}
            >
              Gb
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "F-", "F", "minor")}
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Eb-", "Eb", "minor")}
              onClick={() => playChord("Eb", "minor")}
            >
              Eb-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Db", "Db", "major")}
              onClick={() => playChord("Db", "major")}
            >
              Db
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Cdim", "C", "dim")}
              onClick={() => playChord("C", "dim")}
            >
              C&deg;
            </button>
          </div>
          <div className="chord-key Ab">
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Bb-", "Bb", "minor")}
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Ab", "Ab", "major")}
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Gdim", "G", "dim")}
              onClick={() => playChord("G", "dim")}
            >
              G&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "F-", "F", "minor")}
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "Eb", "Eb", "major")}
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Db", "Db", "major")}
              onClick={() => playChord("Db", "major")}
            >
              Db
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "C-", "C", "minor")}
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key Eb">
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "Bb", "Bb", "major")}
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Ab", "Ab", "major")}
              onClick={() => playChord("Ab", "major")}
            >
              Ab
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "G-", "G", "minor")}
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "F-", "F", "minor")}
              onClick={() => playChord("F", "minor")}
            >
              F-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Eb", "Eb", "major")}
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Ddim", "D", "dim")}
              onClick={() => playChord("D", "dim")}
            >
              D&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "C-", "C", "minor")}
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key Bb">
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Bb", "Bb", "major")}
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Adim", "A", "dim")}
              onClick={() => playChord("A", "dim")}
            >
              A&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "G-", "G", "minor")}
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "F", "F", "major")}
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Eb", "Eb", "major")}
              onClick={() => playChord("Eb", "major")}
            >
              Eb
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "D-", "D", "minor")}
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "C-", "C", "minor")}
              onClick={() => playChord("C", "minor")}
            >
              C-
            </button>
          </div>
          <div className="chord-key F">
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Bb", "Bb", "major")}
              onClick={() => playChord("Bb", "major")}
            >
              Bb
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "A-", "A", "minor")}
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "G-", "G", "minor")}
              onClick={() => playChord("G", "minor")}
            >
              G-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "F", "F", "major")}
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Edim", "E", "dim")}
              onClick={() => playChord("E", "dim")}
            >
              E&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "D-", "D", "minor")}
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "C", "C", "major")}
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key C main-key">
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "B", "B", "dim")}
              onClick={() => playChord("B", "dim")}
            >
              B&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "A-", "A", "minor")}
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "G", "G", "major")}
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "F", "F", "major")}
              onClick={() => playChord("F", "major")}
            >
              F
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "E-", "E", "minor")}
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "D-", "D", "minor")}
              onClick={() => playChord("D", "minor")}
            >
              D-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "C", "C", "major")}
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key G">
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "B-", "B", "minor")}
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "A-", "A", "minor")}
              onClick={() => playChord("A", "minor")}
            >
              A-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "G", "G", "major")}
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "F#dim", "Gb", "dim")}
              onClick={() => playChord("Gb", "dim")}
            >
              F#&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "E-", "E", "minor")}
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "D", "D", "major")}
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "C", "C", "major")}
              onClick={() => playChord("C", "major")}
            >
              C
            </button>
          </div>
          <div className="chord-key D">
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "B-", "B", "minor")}
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "A", "A", "major")}
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "G", "G", "major")}
              onClick={() => playChord("G", "major")}
            >
              G
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "F#-", "Gb", "minor")}
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "E-", "E", "minor")}
              onClick={() => playChord("E", "minor")}
            >
              E-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "D", "D", "major")}
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "C#dim", "Db", "dim")}
              onClick={() => playChord("Db", "dim")}
            >
              C#&deg;
            </button>
          </div>
          <div className="chord-key A">
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "B-", "B", "minor")}
              onClick={() => playChord("B", "minor")}
            >
              B-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "A", "A", "major")}
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "G#dim", "Ab", "dim")}
              onClick={() => playChord("Ab", "dim")}
            >
              G#&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "F#-", "Gb", "minor")}
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "E", "E", "major")}
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "D", "D", "major")}
              onClick={() => playChord("D", "major")}
            >
              D
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "C#-", "Db", "minor")}
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key E">
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "B-", "B", "minor")}
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "A", "A", "major")}
              onClick={() => playChord("A", "major")}
            >
              A
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "G#-", "Ab", "minor")}
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "F#-", "Gb", "minor")}
              onClick={() => playChord("Gb", "minor")}
            >
              F#-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "E", "E", "major")}
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "D#dim", "Eb", "dim")}
              onClick={() => playChord("Eb", "dim")}
            >
              D#&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "C#-", "Db", "minor")}
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key B">
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "B", "B", "major")}
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "A#dim", "Bb", "dim")}
              onClick={() => playChord("Bb", "dim")}
            >
              A#&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "G#-", "Ab", "minor")}
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "F#", "Gb", "major")}
              onClick={() => playChord("Gb", "major")}
            >
              F#
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "E", "E", "major")}
              onClick={() => playChord("E", "major")}
            >
              E
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "D#-", "Eb", "minor")}
              onClick={() => playChord("Eb", "minor")}
            >
              D#-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "C#-", "Db", "minor")}
              onClick={() => playChord("Db", "minor")}
            >
              C#-
            </button>
          </div>
          <div className="chord-key F#">
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "B", "B", "major")}
              onClick={() => playChord("B", "major")}
            >
              B
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "A#-", "Bb", "minor")}
              onClick={() => playChord("Bb", "minor")}
            >
              A#-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "G#-", "Ab", "minor")}
              onClick={() => playChord("Ab", "minor")}
            >
              G#-
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "F#", "Gb", "major")}
              onClick={() => playChord("Gb", "major")}
            >
              F#
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "E#dim", "F", "dim")}
              onClick={() => playChord("F", "dim")}
            >
              E#&deg;
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "D#-", "Eb", "minor")}
              onClick={() => playChord("Eb", "minor")}
            >
              D#-
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "C#", "Db", "major")}
              onClick={() => playChord("Db", "major")}
            >
              C#
            </button>
          </div>
        </div>
      )}
      {chordType === "7th" && (
        <div className="flex flex-row items-center justify-center mt-8">
          <div className="chord-key Gb">
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Bbmin7", "Bb", "min7")}
              onClick={() => playChord("Bb", "min7")}
            >
              Bb-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Abmin7", "Ab", "min7")}
              onClick={() => playChord("Ab", "min7")}
            >
              Ab-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Gbmaj7", "Gb", "maj7")}
              onClick={() => playChord("Gb", "maj7")}
            >
              Gb&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Fmin7b5", "F", "min7b5")}
              onClick={() => playChord("F", "min7b5")}
            >
              F-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Ebmin7", "Eb", "min7")}
              onClick={() => playChord("Eb", "min7")}
            >
              Eb-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "Db7", "Db", "7")}
              onClick={() => playChord("Db", "7")}
            >
              Db7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Cbmaj7", "B", "maj7")}
              onClick={() => playChord("B", "maj7")}
            >
              Cb&#9653;7
            </button>
          </div>
          <div className="chord-key Db">
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Bbmin7", "Bb", "min7")}
              onClick={() => playChord("Bb", "min7")}
            >
              Bb-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "Ab7", "Ab", "7")}
              onClick={() => playChord("Ab", "7")}
            >
              Ab7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Gbmaj7", "Gb", "maj7")}
              onClick={() => playChord("Gb", "maj7")}
            >
              Gb&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Fmin7", "F", "min7")}
              onClick={() => playChord("F", "min7")}
            >
              F-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Ebmin7", "Eb", "min7")}
              onClick={() => playChord("Eb", "min7")}
            >
              Eb-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Dbmaj7", "Db", "maj7")}
              onClick={() => playChord("Db", "maj7")}
            >
              Db&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Cmin7b5", "C", "min7b5")}
              onClick={() => playChord("C", "min7b5")}
            >
              C-7b5
            </button>
          </div>
          <div className="chord-key Ab">
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Bbmin7", "Bb", "min7")}
              onClick={() => playChord("Bb", "min7")}
            >
              Bb-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Abmaj7", "Ab", "maj7")}
              onClick={() => playChord("Ab", "maj7")}
            >
              Ab&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Gmin7b5", "G", "min7b5")}
              onClick={() => playChord("G", "min7b5")}
            >
              G-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Fmin7", "F", "min7")}
              onClick={() => playChord("F", "min7")}
            >
              F-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "Eb7", "Eb", "7")}
              onClick={() => playChord("Eb", "7")}
            >
              Eb7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Dbmaj7", "Db", "maj7")}
              onClick={() => playChord("Db", "maj7")}
            >
              Db&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Cmin7", "C", "min7")}
              onClick={() => playChord("C", "min7")}
            >
              C-7
            </button>
          </div>
          <div className="chord-key Eb">
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "Bb7", "Bb", "7")}
              onClick={() => playChord("Bb", "7")}
            >
              Bb7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Abmaj7", "Ab", "maj7")}
              onClick={() => playChord("Ab", "maj7")}
            >
              Ab&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Gmin7", "G", "min7")}
              onClick={() => playChord("G", "min7")}
            >
              G-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Fmin7", "F", "min7")}
              onClick={() => playChord("F", "min7")}
            >
              F-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Ebmaj7", "Eb", "maj7")}
              onClick={() => playChord("Eb", "maj7")}
            >
              Eb&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Dmin7b5", "D", "min7b5")}
              onClick={() => playChord("D", "min7b5")}
            >
              D-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Cmin7", "C", "min7")}
              onClick={() => playChord("C", "min7")}
            >
              C-7
            </button>
          </div>
          <div className="chord-key Bb">
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Bbmaj7", "Bb", "maj7")}
              onClick={() => playChord("Bb", "maj7")}
            >
              Bb&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Amin7b5", "A", "min7b5")}
              onClick={() => playChord("A", "min7b5")}
            >
              A-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Gmin7", "G", "min7")}
              onClick={() => playChord("G", "min7")}
            >
              G-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "F7", "F", "7")}
              onClick={() => playChord("F", "7")}
            >
              F7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Ebmaj7", "Eb", "maj7")}
              onClick={() => playChord("Eb", "maj7")}
            >
              Eb&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Dmin7", "D", "min7")}
              onClick={() => playChord("D", "min7")}
            >
              D-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Cmin7", "C", "min7")}
              onClick={() => playChord("C", "min7")}
            >
              C-7
            </button>
          </div>
          <div className="chord-key F">
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Bbmaj7", "Bb", "maj7")}
              onClick={() => playChord("Bb", "maj7")}
            >
              Bb&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Amin7", "A", "min7")}
              onClick={() => playChord("A", "min7")}
            >
              A-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Gmin7", "G", "min7")}
              onClick={() => playChord("G", "min7")}
            >
              G-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Fmaj7", "F", "maj7")}
              onClick={() => playChord("F", "maj7")}
            >
              F&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Emin7b5", "E", "min7b5")}
              onClick={() => playChord("E", "min7b5")}
            >
              E-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Dmin7", "D", "min7")}
              onClick={() => playChord("D", "min7")}
            >
              D-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "C7", "C", "7")}
              onClick={() => playChord("C", "7")}
            >
              C7
            </button>
          </div>
          <div className="chord-key C main-key">
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "Bmin7b5", "B", "min7b5")}
              onClick={() => playChord("B", "min7b5")}
            >
              B-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Amin7", "A", "min7")}
              onClick={() => playChord("A", "min7")}
            >
              A-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "G7", "G", "7")}
              onClick={() => playChord("G", "7")}
            >
              G7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Fmaj7", "F", "maj7")}
              onClick={() => playChord("F", "maj7")}
            >
              F&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Emin7", "E", "min7")}
              onClick={() => playChord("E", "min7")}
            >
              E-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Dmin7", "D", "min7")}
              onClick={() => playChord("D", "min7")}
            >
              D-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Cmaj7", "C", "maj7")}
              onClick={() => playChord("C", "maj7")}
            >
              C&#9653;7
            </button>
          </div>
          <div className="chord-key G">
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Bmin7", "B", "min7")}
              onClick={() => playChord("B", "min7")}
            >
              B-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Amin7", "A", "min7")}
              onClick={() => playChord("A", "min7")}
            >
              A-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Gmaj7", "G", "maj7")}
              onClick={() => playChord("G", "maj7")}
            >
              G&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "F#min7b5", "Gb", "min7b5")}
              onClick={() => playChord("Gb", "min7b5")}
            >
              F#-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Emin7", "E", "min7")}
              onClick={() => playChord("E", "min7")}
            >
              E-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "D7", "D", "7")}
              onClick={() => playChord("D", "7")}
            >
              D7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Cmaj7", "C", "maj7")}
              onClick={() => playChord("C", "maj7")}
            >
              C&#9653;7
            </button>
          </div>
          <div className="chord-key D">
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "Bmin7", "B", "min7")}
              onClick={() => playChord("B", "min7")}
            >
              B-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "A7", "A", "7")}
              onClick={() => playChord("A", "7")}
            >
              A7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Gmaj7", "G", "maj7")}
              onClick={() => playChord("G", "maj7")}
            >
              G&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "F#min7", "Gb", "min7")}
              onClick={() => playChord("Gb", "min7")}
            >
              F#-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Emin7", "E", "min7")}
              onClick={() => playChord("E", "min7")}
            >
              E-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Dmaj7", "D", "maj7")}
              onClick={() => playChord("D", "maj7")}
            >
              D&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "C#min7b5", "Db", "min7b5")}
              onClick={() => playChord("Db", "min7b5")}
            >
              C#-7b5
            </button>
          </div>
          <div className="chord-key A">
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Bmin7", "B", "min7")}
              onClick={() => playChord("B", "min7")}
            >
              B-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Amaj7", "A", "maj7")}
              onClick={() => playChord("A", "maj7")}
            >
              A&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "G#min7b5", "Ab", "min7b5")}
              onClick={() => playChord("Ab", "min7b5")}
            >
              G#-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "F#min7", "Gb", "min7")}
              onClick={() => playChord("Gb", "min7")}
            >
              F#-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "E7", "E", "7")}
              onClick={() => playChord("E", "7")}
            >
              E7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Dmaj7", "D", "maj7")}
              onClick={() => playChord("D", "maj7")}
            >
              D&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "C#min7", "Db", "min7")}
              onClick={() => playChord("Db", "min7")}
            >
              C#-7
            </button>
          </div>
          <div className="chord-key E">
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "B7", "B", "7")}
              onClick={() => playChord("B", "7")}
            >
              B7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Amaj7", "A", "maj7")}
              onClick={() => playChord("A", "maj7")}
            >
              A&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "G#min7", "Ab", "min7")}
              onClick={() => playChord("Ab", "min7")}
            >
              G#-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "F#min7", "Gb", "min7")}
              onClick={() => playChord("Gb", "min7")}
            >
              F#-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Emaj7", "E", "maj7")}
              onClick={() => playChord("E", "maj7")}
            >
              E&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "D#min7b5", "Eb", "min7b5")}
              onClick={() => playChord("Eb", "min7b5")}
            >
              D#-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "C#min7", "Db", "min7")}
              onClick={() => playChord("Db", "min7")}
            >
              C#-7
            </button>
          </div>
          <div className="chord-key B">
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "Bmaj7", "B", "maj7")}
              onClick={() => playChord("B", "maj7")}
            >
              B&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "A#min7b5", "Bb", "min7b5")}
              onClick={() => playChord("Bb", "min7b5")}
            >
              A#-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "G#min7", "Ab", "min7")}
              onClick={() => playChord("Ab", "min7")}
            >
              G#-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "F#7", "Gb", "7")}
              onClick={() => playChord("Gb", "7")}
            >
              F#7
            </button>
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Emaj7", "E", "maj7")}
              onClick={() => playChord("E", "maj7")}
            >
              E&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "D#min7", "Eb", "min7")}
              onClick={() => playChord("Eb", "min7")}
            >
              D#-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "C#min7", "Db", "min7")}
              onClick={() => playChord("Db", "min7")}
            >
              C#-7
            </button>
          </div>
          <div className="chord-key F#">
            <button
              className="chord-button IV"
              draggable
              onDragStart={(e) => onDragStart(e, "Bmaj7", "B", "maj7")}
              onClick={() => playChord("B", "maj7")}
            >
              B&#9653;7
            </button>
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "A#min7", "Bb", "min7")}
              onClick={() => playChord("Bb", "min7")}
            >
              A#-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "G#min7", "Ab", "min7")}
              onClick={() => playChord("Ab", "min7")}
            >
              G#-7
            </button>
            <button
              className="chord-button I"
              draggable
              onDragStart={(e) => onDragStart(e, "F#maj7", "Gb", "maj7")}
              onClick={() => playChord("Gb", "maj7")}
            >
              F#&#9653;7
            </button>
            <button
              className="chord-button VII"
              draggable
              onDragStart={(e) => onDragStart(e, "E#min7b5", "F", "min7b5")}
              onClick={() => playChord("F", "min7b5")}
            >
              E#-7b5
            </button>
            <button
              className="chord-button VI"
              draggable
              onDragStart={(e) => onDragStart(e, "D#min7", "Eb", "min7")}
              onClick={() => playChord("Eb", "min7")}
            >
              D#-7
            </button>
            <button
              className="chord-button V"
              draggable
              onDragStart={(e) => onDragStart(e, "C#7", "Db", "7")}
              onClick={() => playChord("Db", "7")}
            >
              C#7
            </button>
          </div>
        </div>
      )}
    </>
  );
}
