import "./App.css";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import ParticlesEffect from "./component/Particles";

function App() {
  return (
    <>
      <div className="bg-slate-950 min-h-screen h-full">
        <NavBar />
        <Home />
      </div>

      <ParticlesEffect />
    </>
  );
}

export default App;
