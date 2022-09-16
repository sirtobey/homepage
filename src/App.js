import { FaBeer } from "react-icons/fa";
import "./App.css";
import { useClock } from "./hooks/useClock";

function App() {
  const [time] = useClock();
  return (
    <div className="content">
      <section id="header">
        <h2 id="header_date">{time}</h2>
        <h1 id="header_greet">Good Morning, Sarah</h1>
      </section>
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
