import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1>Click N Buy E-Commerce</h1>
      <Hero/>
    </main>
  );
}
