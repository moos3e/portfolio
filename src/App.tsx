import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import CursorParticles from './components/CursorParticles';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <CursorParticles />
      <Navbar />
      <main>
        <section id="header">
          <Header />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;