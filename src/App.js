import './App.css';
import './Portfolio.css';
import "react-router";
import Intro from "./components/Intro.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import Navbar from "./components/Navbar.js"
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
