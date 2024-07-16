"use client";

import { useEffect, useState, useRef } from "react";

interface PianoProps {
  instrument: string;
  sprites: { [key: string]: any };
}

export default function Piano({ instrument, sprites }: PianoProps) {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const activeSources = useRef<AudioBufferSourceNode[]>([]);

  useEffect(() => {
    const loadAudioBuffer = async (url: string) => {
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioCtx = new AudioContext();
        setAudioContext(audioCtx);
        const buffer = await audioCtx.decodeAudioData(arrayBuffer);
        setAudioBuffer(buffer);
      } catch (error) {
        console.error("Error loading audio buffer:", error);
      }
    };

    if (instrument) {
      loadAudioBuffer(
        `https://storage.googleapis.com/turtle-sounds/${instrument}.mp3`
      );
    }
  }, [instrument]);

  const playSound = (notes: string | string[]) => {
    if (!audioContext || !audioBuffer) return;

    activeSources.current.forEach((source) => source.stop());
    activeSources.current = [];

    document
      .querySelectorAll(".pianokey button.active, .note-fret button.active")
      .forEach((button) => {
        button.classList.remove("active");
      });

    if (!Array.isArray(notes)) {
      notes = [notes];
    }

    const maxDuration = 8;
    let longestDuration = 0;

    notes.forEach((note) => {
      const sprite = sprites[note];
      if (sprite) {
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);

        const spriteDuration = sprite.end - sprite.begin;
        const playDuration = Math.min(spriteDuration, maxDuration);
        longestDuration = Math.max(longestDuration, playDuration);

        source.start(0, sprite.begin, playDuration);
        source.onended = () => {
          const index = activeSources.current.indexOf(source);
          if (index > -1) {
            activeSources.current.splice(index, 1);
          }
        };

        activeSources.current.push(source);

        document
          .querySelectorAll(`button[data-note="${note}"]`)
          .forEach((button) => {
            button.classList.add("active");
            setTimeout(() => {
              button.classList.remove("active");
            }, 1000);
          });
      }
    });
  };

  const playNote = (note: string) => {
    playSound(note);
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
            className={note.includes("b") ? "blackkey" : "whitekey"}
            data-note={note}
            onClick={() => playNote(note)}
          >
            <span className="hidden">{note}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
