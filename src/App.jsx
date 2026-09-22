import './App.css';

import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
    return (
        <main>
            <Hero />
            <Navbar />
            <Experience />
            <Projects />
            <Skills />  
            <Contact />
        </main>
    );
}

export default App;