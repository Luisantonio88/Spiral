"use client";

import { useState } from "react";
import Notes from "@/components/TheoryChapters/Notes"; // Import your individual chapter components
import Intervals from "@/components/TheoryChapters/Intervals";
import MajorScale from "@/components/TheoryChapters/MajorScale";

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState<string>("notes");

  const handleChapterChange = (chapter: string) => {
    setSelectedChapter(chapter);
  };

  return (
    <>
      <div className="flex flex-col fixed bg-cyan-500 p-4 h-full gap-1 mt-16 overflow-auto">
        <button onClick={() => handleChapterChange("notes")}>Notes</button>
        <button onClick={() => handleChapterChange("intervals")}>
          Intervals
        </button>
        <button onClick={() => handleChapterChange("majorscale")}>
          Major Scale
        </button>
        {/* Add more buttons here for other chapters */}
        <h3 className="text-white text-center">&copy; 2024</h3>
      </div>

      <div className="ml-60">
        {selectedChapter === "notes" && <Notes />}
        {selectedChapter === "intervals" && <Intervals />}
        {selectedChapter === "majorscale" && <MajorScale />}
        {/* Conditionally render the component based on selected chapter */}
      </div>
    </>
  );
}
