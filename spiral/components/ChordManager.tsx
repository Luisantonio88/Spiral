import React, { useImperativeHandle, forwardRef, useRef } from "react";
import AudioPlayer from "./AudioPlayer";
import { ChordType, chords } from "@/app/chords"; // Import the types and chords

interface ChordManagerProps {
  instrument: string;
  sprites: { [key: string]: any }; // Adjust type as needed
  setActiveKeys: (keys: string[]) => void; // Add this line
}

const ChordManager = forwardRef<
  { playChord: (chordName: string, chordType: ChordType) => void },
  ChordManagerProps
>(({ instrument, sprites, setActiveKeys }: ChordManagerProps, ref) => {
  // Add setActiveKeys
  const audioPlayerRef = useRef<{
    playSound: (notes: string | string[]) => void;
  } | null>(null);

  useImperativeHandle(ref, () => ({
    playChord(chordName: string, chordType: ChordType) {
      if (audioPlayerRef.current) {
        const chordNotes = chords[chordName][chordType];
        if (chordNotes) {
          audioPlayerRef.current.playSound(chordNotes);
          setActiveKeys(chordNotes); // Set active keys
          setTimeout(() => setActiveKeys([]), 500); // Reset active keys after some time
        }
      }
    },
  }));

  return (
    <AudioPlayer
      ref={audioPlayerRef}
      instrument={instrument}
      sprites={sprites}
    />
  );
});

ChordManager.displayName = "ChordManager";

export default ChordManager;
