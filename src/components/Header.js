import { useClock } from "../hooks/useClock";
import "./Header.css";

export function Header() {
  const [time, date] = useClock();

  return (
    <header>
      <div className="header">
        <div className="greeting-column">
          <span>{date}</span>
          <h1>Good morning, Imani</h1>
        </div>
        <span className="time">{time}</span>
      </div>
      <hr className="hr" />
    </header>
  );
}
