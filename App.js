import "./styles.css";
import { useReducer } from "react";
import { data } from "./mockData";

const inititalState = {
  searchText: "",
  matchingResults: [],
  error: ""
};
const searchReducer = (state, action) => {
  // switch(action.type) {
  //   case 'updateResults'
  //   state.matchingResults = action.payload;
  //   break;
  // }
  const { type, payload } = action;
  switch (type) {
    case "updateResults":
      return { ...state, matchingResults: [...payload] };
    case "error":
      return { ...state, error: payload, matchingResults: [] };
    default:
      return state;
  }
};

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
export default function App() {
  const [state, dispatch] = useReducer(searchReducer, inititalState);

  const filterData = (searchText) => {
    const matchingEntries = data.filter(({ API, Description }) => {
      // const api = API.replace(/ /g, "").toLowerCase();
      // const description = Description.replace(/ /g, "").toLowerCase();
      // const search = searchText.replace(/ /g, "").toLowerCase();
      const api = API.toLowerCase();
      const description = Description.toLowerCase();
      const search = searchText.toLowerCase();
      return api.includes(search) || description.includes(search);
    });
    return new Promise((res, rej) => {
      matchingEntries.length > 0
        ? res(matchingEntries)
        : rej("No Matching Entrys");
    });
  };
  const filterMatchingEntries = async (searchText) => {
    // const matchingEntries = data.filter(({ API, Description }) => {
    //   // const api = API.replace(/ /g, "").toLowerCase();
    //   // const description = Description.replace(/ /g, "").toLowerCase();
    //   // const search = searchText.replace(/ /g, "").toLowerCase();
    //   const api = API.toLowerCase();
    //   const description = Description.toLowerCase();
    //   const search = searchText.toLowerCase();
    //   return api.includes(search) || description.includes(search);
    // });
    try {
      const data = await filterData(searchText);
      dispatch({ type: "updateResults", payload: [...data] });
    } catch (e) {
      dispatch({ type: "error", payload: e });
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => filterMatchingEntries(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {state.matchingResults.map(({ API }, index) => (
          <div
            style={{ padding: "14px", borderBottom: "1px solid black" }}
            key={index}
          >
            {API}
          </div>
        ))}
      </div>

      {/* <ul>
        {state.matchingResults.map(({ API }, index) => (
          <li key={index}>{API}</li>
        ))}
      </ul> */}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {/* <button onClick={debounce(() => console.log("Clicked Me"), 5000)}>
        {" "}
        Button
      </button> */}
    </div>
  );
}
