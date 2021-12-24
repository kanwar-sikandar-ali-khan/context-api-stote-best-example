import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextDashboard from "../components/contextdashboard";
const RouterComp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ContextDashboard />} />
          <Route component={<h1>not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouterComp;
