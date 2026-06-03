import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import profile from "./assets/profile.jpg";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <header className="hero">
        <img
          src={profile}
          alt="Profile"
          className="profile-img"
        />

        <h1>Akbar Ali</h1>

        <p>Frontend Developer | React Learner</p>

        <a href="#contact" className="hero-btn">
          Contact Me
        </a>
      </header>

      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />

      <Footer />
    </>
  );
}

export default App;