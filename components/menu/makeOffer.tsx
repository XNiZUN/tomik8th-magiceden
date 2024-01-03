import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Makeoffer(props: any) {
  const [now, setNow] = React.useState(false);
  const router = useRouter();
  const price = [
    {
      src: "HIGHEST OFFER",
    },
    {
      src: "FLOOR",
    },
    {
      src: "ROYALTYTIES",
    },
  ];
  return (
    <>
      <Box pos="fixed" top="0px" zIndex={"400"}>
        <Center w="100vw" h="100vh" bgColor={"#00000070"}>
          <Box
            w="45rem"
            h="20rem"
            bgColor={"#120c18"}
            border="1px solid #ffffff30"
            rounded={"1rem"}
            padding="1rem"
          >
            <Box ml="98%" mt="-.5rem" onClick={() => props.openClose2()}>
              X
            </Box>
            <Heading size="md">Connect a wallet to continue</Heading>
            <Heading fontSize={".9rem"} opacity=".6" mt="1rem">
              Choose how you want to connect. If you don't have a wallet, you
              can select a provider and create one.
            </Heading>
            <Box display="flex" alignItems={"flex-end"}>
              <Box
                w="20rem"
                h="10rem"
                border={"1px solid #ffffff30"}
                rounded="10px"
                display={"flex"}
                alignItems="center"
                pl="2rem"
                mt="2rem"
              >
                <Box rounded={"100%"} overflow="hidden">
                  <Image
                    src="/resources/animate-logo.gif"
                    alt=""
                    height={70}
                    width={70}
                  />
                </Box>
                <Box h="10rem" w="12rem" ml="1rem" padding=".5rem">
                  <Heading size="md" mb=".5rem">
                    Magic ticket
                  </Heading>
                  {price.map((item, key) => (
                    <Box display={"flex"} alignItems="center" h="1.7rem">
                      <Box w="80%">
                        <Heading fontSize={".9rem"} opacity=".6">
                          {price[key].src}
                        </Heading>
                      </Box>
                      <Box
                        w="40%"
                        display="flex"
                        justifyContent={"flex-end"}
                        alignItems="center"
                      >
                        <Box>
                          <Image
                            src="/solana-logo.svg"
                            alt=""
                            width={13}
                            height={13}
                          />
                        </Box>
                        <Heading fontSize={".9rem"}>1.96</Heading>
                      </Box>
                    </Box>
                  ))}{" "}
                  <Box display={"flex"} alignItems="center" h="1.7rem">
                    <Box w="80%">
                      <Heading fontSize={".9rem"}>Points You'll Earn</Heading>
                    </Box>
                    <Box
                      w="40%"
                      display="flex"
                      justifyContent={"flex-end"}
                      alignItems="center"
                    >
                      <Heading fontSize={".9rem"} color="#088900">
                        0
                      </Heading>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Button variant="third" w="10rem" ml="1rem">
                1.98
              </Button>
              <Button variant={"first"} w="10rem" ml="1rem">
                Make offer
              </Button>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
}
