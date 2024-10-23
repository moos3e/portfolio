import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer.tsx';



function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;