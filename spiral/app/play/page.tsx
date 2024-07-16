import ChordPlayer from "@/components/ChordPlayer";
import Header from "@/components/Header";
import Piano from "@/components/Piano";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-16">
        <Piano />
      </div>
      <div>
        <ChordPlayer />
      </div>
    </>
  );
}
