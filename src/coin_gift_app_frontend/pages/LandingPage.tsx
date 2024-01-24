import React from "react";
import { Box, Input, Text, Center, Flex, Button } from "@chakra-ui/react";
import { createActor } from "../../nexai";
import { host, random } from "../identity";
import { Principal } from "@dfinity/principal";

const localNexaiCanisterID = "ajuq4-ruaaa-aaaaa-qaaga-cai";

const companyPrincipal = Principal.fromText(
  "nf5de-egzhg-bkk24-zwux3-ekpii-lrwxe-f3qec-xize2-uzr2m-js5gy-tae"
);

const nexai = createActor(localNexaiCanisterID, {
  agentOptions: {
    host,
    identity: random,
  },
});

function LandingPage() {
  const [msg, setMsg] = React.useState("");
  const [value, setValue] = React.useState("");

  const handleSendMsg = () => {
    console.log("random", random);
    nexai
      .sendMessage(companyPrincipal, msg)
      .then((p) => {
        console.log(p);
        // setValue(b);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetMsg = () => {
    nexai
      .getMessages(companyPrincipal)
      .then((msg) => {
        console.log(msg);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Box color="white">
      <Flex>
        <Text color="white" fontSize={"100px"} pb={"50px"}>
          Coin Gift App
        </Text>
      </Flex>
      <Center>
        <Input
          color="white"
          placeholder="send your message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <Button onClick={handleSendMsg}>send Mesg</Button>
        <Button onClick={handleGetMsg}>Get Msgs</Button>
      </Center>
      <Box>
        <Text>Value:{value}</Text>
      </Box>
    </Box>
  );
}

export default LandingPage;
