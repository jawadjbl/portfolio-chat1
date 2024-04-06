import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Technologies from "@/components/technologies/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}
