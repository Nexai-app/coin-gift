import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { coin_gift_app_backend } from "../../declarations/coin_gift_app_backend/index";

function LandingPage() {
  return (
    <Box>
      <Text>Coin Gift App</Text>
      <Image src={`coin-1.jpg`} />
    </Box>
  );
}

export default LandingPage;
