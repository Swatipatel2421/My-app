import React, { useReducer, state, action } from "react";

const initialState = 0;
const reducer = () => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0;
        default:
            throw new Error("Unexpected action");
    }
};

const App = () => {
    // Initialising useReducer hook
    const [count, dispatch] = useReducer(reducer, initialState);



return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>
        add
      </button>
      <button onClick={() => dispatch("subtract")}>
        subtract
      </button>
      <button onClick={() => dispatch("reset")}>
        reset
      </button>
      
      <ul>
                <li>
            educers are simple, predictable (pure) functions that take a previous state object and an action object and return a new state object.
            </li>
            <li>
            useReducer can be used in many of the same ways that useState can, but is more helpful for managing state across multiple components that may involve different operations or "actions".
            </li>
            </ul>
    </div>
  );
};
export default App;