import ButtonMain from "@/components/ButtonMain";
import ButtonMainIndigo from "@/components/ButtonMainIndigo";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="  ml-16 flex flex-row cursor-default">
        <div className="mt-32">
          <h1 className="font-bold text-6xl text-gradient mt-16 tracking-tight hover:translate-x-4 hover:scale-105 hover:tracking-normal transition-all duration-1000 ease-in p-2 pl-0">
            Spiral Harmony
          </h1>
          <h2 className="mt-3 text-3xl text-slate-500 ">
            Next generation Music Creation & Education
          </h2>
        </div>
        <div className="mt-10 ml-auto mr-auto">
          <Image alt="logo" src="/logo.png" width={360} height={360} />
        </div>
      </div>
      <div className="flex flex-wrap pl-6">
        <ButtonMain text="Play" icon="listen.svg" href="/play" />
        <ButtonMain text="Theory" icon="tv.svg" href="/theory" />
        <ButtonMain text="Piano" icon="piano.svg" href="/" />
        <ButtonMain text="Guitar" icon="guitar-pick.svg" href="/" />
        <ButtonMain text="Listen" icon="headphones.svg" href="/" />
        <ButtonMain text="Videos" icon="youtube.svg" href="/" />
        <ButtonMain text="Book" icon="book.svg" href="/" />
        <ButtonMainIndigo text="Premium" icon="diamond.svg" />
      </div>
    </main>
  );
}
