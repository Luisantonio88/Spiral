import ButtonMain from "@/components/Button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-cyan-50">
      <Header />
      <div className="mt-12 p-6 ml-16">
        <h1 className="font-bold text-6xl text-indigo-600 mt-24 tracking-tight">
          Spiral Harmony
        </h1>
        <h2 className="mt-6 text-3xl text-slate-500">
          Next generation Music Creation & Education
        </h2>
        <h3 className="mt-6 text-2xl  tracking-wide">
          Are you ready to dive into the magical word of music and sound?
        </h3>
      </div>
      <div className="flex flex-wrap p-6">
        <ButtonMain text="Play" icon="play.svg" />
        <ButtonMain text="Practice" icon="guitar.svg" />
        <ButtonMain text="Theory" icon="piano.svg" />
        <ButtonMain text="Premium" icon="play.svg" />
      </div>
    </main>
  );
}
