import React, { useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Assistant } from "nexai-assistant";
import { actor } from "../identity";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Assistant
        actor={actor}
        color="red"
        companyName="DeIOT"
        companyId={2}
        // actor={actor}
      />
    </React.Fragment>
  );
};

export default App;
