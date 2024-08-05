import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/work";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
    </div>
  );
}

export default App;
