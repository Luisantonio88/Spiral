import React, { useState } from "react";

interface Bar {
  id: number;
  chordName: string;
  chordKey: string;
  chordType: string;
}

interface BarsProps {
  playChord: (chordKey: string, chordType: string) => void; // Add this line
}

export default function Bars({ playChord }: BarsProps) {
  const [bars, setBars] = useState<Bar[]>([
    { id: 1, chordName: "Drag", chordKey: "", chordType: "" },
    { id: 2, chordName: "Drop", chordKey: "", chordType: "" },
    { id: 3, chordName: "and", chordKey: "", chordType: "" },
    { id: 4, chordName: "Play!", chordKey: "", chordType: "" },
  ]);

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
      playChord(chordKey, chordType); // Play the chord when bar is clicked
    }
  };

  return (
    <div
      id="playerContainer"
      className="flex flex-row w-full mt-4 justify-center items-center gap-8 m-2"
    >
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
    </div>
  );
}
