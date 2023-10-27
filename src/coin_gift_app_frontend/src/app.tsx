import React, { useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Assistant, InputFnc, userInput } from "nexai-assistant";
import { nexai } from "../../declarations/nexai";
import { useEmbeddQ, useInitTransformers } from "../ml";
import { EventEmitter } from "events";

const App = () => {
  const { init } = useInitTransformers();
  const { call, embeddedQ } = useEmbeddQ();

  useEffect(() => {
    const c_ = async () => {
      await init();
    };
    c_();
    setTimeout(() => {
      req();
    }, 5000);
  }, []);

  class MyEventEmitter extends EventEmitter {}

  const emitter = new MyEventEmitter();

  function listenForDynamicEvent(eventName) {
    emitter.on(eventName, () => {
      console.log(`Event received for ${eventName}: ${eventName}`);
    });
  }

  function receiveValueAsEvent(value) {
    // Emit the event after setting up the listener
    emitter.emit(`event_${value}`, value);
    // Listen for events with the same dynamic names first
    listenForDynamicEvent(`event_${value}`);
    return;
  }

  // Simulate receiving values at different times
  useEffect(() => {
    // Listen for events whenever userInput changes
    listenForDynamicEvent(`event_${userInput}`);
  }, [userInput]);

  const req = async () => {
    setTimeout(() => {
      receiveValueAsEvent(userInput);
    }, 4000);
    // const input: string = receiveValueAsEvent(userInput).toString()
    // await call("du");
    // setUsed(true)
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Assistant
        color="red"
        companyName="Gift Coin"
        companyId={0}
        actor={nexai}
        embeddedQ={embeddedQ}
      />
    </React.Fragment>
  );
};

export default App;
