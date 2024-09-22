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
  const [numBars, setNumBars] = useState<number>(4); // Default to 4 bars
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
  const totalBars = bars.length;

  const onDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const chord = e.dataTransfer.getData("chord");
    const [chordDisplay, chordKey, chordType] = chord.split(",");

    const updatedBars = [...bars];
    updatedBars[index] = {
      ...updatedBars[index],
      chordName: chordDisplay,
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

      // Play the first bar immediately
      const firstBar = bars[0];
      if (firstBar.chordKey && firstBar.chordType) {
        playChord(firstBar.chordKey, firstBar.chordType);
      }

      // Start interval after the first bar is played
      intervalRef.current = setInterval(() => {
        setCurrentBar((prevCurrentBar) => {
          const nextBar = (prevCurrentBar + 1) % totalBars;
          const bar = bars[nextBar];
          if (bar.chordKey && bar.chordType) {
            playChord(bar.chordKey, bar.chordType);
          }

          return nextBar; // Move to the next bar, wrap around at the last bar
        });
      }, beatInterval * 4); // 4 beats per bar (4/4 time)
    }
  };

  const stopPlaying = () => {
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPlaying(false);
      setCurrentBar(0); // Reset to the first bar
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleNumBarsChange = (newNumBars: number) => {
    if (newNumBars < 4 || newNumBars > 16) return; // Ensure the number is between 4 and 32
    setNumBars(newNumBars);

    // Adjust the bars array length
    const updatedBars = [...bars];
    if (newNumBars > bars.length) {
      // Add new bars if increasing the number
      for (let i = bars.length; i < newNumBars; i++) {
        updatedBars.push({
          id: i + 1,
          chordName: `Bar ${i + 1}`,
          chordKey: "",
          chordType: "",
        });
      }
    } else if (newNumBars < bars.length) {
      // Remove bars if decreasing the number
      updatedBars.length = newNumBars;
    }

    setBars(updatedBars);
  };

  return (
    <div
      id="playerContainer"
      className="flex flex-row w-full mt-4 justify-center items-center gap-8 m-2"
    >
      <div className="flex flex-col gap-2">
        <button onClick={startPlaying} disabled={isPlaying}>
          <Image
            className="bars-button"
            src={"/play.svg"}
            alt="play"
            width={45}
            height={45}
          />
        </button>
        <button onClick={stopPlaying} disabled={!isPlaying}>
          <Image
            className="bars-button"
            src={"/stop.svg"}
            alt="stop"
            width={45}
            height={45}
          />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-center">
        {bars.map((bar, index) => (
          <div
            key={bar.id}
            className={`bar w-20 h-20 border text-center flex justify-center items-center ${
              index === currentBar ? "active-bar" : ""
            }`}
            onDrop={(e) => onDrop(e, index)}
            onDragOver={onDragOver}
            onClick={() => handleBarClick(bar.chordKey, bar.chordType)}
          >
            {bar.chordName}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="tempo" className="mb-2">
          Tempo
        </label>
        <input
          id="tempo"
          type="number"
          value={tempo}
          onChange={(e) => setTempo(Number(e.target.value))}
          min={30}
          max={240}
          step={1}
          className="p-1 shadow shadow-cyan-500 rounded-lg"
        />
        <label htmlFor="numBars" className="mb-2">
          Number of Bars
        </label>
        <input
          id="numBars"
          type="number"
          value={numBars}
          onChange={(e) => handleNumBarsChange(Number(e.target.value))}
          min={4}
          max={32}
          className="p-1 shadow shadow-cyan-500 rounded-lg"
        />
      </div>
    </div>
  );
}
