import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Research from "./components/Research";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <AnimatedBackground />
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Research />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}