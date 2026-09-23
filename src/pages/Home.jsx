import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import CloudWork from "../sections/CloudWork";
import SelectedWork from "../sections/SelectedWork";
import CreativeWork from "../sections/CreativeWork";
import Results from "../sections/Results";
import Certifications from "../sections/Certifications";
import GitHubSection from "../sections/GitHubSection";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CloudWork />
      <SelectedWork />
      <CreativeWork />
      <Results />
      <Certifications />
      <GitHubSection />
      <Resume />
      <Contact />
    </>
  );
}
