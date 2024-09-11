import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface Bar {
  id: number;
  chordName: string;
  chordKey: string;
  chordType: string;
}

interface BarsProps {
  playChord: (chordKey: string, chordType: string) => void;
}

export default function Bars({ playChord }: BarsProps) {
  const [bars, setBars] = useState<Bar[]>([
    { id: 1, chordName: "Drag", chordKey: "", chordType: "" },
    { id: 2, chordName: "Drop", chordKey: "", chordType: "" },
    { id: 3, chordName: "and", chordKey: "", chordType: "" },
    { id: 4, chordName: "Play!", chordKey: "", chordType: "" },
  ]);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [tempo, setTempo] = useState<number>(120); // Tempo in BPM
  const [currentBar, setCurrentBar] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const onDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const chord = e.dataTransfer.getData("chord");
    const [chordKey, chordType] = chord.split(",");

    const updatedBars = [...bars];
    updatedBars[index] = {
      ...updatedBars[index],
      chordName: chordKey + (chordType ? chordType : ""),
      chordKey,
      chordType,
    };
    setBars(updatedBars);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleBarClick = (chordKey: string, chordType: string) => {
    if (chordKey && chordType) {
      playChord(chordKey, chordType);
    }
  };

  const startPlaying = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      const beatInterval = (60 / tempo) * 1000; // Convert BPM to milliseconds for a beat

      intervalRef.current = setInterval(() => {
        // Play the chord for the current bar
        const bar = bars[currentBar];
        if (bar.chordKey && bar.chordType) {
          playChord(bar.chordKey, bar.chordType);
        }
        setCurrentBar((prev) => (prev + 1) % bars.length);
      }, beatInterval * 4); // 4 beats per bar (4/4 time)

      // Stop the playback after one loop of all bars
      setTimeout(() => stopPlaying(), beatInterval * 4 * bars.length);
    }
  };

  const stopPlaying = () => {
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPlaying(false);
      setCurrentBar(0);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      id="playerContainer"
      className="flex flex-row w-full mt-4 justify-center items-center gap-8 m-2"
    >
      <div className="flex flex-col justify-items items-center gap-2">
        <button onClick={startPlaying} disabled={isPlaying}>
          <Image
            className="bars-button"
            src={"/play.svg"}
            alt="play"
            width={40}
            height={40}
          />
        </button>
        <button onClick={stopPlaying} disabled={!isPlaying}>
          <Image
            className="bars-button"
            src={"/stop.svg"}
            alt="stop"
            width={40}
            height={40}
          />
        </button>
      </div>
      {bars.map((bar, index) => (
        <div
          key={bar.id}
          className="bar w-20 h-20 border text-center flex justify-center items-center"
          onDrop={(e) => onDrop(e, index)}
          onDragOver={onDragOver}
          onClick={() => handleBarClick(bar.chordKey, bar.chordType)}
        >
          {bar.chordName}
        </div>
      ))}
      <div className="flex flex-col items-center mt-4">
        <label htmlFor="tempo" className="mb-2">
          Tempo (BPM)
        </label>
        <input
          id="tempo"
          type="number"
          value={tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
          min={30}
          max={240}
          step={1}
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
}
