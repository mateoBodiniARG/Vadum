import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
export default function Home() {
  return (
    <>
      <div class=" absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <Navbar />
      <Hero />
      
    </>
  );
}