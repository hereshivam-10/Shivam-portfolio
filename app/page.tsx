import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Showreel from "@/components/Showreel";
import Tools from "@/components/Tools";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Showreel />
        <Work />
        <Services />
        <Process />
        <Tools />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
