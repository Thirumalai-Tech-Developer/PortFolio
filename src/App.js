import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/Body/About';
import Projects from './Components/Body/Projects';
import Contact from './Components/Body/Contact';

function App() {
  return (
    <div className="App scroll-smooth bg-gray-950 text-white">
      <Header />

      <section id="about" className="pt-24 scroll-mt-24 scroll-smooth">
        <About />
      </section>

      <section id="projects" className="pt-24 scroll-mt-24 scroll-smooth">
        <Projects />
      </section>

      <section id="contact" className="pt-24 scroll-mt-24 scroll-smooth">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
