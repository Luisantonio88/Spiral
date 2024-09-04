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
      let audioCtx: AudioContext | null = null;

      const loadAudioBuffer = async (url: string) => {
        try {
          // Ensure the previous context is closed
          if (audioContext) {
            audioContext
              .close()
              .catch((error) =>
                console.error("Error closing audio context:", error)
              );
          }

          audioCtx = new AudioContext();
          const response = await fetch(url);
          const arrayBuffer = await response.arrayBuffer();
          const buffer = await audioCtx.decodeAudioData(arrayBuffer);

          setAudioContext(audioCtx);
          setAudioBuffer(buffer);
        } catch (error) {
          console.error("Error loading audio buffer:", error);
        }
      };

      if (instrument) {
        loadAudioBuffer(
          `https://storage.googleapis.com/turtle-sounds/${instrument}.mp3`
        );
      }

      return () => {
        // Stop active sources
        activeSources.current.forEach((source) => source.stop());
        activeSources.current = [];

        // Close the context if it exists
        if (audioContext) {
          audioContext
            .close()
            .catch((error) =>
              console.error("Error closing audio context:", error)
            );
        }
      };
    }, [instrument]); // Do not include audioContext here to avoid re-triggering

    useImperativeHandle(ref, () => ({
      playSound(notes: string | string[]) {
        if (!audioContext || !audioBuffer) return;

        // Ensure no sources are active before playing new sounds
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

            // Check if audioContext is still valid
            if (audioContext.state === "closed") {
              console.error("AudioContext is closed");
              return;
            }

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
