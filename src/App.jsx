import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Advantages from "./components/Advantages";
import Contact from "./components/Contact";
import "./App.css";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}% ${pos.y}%, rgba(139,92,246,0.15) 0%, rgba(96,165,250,0.08) 25%, rgba(59,130,246,0.04) 50%, transparent 70%)`,
      }}
    />
  );
}

function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <CursorGlow />
      <ScrollReveal />
      <Hero />
      <About />
      <Projects />
      <Advantages />
      <Contact />
    </div>
  );
}