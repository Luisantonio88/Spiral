import React, { useState } from "react";
import Image from "next/image";

interface PlayerControlsProps {
  onPlay: () => void;
  onStop: () => void;
  onTempoChange: (tempo: number) => void;
  isPlaying: boolean;
  tempo: number;
}

export default function PlayerControls({
  onPlay,
  onStop,
  onTempoChange,
  isPlaying,
  tempo,
}: PlayerControlsProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <button onClick={onPlay} disabled={isPlaying}>
        <Image
          className="play-button"
          src={"/play.svg"}
          alt="play"
          width={45}
          height={45}
        />
      </button>
      <button onClick={onStop} disabled={!isPlaying}>
        <Image
          className="stop-button"
          src={"/stop.svg"}
          alt="stop"
          width={45}
          height={45}
        />
      </button>
      <div className="flex flex-col items-center">
        <label htmlFor="tempo" className="mb-2">
          Tempo
        </label>
        <input
          id="tempo"
          type="number"
          value={tempo}
          onChange={(e) => onTempoChange(Number(e.target.value))}
          min={30}
          max={240}
          step={1}
          className="p-1 shadow shadow-cyan-500 rounded-lg"
        />
      </div>
    </div>
  );
}
