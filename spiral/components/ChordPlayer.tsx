export default function ChordPlayer() {
  return (
    <>
      <div className="flex flex-row items-center justify-center mt-12 gap-1">
        <div className="chord-key Gb">
          <button className="chord-button III" data-key="Bb" data-type="minor">
            Bb-
          </button>
          <button className="chord-button II" data-key="Ab" data-type="minor">
            Ab-
          </button>
          <button className="chord-button I" data-key="Gb" data-type="major">
            Gb
          </button>
          <button className="chord-button VII" data-key="F" data-type="dim">
            F&deg;
          </button>
          <button className="chord-button VI" data-key="Eb" data-type="minor">
            Eb-
          </button>
          <button className="chord-button V" data-key="Db" data-type="major">
            Db
          </button>
          <button className="chord-button IV" data-key="B" data-type="major">
            Cb
          </button>
        </div>
        <div className="chord-key Db">
          <button className="chord-button VI" data-key="Bb" data-type="minor">
            Bb-
          </button>
          <button className="chord-button V" data-key="Ab" data-type="major">
            Ab
          </button>
          <button className="chord-button IV" data-key="Gb" data-type="major">
            Gb
          </button>
          <button className="chord-button III" data-key="F" data-type="minor">
            F-
          </button>
          <button className="chord-button II" data-key="Eb" data-type="minor">
            Eb-
          </button>
          <button className="chord-button I" data-key="Db" data-type="major">
            Db
          </button>
          <button className="chord-button VII" data-key="C" data-type="dim">
            C&deg;
          </button>
        </div>
        <div className="chord-key Ab">
          <button className="chord-button II" data-key="Bb" data-type="minor">
            Bb-
          </button>
          <button className="chord-button I" data-key="Ab" data-type="major">
            Ab
          </button>
          <button className="chord-button VII" data-key="G" data-type="dim">
            G&deg;
          </button>
          <button className="chord-button VI" data-key="F" data-type="minor">
            F-
          </button>
          <button className="chord-button V" data-key="Eb" data-type="major">
            Eb
          </button>
          <button className="chord-button IV" data-key="Db" data-type="major">
            Db
          </button>
          <button className="chord-button III" data-key="C" data-type="minor">
            C-
          </button>
        </div>
        <div className="chord-key Eb">
          <button className="chord-button V" data-key="Bb" data-type="major">
            Bb
          </button>
          <button className="chord-button IV" data-key="Ab" data-type="major">
            Ab
          </button>
          <button className="chord-button III" data-key="G" data-type="minor">
            G-
          </button>
          <button className="chord-button II" data-key="F" data-type="minor">
            F-
          </button>
          <button className="chord-button I" data-key="Eb" data-type="major">
            Eb
          </button>
          <button className="chord-button VII" data-key="D" data-type="dim">
            D&deg;
          </button>
          <button className="chord-button VI" data-key="C" data-type="minor">
            C-
          </button>
        </div>
        <div className="chord-key Bb">
          <button className="chord-button I" data-key="Bb" data-type="major">
            Bb
          </button>
          <button className="chord-button VII" data-key="A" data-type="dim">
            A&deg;
          </button>
          <button className="chord-button VI" data-key="G" data-type="minor">
            G-
          </button>
          <button className="chord-button V" data-key="F" data-type="major">
            F
          </button>
          <button className="chord-button IV" data-key="Eb" data-type="major">
            Eb
          </button>
          <button className="chord-button III" data-key="D" data-type="minor">
            D-
          </button>
          <button className="chord-button II" data-key="C" data-type="minor">
            C-
          </button>
        </div>
        <div className="chord-key F">
          <button className="chord-button IV" data-key="Bb" data-type="major">
            Bb
          </button>
          <button className="chord-button III" data-key="A" data-type="minor">
            A-
          </button>
          <button className="chord-button II" data-key="G" data-type="minor">
            G-
          </button>
          <button className="chord-button I" data-key="F" data-type="major">
            F
          </button>
          <button className="chord-button VII" data-key="E" data-type="dim">
            E&deg;
          </button>
          <button className="chord-button VI" data-key="D" data-type="minor">
            D-
          </button>
          <button className="chord-button V" data-key="C" data-type="major">
            C
          </button>
        </div>
        <div className="chord-key C main-key">
          <button className="chord-button VII" data-key="B" data-type="dim">
            B&deg;
          </button>
          <button className="chord-button VI" data-key="A" data-type="minor">
            A-
          </button>
          <button className="chord-button V" data-key="G" data-type="major">
            G
          </button>
          <button className="chord-button IV" data-key="F" data-type="major">
            F
          </button>
          <button className="chord-button III" data-key="E" data-type="minor">
            E-
          </button>
          <button className="chord-button II" data-key="D" data-type="minor">
            D-
          </button>
          <button className="chord-button I" data-key="C" data-type="major">
            C
          </button>
        </div>
        <div className="chord-key G">
          <button className="chord-button III" data-key="B" data-type="minor">
            B-
          </button>
          <button className="chord-button II" data-key="A" data-type="minor">
            A-
          </button>
          <button className="chord-button I" data-key="G" data-type="major">
            G
          </button>
          <button className="chord-button VII" data-key="Gb" data-type="dim">
            F#&deg;
          </button>
          <button className="chord-button VI" data-key="E" data-type="minor">
            E-
          </button>
          <button className="chord-button V" data-key="D" data-type="major">
            D
          </button>
          <button className="chord-button IV" data-key="C" data-type="major">
            C
          </button>
        </div>
        <div className="chord-key D">
          <button className="chord-button VI" data-key="B" data-type="minor">
            B-
          </button>
          <button className="chord-button V" data-key="A" data-type="major">
            A
          </button>
          <button className="chord-button IV" data-key="G" data-type="major">
            G
          </button>
          <button className="chord-button III" data-key="Gb" data-type="minor">
            F#-
          </button>
          <button className="chord-button II" data-key="E" data-type="minor">
            E-
          </button>
          <button className="chord-button I" data-key="D" data-type="major">
            D
          </button>
          <button className="chord-button VII" data-key="Db" data-type="dim">
            C#&deg;
          </button>
        </div>
        <div className="chord-key A">
          <button className="chord-button II" data-key="B" data-type="minor">
            B-
          </button>
          <button className="chord-button I" data-key="A" data-type="major">
            A
          </button>
          <button className="chord-button VII" data-key="Ab" data-type="dim">
            G#&deg;
          </button>
          <button className="chord-button VI" data-key="Gb" data-type="minor">
            F#-
          </button>
          <button className="chord-button V" data-key="E" data-type="major">
            E
          </button>
          <button className="chord-button IV" data-key="D" data-type="major">
            D
          </button>
          <button className="chord-button III" data-key="Db" data-type="minor">
            C#-
          </button>
        </div>
        <div className="chord-key E">
          <button className="chord-button V" data-key="B" data-type="major">
            B
          </button>
          <button className="chord-button IV" data-key="A" data-type="major">
            A
          </button>
          <button className="chord-button III" data-key="Ab" data-type="minor">
            G#-
          </button>
          <button className="chord-button II" data-key="Gb" data-type="minor">
            F#-
          </button>
          <button className="chord-button I" data-key="E" data-type="major">
            E
          </button>
          <button className="chord-button VII" data-key="Eb" data-type="dim">
            D#&deg;
          </button>
          <button className="chord-button VI" data-key="Db" data-type="minor">
            C#-
          </button>
        </div>
        <div className="chord-key B">
          <button className="chord-button I" data-key="B" data-type="major">
            B
          </button>
          <button className="chord-button VII" data-key="Bb" data-type="dim">
            A#&deg;
          </button>
          <button className="chord-button VI" data-key="Ab" data-type="minor">
            G#-
          </button>
          <button className="chord-button V" data-key="Gb" data-type="major">
            F#
          </button>
          <button className="chord-button IV" data-key="E" data-type="major">
            E
          </button>
          <button className="chord-button III" data-key="Eb" data-type="minor">
            D#-
          </button>
          <button className="chord-button II" data-key="Db" data-type="minor">
            C#-
          </button>
        </div>
        <div className="chord-key F#">
          <button className="chord-button IV" data-key="B" data-type="major">
            B
          </button>
          <button className="chord-button III" data-key="Bb" data-type="minor">
            A#-
          </button>
          <button className="chord-button II" data-key="Ab" data-type="minor">
            G#-
          </button>
          <button className="chord-button I" data-key="Gb" data-type="major">
            F#
          </button>
          <button className="chord-button VII" data-key="F" data-type="dim">
            E#&deg;
          </button>
          <button className="chord-button VI" data-key="Eb" data-type="minor">
            D#-
          </button>
          <button className="chord-button V" data-key="Db" data-type="major">
            C#
          </button>
        </div>
      </div>
    </>
  );
}
