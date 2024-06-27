import Navigation from "@/components/Navigation";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProgresBar from "./anim/ProgresBar";

function App() {
  return (
    <>
      <ProgresBar />
      <Navigation />
      <Home />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
