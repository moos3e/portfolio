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
    <div className="app-container min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-gray-300 to-black relative overflow-x-hidden">
      <CursorParticles />
      <Navbar />
      <main className="w-full flex flex-col items-center flex-1">
        <section id="header" className="w-full flex justify-center items-start">
          <Header />
        </section>
        <section id="experience" className="w-full flex justify-center items-start">
          <Experience />
        </section>
        <section id="projects" className="w-full flex justify-center items-start">
          <Projects />
        </section>
        <section id="education" className="w-full flex justify-center items-start">
          <Education />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;