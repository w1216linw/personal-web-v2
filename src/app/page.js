"use client";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import { useRef } from "react";

export default function Page() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollTo = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 32 });
  };

  return (
    <main className="max-w-[1440px] mx-auto">
      <Header scrollTo={scrollTo} refs={{ homeRef, aboutRef, projectsRef }} />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Footer />
    </main>
  );
}
