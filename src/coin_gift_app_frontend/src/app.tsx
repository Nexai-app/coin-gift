import React, { useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { InputFnc } from "nexai-assistant"

const App = () => {

  useEffect(() => {
    setInterval(() => {
      console.log(InputFnc())
    }, 1000)

  })
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
