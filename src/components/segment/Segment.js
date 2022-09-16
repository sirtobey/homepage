import { FaBeer } from "react-icons/fa";
import "./Segment.css";

export function Segment() {
  return (
    <ul className="segment">
      <li>
        <a href="https://beer.ch">
          <FaBeer className="icon" />
          <span>Beer</span>
        </a>
      </li>
      <li>
        <a href="https://beer.ch">
          <FaBeer className="icon" />
          <span>Beer</span>
        </a>
      </li>
    </ul>
  );
}
