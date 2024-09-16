import Image from "next/image";
import HomeButton from "./HomeButton";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 p-2 pl-6 flex flex-row items-center z-20 bg-white bg-opacity-30 backdrop-blur-sm h-16">
      <button className="mr-4 p-1 rounded-md hover:bg-indigo-300 transition duration-500">
        <Image alt="menu" src="/menu.svg" width={30} height={30} />
      </button>
      <HomeButton />
      <button className="ml-auto mr-6 rounded-full bg-indigo-500 hover:bg-indigo-600 transition duration-500 ease-in-out text-white p-2 pl-3 pr-3 shadow-md">
        sh
      </button>
    </header>
  );
}
