"use client";

import { useRef } from "react";
import AudioPlayer from "./AudioPlayer";

interface GuitarProps {
  instrument: string;
  sprites: { [key: string]: any };
  activeStrings: string[];
  setActiveStrings: (strings: string[]) => void;
}

export default function Guitar({
  instrument,
  sprites,
  activeStrings,
  setActiveStrings,
}: GuitarProps) {
  const audioPlayerRef = useRef<{
    playSound: (notes: string | string[]) => void;
  } | null>(null);

  const playSound = (note: string) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.playSound(note);
    }
  };

  // Define the guitar strings and frets
  const strings = [
    {
      name: "e",
      notes: [
        "E4",
        "F4",
        "Gb4",
        "G4",
        "Ab4",
        "A4",
        "Bb4",
        "B4",
        "C5",
        "Db5",
        "D5",
        "Eb5",
        "E5",
      ],
    },
    {
      name: "B",
      notes: [
        "B3",
        "C4",
        "Db4",
        "D4",
        "Eb4",
        "E4",
        "F4",
        "Gb4",
        "G4",
        "Ab4",
        "A4",
        "Bb4",
        "B4",
      ],
    },
    {
      name: "G",
      notes: [
        "G3",
        "Ab3",
        "A3",
        "Bb3",
        "B3",
        "C4",
        "Db4",
        "D4",
        "Eb4",
        "E4",
        "F4",
        "Gb4",
        "G4",
      ],
    },
    {
      name: "D",
      notes: [
        "D3",
        "Eb3",
        "E3",
        "F3",
        "Gb3",
        "G3",
        "Ab3",
        "A3",
        "Bb3",
        "B3",
        "C4",
        "Db4",
        "D4",
      ],
    },
    {
      name: "A",
      notes: [
        "A2",
        "Ab2",
        "B2",
        "C3",
        "Db3",
        "D3",
        "Eb3",
        "E3",
        "F3",
        "Gb3",
        "G3",
        "Ab3",
        "A3",
      ],
    },
    {
      name: "E",
      notes: [
        "E2",
        "F2",
        "Gb2",
        "G2",
        "Ab2",
        "A2",
        "Bb2",
        "B2",
        "C3",
        "Db3",
        "D3",
        "Eb3",
        "E3",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      {strings.map((string) => (
        <div key={string.name} className="flex">
          {string.notes.map((note) => (
            <button
              key={note}
              className={`fret ${
                activeStrings.includes(note) ? "fret-active" : ""
              }`}
              data-note={note}
              onClick={() => playSound(note)}
            >
              <span className="hidden">{note}</span>
            </button>
          ))}
        </div>
      ))}
      <AudioPlayer
        ref={audioPlayerRef}
        instrument={instrument}
        sprites={sprites}
      />
    </div>
  );
}
