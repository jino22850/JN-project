import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
