import Navbar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ marginTop: "80px" }}>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
