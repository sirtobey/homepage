import { useReducer } from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./App.css";
import { Header } from "./components/header/Header";
import { Segment } from "./components/segment/Segment";

const initialState = {
  segments: [{ title: "Title" }, { title: "Title2" }],
};

const reducer = function (state, action) {
  switch (action.type) {
    case "addSegment":
      return { segments: [...state.segments, action.segment] };
    default:
      throw new Error("Oppps no action found");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="content">
      <Header />
      <main className="columns">
        {state.segments.map((segment) => (
          <Segment key={segment.title} />
        ))}
        <button
          onClick={() =>
            dispatch({ type: "addSegment", segment: { title: "new title" } })
          }
        >
          <FaPlusCircle />
        </button>
      </main>
    </div>
  );
}

export default App;
