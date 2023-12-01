import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Assistant } from "nexai-assistant";
import theme from "../theme";
// import { nexai } from "../../declarations/nexai";
import { actor } from "../identity";

// console.log(userInput)

import "@fontsource/public-sans/100.css";
import "@fontsource/public-sans/200.css";
import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <App />
        {/* <Assistant color="red" companyName="Gift Coin" companyId={1} actor={actor} /> */}
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
