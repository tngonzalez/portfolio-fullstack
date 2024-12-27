import "./App.css";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>  
      <div className="main-content">
      <Home />
      <About />
      <Projects />
      <Contact />
      </div>
    </>
  );
}

export default App;
