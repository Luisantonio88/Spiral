"use client";

import Bars from "@/components/Bars";
import ChordPlayer from "@/components/ChordPlayer";
import ChordTypeSelector from "@/components/ChordTypeSelector";
import Header from "@/components/Header";
import InstrumentSelector from "@/components/InstrumentSelector";
import Piano from "@/components/Piano";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [instrument, setInstrument] = useState<string>("rhodes");
  const [chordType, setChordType] = useState<string>("triads"); // Initialize chord type state

  const [sprites, setSprites] = useState<{ [key: string]: any }>({});

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
      <Header />
      <div className="mt-16">
        <Piano
          instrument={instrument}
          sprites={sprites} // Provide your sprites
          activeKeys={activeKeys} // Pass activeKeys as a prop
          setActiveKeys={setActiveKeys} // Pass the setActiveKeys function
        />{" "}
      </div>
      <div>
        <ChordPlayer
          instrument={instrument}
          sprites={sprites} // Provide your sprites
          setActiveKeys={setActiveKeys} // Pass the setActiveKeys function
          chordType={chordType}
        />{" "}
      </div>
      <div className="flex flex-row justify-center gap-8">
        <InstrumentSelector onInstrumentChange={setInstrument} />
        <ChordTypeSelector onChordTypeChange={setChordType} />
      </div>
      <Bars />
    </>
  );
}
