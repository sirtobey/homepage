import { FaBeer } from "react-icons/fa";
import "./App.css";
import { Header } from "./components/header/Header";
import { Segment } from "./components/segment/Segment";

function App() {
  return (
    <div className="content">
      <Header />
      <main className="columns">
        <Segment />
        <Segment />
      </main>
    </div>
  );
}

export default App;
