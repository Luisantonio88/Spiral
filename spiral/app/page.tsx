import ButtonMain from "@/components/ButtonMain";
import ButtonMainIndigo from "@/components/ButtonMainIndigo";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className=" p-6 ml-12 flex flex-row">
        <div className="mt-12">
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
        <div className="ml-24">
          <Image alt="logo" src="/logo.png" width={300} height={300} />
        </div>
      </div>
      <div className="flex flex-wrap p-6">
        <ButtonMain text="Play" icon="play.svg" />
        <ButtonMain text="Theory" icon="notes.svg" />
        <ButtonMain text="Piano" icon="piano.svg" />
        <ButtonMain text="Guitar" icon="guitar.svg" />
        <ButtonMain text="Listen" icon="play.svg" />
        <ButtonMain text="Videos" icon="youtube.svg" />
        <ButtonMain text="Book" icon="book.svg" />
        <ButtonMainIndigo text="Premium" icon="diamond.svg" />
      </div>
    </main>
  );
}
