import React, { useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import { Routes, Route, useNavigate } from "react-router-dom";
// import { Assistant } from "nexai-assistant"
import { actor } from "../identity"
// import { useEmbeddQ, useInitTransformers } from "../ml";


const App = () => {
  // const { init } = useInitTransformers()
  // const { call, embeddedQ } = useEmbeddQ()

  // const inputAvaialble = async () => {
  //   //embedd input
  //   await call(InputFnc().toString())
  // }


  // useEffect(() => {
  //   const c_ = async () => {
  //     await init()
  //   }
  //   c_();
  //   setTimeout(() => {
  //     req()
  //   }, 5000)

  // }, [])

  // function logUserInput() {

  //   console.log(InputFnc());
  //   inputAvaialble()
  // }

  // let previousUserInput = InputFnc();

  // setInterval(() => {
  //   const currentUserInput = InputFnc();
  //   if (currentUserInput !== previousUserInput) {
  //     logUserInput();
  //     previousUserInput = currentUserInput;
  //   }
  // }, 1500);


  // const req = async () => {
  //   setTimeout(() => {
  //   }, 4000);
  //   // const input: string = receiveValueAsEvent(userInput).toString()
  //   // await call("du");
  //   // setUsed(true)
  // };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <Assistant color="red" companyName="Gift Coin" companyId={0} /> */}
    </React.Fragment>
  );
};

export default App;
