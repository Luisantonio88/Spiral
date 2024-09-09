"use client";

import { useRef } from "react";
import AudioPlayer from "./AudioPlayer";

interface PianoProps {
  instrument: string;
  sprites: { [key: string]: any };
  activeKeys: string[];
  setActiveKeys: (keys: string[]) => void;
}

export default function Piano({
  instrument,
  sprites,
  activeKeys,
  setActiveKeys,
}: PianoProps) {
  const audioPlayerRef = useRef<{
    playSound: (notes: string | string[]) => void;
  } | null>(null);

  const playSound = (note: string) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.playSound(note);
    }
  };
  return (
    <div className="flex items-center justify-center mt-2">
      {[
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
        "Ab4",
        "A4",
        "Bb4",
        "B4",
        "C5",
        "Db5",
        "D5",
        "Eb5",
        "E5",
        "F5",
        "Gb5",
        "G5",
        "Ab5",
        "A5",
        "Bb5",
        "B5",
      ].map((note) => (
        <div key={note}>
          <button
            className={`key ${note.includes("b") ? "blackkey" : "whitekey"} ${
              activeKeys.includes(note) ? "key-active" : ""
            }`}
            data-note={note}
            onClick={() => playSound(note)}
          >
            <span className="hidden">{note}</span>
          </button>
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
