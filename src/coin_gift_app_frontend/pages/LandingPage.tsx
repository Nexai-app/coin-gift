import React from "react";
import { Box, Text, Center, Flex, Button } from "@chakra-ui/react";

function LandingPage() {
  return (
    <Box>
      <Flex>
        <Text color="white" fontSize={"100px"} pb={"50px"}>
          Coin Gift App
        </Text>
      </Flex>
      <Center>
        <Button>test integration</Button>
      </Center>
      {/* <Text fontSize={'10px'}>Coin Gift App</Text> */}
    </Box>
  );
}

export default LandingPage;
