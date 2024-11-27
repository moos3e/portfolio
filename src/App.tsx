import './styles/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer.tsx';
import CursorParticles from './components/CursorParticles';




function App() {

  return (
    <div>
      <CursorParticles />
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