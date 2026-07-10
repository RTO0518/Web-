import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Advantages from "./components/Advantages";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Projects />
      <Advantages />
      <Contact />
    </div>
  );
}
