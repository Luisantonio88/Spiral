import ButtonMain from "@/components/ButtonMain";
import ButtonMainIndigo from "@/components/ButtonMainIndigo";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="  ml-16 flex flex-row cursor-default">
        <div className="mt-24">
          <h1 className="font-bold text-6xl text-gradient mt-16 tracking-tight hover:translate-x-4 hover:scale-105 hover:tracking-normal transition-all duration-1000 ease-in p-2 pl-0">
            Spiral Harmony
          </h1>
          <h2 className="mt-3 text-3xl text-slate-400 font-extrabold">
            Next generation Music Creation & Education
          </h2>
          <h3 className="mt-2 text-xl  tracking-wide italic">
            Are you ready to dive into the magical world of music and sound?
          </h3>
        </div>
        <div className="mt-4 ml-auto mr-48 scale-110">
          <Image alt="logo" src="/logo.png" width={360} height={360} />
        </div>
      </div>
      <div className="flex flex-wrap pl-6">
        <ButtonMain text="Play" icon="listen.svg" href="/play" />
        <ButtonMain text="Theory" icon="tv.svg" href="/play" />
        <ButtonMain text="Piano" icon="piano.svg" href="/play" />
        <ButtonMain text="Guitar" icon="guitar-pick.svg" href="/play" />
        <ButtonMain text="Listen" icon="headphones.svg" href="/play" />
        <ButtonMain text="Videos" icon="youtube.svg" href="/play" />
        <ButtonMain text="Book" icon="book.svg" href="/play" />
        <ButtonMainIndigo text="Premium" icon="diamond.svg" />
      </div>
    </main>
  );
}
