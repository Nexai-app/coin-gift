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
        color="purple"
        companyName="Coin Gift"
        companyId={1}
        companyPrincipal={
          "micnk-5m7ve-c7skm-wcit4-2zze3-5isui-depzn-jnok5-aya2i-wfwg4-eqe"
        }
      />
    </React.Fragment>
  );
};

export default App;
