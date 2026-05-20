// src/App.jsx

import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Contact from "./component/Contact";
import About from "./component/About";
import Skill from "./component/Skills"
import Project from "./component/Project"


import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen overflow-x-hidden">

      <Navbar />

      {/* Hero */}
      <section id="home" className="scroll-mt-32">
        <HeroSection/>
      </section>

      <section id="about" className="scroll-mt-32">
        <About/>
      </section>

      <section id="skills" className="scroll-mt-32">
        <Skill/>
      </section>

      <section id="projects" className="scroll-mt-32">
        <Project/>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-32">
        <Contact />
      </section>

    </div>
  );
}

export default App;