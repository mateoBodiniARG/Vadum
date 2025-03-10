import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Map } from "./Components/Map";
import { Franquicia_Experiencia } from "./Components/Franquicia_Experiencia";
import { Footer } from "./Components/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <section className="w-full">
        <Navbar />
        <Hero />
      </section>
      <section className="w-full">
        <Map />
      </section>
      <section className="w-full flex-grow">
        <Franquicia_Experiencia />
      </section>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
