// components/BasicStave.tsx
import { useEffect, useRef } from "react";
import Vex, { Formatter, StaveNote, Voice } from "vexflow";

interface BasicStaveProps {
  notes?: string[]; // Optional array of notes to render, e.g., ["C4", "E4", "G4"]
}

const BasicStave: React.FC<BasicStaveProps> = ({ notes = [] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { Renderer, Stave } = Vex.Flow;

    const container = containerRef.current;

    if (container) {
      container.innerHTML = ""; // Clear the container

      // Create an SVG renderer and attach it to the div element
      const renderer = new Renderer(container, Renderer.Backends.SVG);

      // Configure the rendering context
      renderer.resize(100, 140);
      const context = renderer.getContext();

      // Create a stave at position 10, 40, width 200
      const stave = new Stave(10, 0, 80);

      // Add a clef and time signature
      stave.addClef("treble");

      // Connect it to the rendering context and draw
      stave.setContext(context).draw();

      if (notes.length > 0) {
        // Function to format the notes to the required VexFlow format
        const formatNote = (note: string): string => {
          const [letter, octave] = note.split(/(\d+)/); // Split the note into letter and octave
          return `${letter.toLowerCase()}/${octave}`; // Format to "c/4"
        };

        // Create a single StaveNote for the chord with all keys
        const formattedNotes = notes.map(formatNote); // Format all notes
        const staveNote = new StaveNote({
          keys: formattedNotes, // The keys for the chord
          duration: "w", // Whole note
        });

        // Create a voice in 4/4 time
        const voice = new Voice({ num_beats: 4, beat_value: 4 });

        // Add the stave note (chord) to the voice
        voice.addTickables([staveNote]);

        // Format and render the voice
        new Formatter().joinVoices([voice]).format([voice], 200);
        voice.draw(context, stave);
      }
    }

    return () => {
      if (container) {
        container.innerHTML = ""; // Clears the container on unmount or re-render
      }
    };
  }, [notes]); // Run effect again if notes prop changes

  return <div ref={containerRef}></div>;
};

export default BasicStave;
