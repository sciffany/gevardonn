"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/characters");
  };

  return (
    <main className='bg-white flex min-h-screen items-center justify-center p-24 h-full'>
      <center>
        <div className='text-black flex flex-col items-center justify-center h-full'>
          <h1 className='text-4xl'>
            Explore the world of <b>Gevardonn</b>
          </h1>
          <button
            className='bg-black text-white p-2 rounded-md mt-4'
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </center>
    </main>
  );
}
