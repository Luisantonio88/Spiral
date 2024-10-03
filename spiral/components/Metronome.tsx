import React, { useState, useRef, useEffect } from "react";
import PlayerControls from "./PlayerControls"; // Reusing the PlayerControls component

interface Sprite {
  begin: number;
  end: number;
}

interface MetronomeProps {
  audioPlayerRef: React.RefObject<any>; // Reference to the AudioPlayer component
  sprites: { [key: string]: Sprite }; // JSON data with sprite timings for metronome sounds
}

export default function Metronome({ audioPlayerRef, sprites }: MetronomeProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [tempo, setTempo] = useState<number>(120); // Tempo in BPM
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startMetronome = () => {
    if (!isPlaying && audioPlayerRef.current) {
      setIsPlaying(true);
      const beatInterval = (60 / tempo) * 1000; // Convert BPM to milliseconds

      // Play the first beat immediately
      audioPlayerRef.current.playSound("beat"); // Play the "beat" sound using sprite

      intervalRef.current = setInterval(() => {
        audioPlayerRef.current.playSound("beat"); // Repeatedly play the "beat" sound
      }, beatInterval);
    }
  };

  const stopMetronome = () => {
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPlaying(false);
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
    <div>
      <h2 className="text-center mb-4">Metronome</h2>
      <PlayerControls
        onPlay={startMetronome}
        onStop={stopMetronome}
        onTempoChange={setTempo}
        isPlaying={isPlaying}
        tempo={tempo}
      />
    </div>
  );
}
