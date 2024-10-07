// components/SimpleSheetMusic.js
import { useEffect, useRef } from "react";
import Vex from "vexflow";

const SheetMusic = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize VexFlow
      const VF = Vex.Flow;
      const renderer = new VF.Renderer(
        containerRef.current,
        VF.Renderer.Backends.SVG
      );

      // Set the canvas size
      renderer.resize(200, 150);
      const context = renderer.getContext();

      // Create a stave
      const stave = new VF.Stave(10, 40, 180);
      stave.addClef("treble");
      stave.setContext(context).draw();

      // Create a C4 whole note
      const notes = [
        new VF.StaveNote({
          keys: ["c/4", "e/4", "g/4"], // C4, E4, G4 chord
          duration: "w", // Whole note
        }),
      ];

      // Create a voice in 4/4 time
      const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
      voice.addTickables(notes);

      // Format and render the voice
      new VF.Formatter().joinVoices([voice]).format([voice], 150);
      voice.draw(context, stave);
    }
  }, []);

  return <div ref={containerRef}></div>;
};

export default SheetMusic;
