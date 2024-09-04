"use client";

import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

interface Sprite {
  begin: number;
  end: number;
}

interface AudioPlayerProps {
  instrument: string;
  sprites: { [key: string]: Sprite };
}

const AudioPlayer = forwardRef(
  ({ instrument, sprites }: AudioPlayerProps, ref) => {
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

      if (instrument && !audioBuffer) {
        loadAudioBuffer(
          `https://storage.googleapis.com/turtle-sounds/${instrument}.mp3`
        );
      }

      return () => {
        activeSources.current.forEach((source) => source.stop());
        audioContext?.close();
      };
    }, [instrument]);

    useImperativeHandle(ref, () => ({
      playSound(notes: string | string[]) {
        if (!audioContext || !audioBuffer) return;

        activeSources.current.forEach((source) => source.stop());
        activeSources.current = [];

        if (!Array.isArray(notes)) {
          notes = [notes];
        }

        const maxDuration = 8;
        let longestDuration = 0;

        notes.forEach((note) => {
          const sprite = sprites[note];
          if (sprite) {
            console.log(`Playing note: ${note}`, sprite);

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
          } else {
            console.error(`Sprite for note "${note}" not found`);
          }
        });
      },
    }));

    return null;
  }
);

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
