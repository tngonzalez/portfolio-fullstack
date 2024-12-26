import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>  
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
