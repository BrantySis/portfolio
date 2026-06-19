import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CoreStrengths from "./components/CoreStrengths";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app min-h-screen w-full bg-zinc-950 dark:bg-slate-50 transition-colors duration-300 ease-in-out">
      <Nav />
      <main>
        <Hero />
        <CoreStrengths />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
