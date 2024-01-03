import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import Drawer from "@/components/menu/drawer";
import { NameArray } from "@/components/informations/name";
import { Sol } from "@/components/informations/sol";
export default function Auctions() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const array = new Array(22).fill(null);

  return (
    <>
      <Drawer></Drawer>
      <Box
        w="calc(100vw - 80px)"
        padding={"1rem"}
        ml="80px"
        mt="80px"
        pos="relative"
      >
        <Box
          w="100%"
          h="87vh"
          rounded={"1rem"}
          border="1px solid #ffffff10"
          padding={"1rem"}
          display="flex"
          alignItems={"center"}
        >
          <Box w="40%" padding={"1rem"}>
            <Heading variant="h1">The Sol Army GV Pass 2.0 #49</Heading>
            <Heading variant="h4" opacity=".6" mt="1rem">
              CREATED BY The Sol Army
            </Heading>
            <Heading variant="h5" opacity={0.6} textAlign="justify" mt="1rem">
              A community-driven company with the objective to educate, innovate
              and pursue growth within Web3. Holding a GV Pass grants exclusive
              benefits. Winner gets a free GEN0 PFP. These 2.0 Passes have been
              upgraded already and include all new benefits! Check...
            </Heading>
            <Box
              display={"flex"}
              h="8rem"
              rounded={"10px"}
              bgColor="#24182F"
              mt="1rem"
            >
              <Box w="50%" padding={"1rem"}>
                <Heading variant={"h6"} h="1.5rem">
                  FINAL BID
                </Heading>
                <Heading size={"xl"} h="3rem">
                  39.00 SOL
                </Heading>
                <Heading variant={"h6"}>~$910.26</Heading>
              </Box>
              <Box w="50%" padding={"1rem"}>
                <Heading variant={"h6"} h="1.5rem">
                  AUCTION ENDED
                </Heading>
                <Box display={"flex"}>
                  <Box w="3.5rem">
                    <Heading size={"xl"} h="3rem">
                      --
                    </Heading>
                    <Heading fontSize={".7rem"}>HOURS</Heading>
                  </Box>
                  <Box w="4rem">
                    <Heading size={"xl"} h="3rem">
                      --
                    </Heading>
                    <Heading fontSize={".7rem"}>MINUTES</Heading>
                  </Box>
                  <Box w="4rem">
                    <Heading size={"xl"} h="3rem">
                      --
                    </Heading>
                    <Heading fontSize={".7rem"}>SECONDS</Heading>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Center h="3rem" opacity={0.7}>
              <Box w="50%">LAST BID BY DYRq...knmv</Box>
              <Heading
                w="50%"
                variant={"h6"}
                display="flex"
                justifyContent="flex-end"
              >
                05/02/2023, 03:23
              </Heading>
            </Center>
            <Button variant={"first"} w="100%">
              Place Your Bid
            </Button>
          </Box>
          <Box rounded={"1rem"} bgColor="red" overflow={"hidden"} ml="2rem">
            <Image src="/auctions/first.png" alt="" width={700} height={700} />
          </Box>
        </Box>
        <Heading variant={"h2"} h="3rem" mt="3rem">
          Finished Auctions
        </Heading>{" "}
        <Box w="100%" display="grid" gridTemplateColumns={"25% 25% 25% 25%"}>
          {array.map((item, key) => (
            <Box
              key={key}
              w="20rem"
              h="25rem"
              border="1px solid #ffffff10"
              mt="10px"
              rounded={"1rem"}
              _hover={{
                transform: "translateY(-6px)",
                transition: "all .5s",
                opacity: ".8",
              }}
            >
              <Box rounded={"1rem"} overflow="hidden" h="260px">
                <Image
                  src="/auctions/3rd.jpeg"
                  alt=""
                  width={320}
                  height={260}
                />
              </Box>
              <Center h="2rem">
                <Heading size="sm">{NameArray[key].src}</Heading>
              </Center>
              <Center h="1.7rem">
                <Heading variant={"h5"} color="#E42575">
                  The Sol Army
                </Heading>
              </Center>
              <Box padding={"10px"}>
                <Box
                  h="3.5rem"
                  rounded={"5px"}
                  bgColor="#24182F"
                  padding={"10px"}
                >
                  <Heading
                    variant={"h6"}
                    h="1.2rem"
                    display={"flex"}
                    opacity=".7"
                  >
                    <Box w="50%"> FINAL BID</Box>{" "}
                    <Box w="50%" display={"flex"} justifyContent="flex-end">
                      AUCTIONS ENDED
                    </Box>
                  </Heading>
                  <Heading size={"sm"} h="1.3rem" display={"flex"}>
                    <Box w="50%" display="flex">
                      <Image
                        src={"/solana-logo.svg"}
                        alt=""
                        height={15}
                        width={15}
                      />
                      <Box w="5px"></Box>
                      {Sol[key].src} SOL
                    </Box>
                    <Box w="50%" display={"flex"} justifyContent="flex-end">
                      ENDED
                    </Box>
                  </Heading>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
