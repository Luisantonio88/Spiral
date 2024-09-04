"use client";

import ChordPlayer from "@/components/ChordPlayer";
import Header from "@/components/Header";
import InstrumentSelector from "@/components/InstrumentSelector";
import Piano from "@/components/Piano";
import { useEffect, useState } from "react";

export default function Home() {
  const [instrument, setInstrument] = useState<string>("piano");
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
        <Piano instrument={instrument} sprites={sprites} />
      </div>
      <div>
        <ChordPlayer instrument={instrument} sprites={sprites} />
      </div>
      <InstrumentSelector onInstrumentChange={setInstrument} />
    </>
  );
}
