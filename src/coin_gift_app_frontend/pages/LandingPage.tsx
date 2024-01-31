import React from "react";
import { Box, Input, Text, Center, Flex, Button } from "@chakra-ui/react";
import { createActor } from "../../../index";
import { host, random } from "../identity";
import { Principal } from "@dfinity/principal";

const localNexaiCanisterID = "br5f7-7uaaa-aaaaa-qaaca-cai";

// const companyPrincipal = Principal.fromText(
//   "tab3b-bvjbl-tq3ko-3kjwu-eiwyv-3lnbr-7hzvj-u7otp-leiuf-6ijcd-5ae"
// );
const companyPrincipal =
  "tab3b-bvjbl-tq3ko-3kjwu-eiwyv-3lnbr-7hzvj-u7otp-leiuf-6ijcd-5ae";
const vdb = createActor(localNexaiCanisterID, {
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
    vdb
      .send_message(companyPrincipal, msg, 25)
      .then((p) => {
        console.log(p);
        // setValue(b);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetMsg = () => {
    vdb
      .get_messages(companyPrincipal)
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
