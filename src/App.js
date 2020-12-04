import './App.css';
import './Portfolio.css';
import "react-router";
import Intro from "./components/Intro.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import Navbar from "./components/Navbar.js"

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
