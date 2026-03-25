import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Science from "@/components/Science";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <Hero />
      <main id="main-content">
        <About />
        <Science />
        <Packages />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
