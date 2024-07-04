import ButtonMain from "@/components/ButtonMain";
import ButtonMainIndigo from "@/components/ButtonMainIndigo";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="  ml-16 flex flex-row">
        <div className="mt-24">
          <h1 className="font-bold text-6xl text-indigo-600 mt-16 tracking-tight">
            Spiral Harmony
          </h1>
          <h2 className="mt-6 text-3xl text-slate-500">
            Next generation Music Creation & Education
          </h2>
          <h3 className="mt-6 text-2xl  tracking-wide">
            Are you ready to dive into the magical word of music and sound?
          </h3>
        </div>
        <div className="mt-4 ml-24">
          <Image alt="logo" src="/logo.png" width={360} height={360} />
        </div>
      </div>
      <div className="flex flex-wrap pl-6">
        <ButtonMain text="Play" icon="listen.svg" />
        <ButtonMain text="Theory" icon="notes.svg" />
        <ButtonMain text="Piano" icon="piano.svg" />
        <ButtonMain text="Guitar" icon="guitar.svg" />
        <ButtonMain text="Listen" icon="headphones.svg" />
        <ButtonMain text="Videos" icon="youtube.svg" />
        <ButtonMain text="Book" icon="book.svg" />
        <ButtonMainIndigo text="Premium" icon="diamond.svg" />
      </div>
    </main>
  );
}
