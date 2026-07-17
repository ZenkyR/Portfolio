import Background from "@/app/components/layout/Background";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Career from "@/app/components/sections/Career";
import Stack from "@/app/components/sections/Stack";
import Projects from "@/app/components/sections/Projects";
import Contact from "@/app/components/sections/Contact";

const Page = () => (
  <>
    <Background />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Career />
      <Stack />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Page;
