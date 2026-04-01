import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PracticeExt from "./component/PracticeExt.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PracticeExt/>}/>
        <Route path="/About" />
        <Route path="/Contact"/>
      </Routes>
      <div>
        {/* <PracticeExt /> */}
      </div>
    </Router>
  );
}

export default App;
