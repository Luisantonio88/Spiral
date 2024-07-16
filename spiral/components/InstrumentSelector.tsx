import { ChangeEvent } from "react";

interface InstrumentSelectorProps {
  onInstrumentChange: (instrument: string) => void;
}

export default function InstrumentSelector({
  onInstrumentChange,
}: InstrumentSelectorProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onInstrumentChange(event.target.value);
  };
  return (
    <div className="flex flex-row gap-2 items-center justify-center mt-3">
      <label>Instrument:</label>
      <div>
        <select
          id="instrument-selector"
          className="shadow shadow-cyan-500 rounded-lg p-2"
          onChange={handleChange}
        >
          <option value="piano">Piano</option>
          <option value="rhodes">Rhodes</option>
          <option value="xrhodes">X-Rhodes</option>
          <option value="paddedrhodes">Padded Rhodes</option>
          <option value="house">House</option>
          <option value="strat">Strat</option>
          <option value="steelguitar">Steel Guitar</option>
          <option value="nylonguitar">Nylon Guitar</option>
          <option value="backingpad">Backing Pads</option>
          <option value="droidpad">Droid Pads</option>
          <option value="20kpad">20K Pads</option>
          <option value="analogpad">Analog Pads</option>
          <option value="atmospad">Atmos Pads</option>
          <option value="xstrings">Strings</option>
          <option value="airpoly">Air Poly</option>
          <option value="bells">Bells</option>
          <option value="breathchoir">Choir</option>
          <option value="broken">Broken</option>
          <option value="chillout">Chillout</option>
          <option value="dancestrings">Dance Strings</option>
          <option value="dynoorgan">Dyno Organ</option>
          <option value="fairlight">Fairlight</option>
          <option value="fbshort">Fb Short</option>
          <option value="hardwurli">Hard Wurli</option>
          <option value="harmonix">Harmonix</option>
          <option value="housepads">House Pads</option>
          <option value="hybrid">Hybrid</option>
          <option value="moog">Moog</option>
          <option value="noiseyrev">Noisey Rev</option>
          <option value="noiseysweep">Noisey Sweep</option>
          <option value="organ">Organ</option>
          <option value="pantack">Pan Tack</option>
          <option value="pianowet">Piano Wet</option>
          <option value="planetpad">Planet Pad</option>
          <option value="pluck">Pluck</option>
          <option value="popsynth">Pop Synth</option>
          <option value="rhythmiclofi">Rhythmic Lofi</option>
          <option value="rhythmicpad">Rhythmic Pads</option>
          <option value="richlofi">Rich Lofi</option>
          <option value="richswell">Rich Swell</option>
          <option value="scratchy">Scratchy</option>
          <option value="shortstrings">Short Strings</option>
          <option value="snappy">Snappy</option>
          <option value="softtines">Soft Tines</option>
          <option value="spiccatostrings">Spiccato Strings</option>
          <option value="toy">Toy</option>
          <option value="warmpad">Warm Pad</option>
          <option value="whoopchords">Whoop Chords</option>
          <option value="whoopchorus">Whoop Chorus</option>
          <option value="wurli">Wurli</option>
          <option value="wurliwet">Wurli Wet</option>
        </select>
      </div>
    </div>
  );
}
