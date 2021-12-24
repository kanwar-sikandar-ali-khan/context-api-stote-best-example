import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import StateContext from "./contextStore/stateContext";
import DispatchContext from "./contextStore/dispatchContext";
import switchReducer from "./contextStore/switchReducer";
import RouterComp from "./config/router";

function App() {
  const initialState = {
    number: 56,
  };
  const [state, dispatch] = useReducer(switchReducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <StateContext.Provider value={state}>
          <DispatchContext.Provider value={dispatch}>
            app.js
            {state.number}
            <button
              onClick={() =>
                dispatch({ type: "changeNumber", numberInc: state.number + 1 })
              }
            >
              increment by app.js
            </button>
            <RouterComp />
          </DispatchContext.Provider>
        </StateContext.Provider>
      </header>
    </div>
  );
}

export default App;
