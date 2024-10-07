"use client";

import { useEffect, useState, useRef } from "react";
import Bars from "@/components/Bars";
import ChordPlayer from "@/components/ChordPlayer";
import ChordTypeSelector from "@/components/ChordTypeSelector";
import InstrumentSelector from "@/components/InstrumentSelector";
import ChordManager from "@/components/ChordManager"; // Import ChordManager
import Guitar from "@/components/Guitar";

export default function Home() {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [activeStrings, setActiveStrings] = useState<string[]>([]); // State for guitar strings
  const [instrument, setInstrument] = useState<string>("rhodes");
  const [chordType, setChordType] = useState<string>("triads"); // Initialize chord type state
  const [sprites, setSprites] = useState<{ [key: string]: any }>({});

  const chordManagerRef = useRef<{
    playChord: (chordName: string, chordType: string) => void;
  } | null>(null);

  const fetchDataForInstrument = async (inst: string) => {
    try {
      const response = await fetch(
        `https://storage.googleapis.com/turtle-sounds/${inst}-playtimes.json`
      );
      const data = await response.json();
      if (data[inst] && data[inst].sprites) {
        setSprites(data[inst].sprites);
      } else {
        throw new Error(`Sprites data is missing for ${inst}`);
      }
    } catch (error) {
      console.error("Error loading audio sprite data for", inst, ":", error);
    }
  };

  useEffect(() => {
    fetchDataForInstrument(instrument);
  }, [instrument]);

  return (
    <>
      <div className="mt-16">
        <Guitar
          instrument={instrument}
          sprites={sprites} // Provide your sprites
          activeStrings={activeKeys} // Pass activeKeys as a prop
        />
      </div>
      <div>
        <ChordPlayer
          instrument={instrument}
          sprites={sprites} // Provide your sprites
          setActiveKeys={setActiveKeys} // Pass the setActiveKeys function
          chordType={chordType}
        />
      </div>
      <div className="flex flex-row justify-center gap-8">
        <InstrumentSelector onInstrumentChange={setInstrument} />
        <ChordTypeSelector onChordTypeChange={setChordType} />
      </div>
      <ChordManager
        ref={chordManagerRef}
        instrument={instrument}
        sprites={sprites}
        setActiveKeys={setActiveKeys}
      />
      <div className="mt-8">
        <Bars
          playChord={(chordName: string, chordType: string) => {
            if (chordManagerRef.current) {
              chordManagerRef.current.playChord(chordName, chordType);
            }
          }}
        />
      </div>
    </>
  );
}
