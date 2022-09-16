import { FaBeer } from "react-icons/fa";
import "./App.css";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="content">
      <Header />
      <main className="columns">
        <div className="column">
          <ul>
            <li>
              <a href="https://beer.ch">
                <FaBeer /> Beer
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>
              <a href="https://beer.ch">
                <FaBeer /> Beer
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
