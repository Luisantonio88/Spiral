"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export type ButtonProps = {
  text: string;
  icon: string;
  href: string;
};

export default function ButtonMain({ text, icon, href }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className={`min-w-80 rounded-lg p-6 text-3xl bg-slate-50 hover:bg-indigo-100 active:bg-white active:translate-y-2 transition duration-500 ease-in-out text-slate-400 hover:text-indigo-500 m-3 shadow-md shadow-indigo-200 flex flex-col items-center justify-center hover:translate-y-1 hover:shadow-sm active:shadow-none`}
    >
      {text}

      <Image
        alt={text.toLowerCase()}
        src={`/${icon}`}
        width={80}
        height={80}
        className="mt-5"
      />
    </button>
  );
}
