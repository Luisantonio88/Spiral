"use client";

import { useState } from "react";
import Notes from "@/components/TheoryChapters/Notes";
import Intervals from "@/components/TheoryChapters/Intervals";
import MajorScale from "@/components/TheoryChapters/MajorScale";
import CircleOfFifths from "@/components/TheoryChapters/CircleOfFifths";
import RelativeMinor from "@/components/TheoryChapters/RelativeMinor";
import Triads from "@/components/TheoryChapters/Triads";
import Inversions from "@/components/TheoryChapters/Inversions";
import ChordProgressions from "@/components/TheoryChapters/ChordProgressions";
import SeventhChords from "@/components/TheoryChapters/SeventhChords";
import Modes from "@/components/TheoryChapters/Modes";
import SecondaryDominants from "@/components/TheoryChapters/SecondaryDominants";
import OtherScales from "@/components/TheoryChapters/OtherScales";
import ModalInterchange from "@/components/TheoryChapters/ModalInterchange";
import Cadences from "@/components/TheoryChapters/Cadences";
import UpperStructures from "@/components/TheoryChapters/UpperStructures";

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState<string>("notes");

  const handleChapterChange = (chapter: string) => {
    setSelectedChapter(chapter);
  };

  return (
    <>
      <div className="flex flex-col fixed bg-cyan-500 p-4 h-full gap-1 overflow-y-auto pb-16">
        <button
          className="theory-button"
          onClick={() => handleChapterChange("notes")}
        >
          Notes
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("intervals")}
        >
          Intervals
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("majorscale")}
        >
          Major Scale
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("circleoffifths")}
        >
          Circle of Fifths
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("relativeminor")}
        >
          Relative Minor
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("triads")}
        >
          Triads
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("chordprogressions")}
        >
          Chord Progressions
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("inversions")}
        >
          Inversions
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("seventhchords")}
        >
          Seventh Chords
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("modes")}
        >
          Modes
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("secondarydominants")}
        >
          Secondary Dominants
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("otherscales")}
        >
          Other Scales
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("modalinterchange")}
        >
          Modal Interchange
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("cadences")}
        >
          Cadences
        </button>
        <button
          className="theory-button"
          onClick={() => handleChapterChange("upperstructures")}
        >
          Upper Structures
        </button>
        <h3 className="text-white text-center mt-4">&copy; 2024</h3>
      </div>

      <div className="ml-60 mt-16">
        {selectedChapter === "notes" && <Notes />}
        {selectedChapter === "intervals" && <Intervals />}
        {selectedChapter === "majorscale" && <MajorScale />}
        {selectedChapter === "circleoffifths" && <CircleOfFifths />}
        {selectedChapter === "relativeminor" && <RelativeMinor />}
        {selectedChapter === "triads" && <Triads />}
        {selectedChapter === "chordprogressions" && <ChordProgressions />}
        {selectedChapter === "inversions" && <Inversions />}
        {selectedChapter === "seventhchords" && <SeventhChords />}
        {selectedChapter === "modes" && <Modes />}
        {selectedChapter === "secondarydominants" && <SecondaryDominants />}
        {selectedChapter === "otherscales" && <OtherScales />}
        {selectedChapter === "modalinterchange" && <ModalInterchange />}
        {selectedChapter === "cadences" && <Cadences />}
        {selectedChapter === "upperstructures" && <UpperStructures />}
      </div>
    </>
  );
}
