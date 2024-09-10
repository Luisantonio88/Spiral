"use client";

import React, { useRef } from "react";
import AudioPlayer from "./AudioPlayer";
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
    chordKey: string,
    chordType: ChordType
  ) => {
    e.dataTransfer.setData("chord", `${chordKey},${chordType}`);
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
              onDragStart={(e) => onDragStart(e, "Bb", "minor")}
              onClick={() => playChord("Bb", "minor")}
            >
              Bb-
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Ab", "minor")}
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
        <div className="flex flex-row items-center justify-center mt-8">
          <div className="chord-key Gb">
            <button
              className="chord-button III"
              draggable
              onDragStart={(e) => onDragStart(e, "Bb", "min7")}
              onClick={() => playChord("Bb", "min7")}
            >
              Bb-7
            </button>
            <button
              className="chord-button II"
              draggable
              onDragStart={(e) => onDragStart(e, "Ab", "min7")}
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
              onClick={() => playChord("Bb", "min7")}
            >
              Bb-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Ab", "7")}
            >
              Ab7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Gb", "maj7")}
            >
              Gb&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("F", "min7")}
            >
              F-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Eb", "min7")}
            >
              Eb-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Db", "maj7")}
            >
              Db&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("C", "min7b5")}
            >
              C-7b5
            </button>
          </div>
          <div className="chord-key Ab">
            <button
              className="chord-button II"
              onClick={() => playChord("Bb", "min7")}
            >
              Bb-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Ab", "maj7")}
            >
              Ab&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("G", "min7b5")}
            >
              G-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("F", "min7")}
            >
              F-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Eb", "7")}
            >
              Eb7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Db", "maj7")}
            >
              Db&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("C", "min7")}
            >
              C-7
            </button>
          </div>
          <div className="chord-key Eb">
            <button
              className="chord-button V"
              onClick={() => playChord("Bb", "7")}
            >
              Bb7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Ab", "maj7")}
            >
              Ab&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("G", "min7")}
            >
              G-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("F", "min7")}
            >
              F-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Eb", "maj7")}
            >
              Eb&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("D", "min7b5")}
            >
              D-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("C", "min7")}
            >
              C-7
            </button>
          </div>
          <div className="chord-key Bb">
            <button
              className="chord-button I"
              onClick={() => playChord("Bb", "maj7")}
            >
              Bb&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("A", "min7b5")}
            >
              A-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("G", "min7")}
            >
              G-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("F", "7")}
            >
              F7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("Eb", "maj7")}
            >
              Eb&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("D", "min7")}
            >
              D-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("C", "min7")}
            >
              C-7
            </button>
          </div>
          <div className="chord-key F">
            <button
              className="chord-button IV"
              onClick={() => playChord("Bb", "maj7")}
            >
              Bb&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("A", "min7")}
            >
              A-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("G", "min7")}
            >
              G-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("F", "maj7")}
            >
              F&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("E", "min7b5")}
            >
              E-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("D", "min7")}
            >
              D-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("C", "7")}
            >
              C7
            </button>
          </div>
          <div className="chord-key C main-key">
            <button
              className="chord-button VII"
              onClick={() => playChord("B", "min7b5")}
            >
              B-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("A", "min7")}
            >
              A-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("G", "7")}
            >
              G7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("F", "maj7")}
            >
              F&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("E", "min7")}
            >
              E-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("D", "min7")}
            >
              D-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("C", "maj7")}
            >
              C&#9653;7
            </button>
          </div>
          <div className="chord-key G">
            <button
              className="chord-button III"
              onClick={() => playChord("B", "min7")}
            >
              B-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("A", "min7")}
            >
              A-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("G", "maj7")}
            >
              G&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Gb", "min7b5")}
            >
              F#-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("E", "min7")}
            >
              E-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("D", "7")}
            >
              D7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("C", "maj7")}
            >
              C&#9653;7
            </button>
          </div>
          <div className="chord-key D">
            <button
              className="chord-button VI"
              onClick={() => playChord("B", "min7")}
            >
              B-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("A", "7")}
            >
              A7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("G", "maj7")}
            >
              G&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Gb", "min7")}
            >
              F#-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("E", "min7")}
            >
              E-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("D", "maj7")}
            >
              D&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Db", "min7b5")}
            >
              C#-7b5
            </button>
          </div>
          <div className="chord-key A">
            <button
              className="chord-button II"
              onClick={() => playChord("B", "min7")}
            >
              B-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("A", "maj7")}
            >
              A&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Ab", "min7b5")}
            >
              G#-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Gb", "min7")}
            >
              F#-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("E", "7")}
            >
              E7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("D", "maj7")}
            >
              D&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Db", "min7")}
            >
              C#-7
            </button>
          </div>
          <div className="chord-key E">
            <button
              className="chord-button V"
              onClick={() => playChord("B", "7")}
            >
              B7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("A", "maj7")}
            >
              A&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Ab", "min7")}
            >
              G#-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Gb", "min7")}
            >
              F#-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("E", "maj7")}
            >
              E&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Eb", "min7b5")}
            >
              D#-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Db", "min7")}
            >
              C#-7
            </button>
          </div>
          <div className="chord-key B">
            <button
              className="chord-button I"
              onClick={() => playChord("B", "maj7")}
            >
              B&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("Bb", "min7b5")}
            >
              A#-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Ab", "min7")}
            >
              G#-7
            </button>
            <button
              className="chord-button V"
              onClick={() => playChord("Gb", "7")}
            >
              F#7
            </button>
            <button
              className="chord-button IV"
              onClick={() => playChord("E", "maj7")}
            >
              E&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Eb", "min7")}
            >
              D#-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Db", "min7")}
            >
              C#-7
            </button>
          </div>
          <div className="chord-key F#">
            <button
              className="chord-button IV"
              onClick={() => playChord("B", "maj7")}
            >
              B&#9653;7
            </button>
            <button
              className="chord-button III"
              onClick={() => playChord("Bb", "min7")}
            >
              A#-7
            </button>
            <button
              className="chord-button II"
              onClick={() => playChord("Ab", "min7")}
            >
              G#-7
            </button>
            <button
              className="chord-button I"
              onClick={() => playChord("Gb", "maj7")}
            >
              F#&#9653;7
            </button>
            <button
              className="chord-button VII"
              onClick={() => playChord("F", "min7b5")}
            >
              E#-7b5
            </button>
            <button
              className="chord-button VI"
              onClick={() => playChord("Eb", "min7")}
            >
              D#-7
            </button>
            <button
              className="chord-button V"
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
