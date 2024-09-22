import { ChangeEvent } from "react";

interface ChordTypeSelectorProps {
  onChordTypeChange: (chordType: string) => void;
}

export default function ChordTypeSelector({
  onChordTypeChange,
}: ChordTypeSelectorProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChordTypeChange(event.target.value);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center mt-3">
      <label>Chord Type:</label>
      <div>
        <select
          id="chord-type-selector"
          className="shadow shadow-cyan-500 rounded-lg p-2"
          onChange={handleChange}
          defaultValue={"triads"}
        >
          <option value="triads">Triads</option>
          <option value="7th">7th Chords</option>
          <option value="9th">9th Chords</option>
        </select>
      </div>
    </div>
  );
}
