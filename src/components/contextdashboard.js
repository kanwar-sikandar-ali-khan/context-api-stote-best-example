import React, { useContext, useEffect, useState } from "react";
import StateContext from "../contextStore/stateContext";
import DispatchContext from "../contextStore/dispatchContext";

const Dashboard = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  return (
    <div>
      dashboard
      {appState.number}
      <button
        onClick={() =>
          appDispatch({ type: "changeNumber", numberInc: appState.number + 2 })
        }
      >
        increment by Dahboard
      </button>
      <h2>point to remember</h2>
      <ul>
        <li>state context file</li>
        <li>dispatch context file</li>
        <li>switch reducer file</li>
        <li>initial state</li>
      </ul>
      <ul>
        <li>hooks createcontext</li>
        <li>hooks usecontext</li>
        <li>hooks usereducer</li>
      </ul>
      <ul>
        <li>rap all the things in providers</li>
      </ul>
      <ul>
        <li>sans lene k liye value me state and dispatch pass</li>
      </ul>
    </div>
  );
};

export default Dashboard;
