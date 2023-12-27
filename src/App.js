import "./App.css";
import NavBar from "./components/navBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/welcome/Welcome";
import MySkylls from "./components/mySkills/MySkylls";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Welcome />
      <MySkylls />
      <About />
    </div>
  );
}

export default App;
