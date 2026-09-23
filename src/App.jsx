import './App.css';

import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app-layout">
      <main className="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Navbar />
    </div>
  );
}

export default App;