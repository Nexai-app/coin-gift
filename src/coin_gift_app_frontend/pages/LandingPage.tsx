import React, { useEffect } from "react";
import { Box, Text, Image, Center, Flex, Button } from "@chakra-ui/react";
import { coin_gift_app_backend } from "../../declarations/coin_gift_app_backend/index";
// import { userInput } from "nexai-assistant";
// import { useInitTransformers, useEmbeddQ } from "../ml";
// import { nexai } from "../../declarations/nexai";


function LandingPage() {

  // const { init } = useInitTransformers()
  // const { call, embeddedQ } = useEmbeddQ()


  // const clickMe = async () => {
  //   await call("text");
  //   if (embeddedQ[0].length == 384) {
  //     nexai.VDBGetSimilar(1, embeddedQ[0], 1).then((d) => {
  //       console.log(d)
  //     }).catch((err) => {
  //       console.log(err);
  //     })

  //   }
  // }

  // useEffect(() => {
  //   const call = async () => {
  //     await init()
  //   }
  //   call()
  // }, [])
  return (
    <Box>
      <Flex>
        <Text color="white" fontSize={'100px'} pb={'50px'}>Coin Gift App</Text>
      </Flex>
      <Center>
        <Button>test integration</Button>
      </Center>
      {/* <Text fontSize={'10px'}>Coin Gift App</Text> */}
    </Box>
  );
}

export default LandingPage;
