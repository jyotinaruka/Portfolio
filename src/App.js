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
      <main>
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
