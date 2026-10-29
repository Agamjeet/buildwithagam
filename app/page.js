import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <Hero />
      <div className="bg-white py-20">
        <About />
      </div>
      <Skills />
      <Services />
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Projects />
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
