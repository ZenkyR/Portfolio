import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <div className="relative bg-black text-white">
      <Navbar />

      <div id="home" className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-16">
        <Home />
      </div>

      <div id="about" className="scroll-mt-16">
        <AboutSection />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
