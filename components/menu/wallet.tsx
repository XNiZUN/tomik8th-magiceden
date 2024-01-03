import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export default function ConnectWallet(props: any) {
  const [active, setActive] = React.useState(0);
  return (
    <>
      <Box
        pos="fixed"
        top="0px"
        zIndex={props.wallet ? 100 : -100}
        pointerEvents={props.wallet ? "auto" : "none"}
      >
        <Center w="100vw" h="100vh" bgColor={"#00000070"}>
          <Box
            w="25rem"
            h="25rem"
            bgColor={"#120c18"}
            border="1px solid #ffffff30"
            rounded={"1rem"}
            padding="1rem"
          >
            <Box
              ml="98%"
              mt="-.5rem"
              pointerEvents={"auto"}
              onClick={() => props.openClose()}
            >
              X
            </Box>
            <Heading size="md">Connect a wallet to continue</Heading>
            <Heading fontSize={".9rem"} opacity=".6" mt="1rem">
              Choose how you want to connect. If you don't have a wallet, you
              can select a provider and create one.
            </Heading>
            <Box
              display={"flex"}
              w="100%"
              borderBottom="1px solid #ffffff30"
              mt="3rem"
            >
              <Center
                fontSize={".9rem"}
                m="10px"
                color={active === 0 ? "#e42575" : "white"}
                textDecor={active === 0 ? "underline" : "none"}
                onClick={() => setActive(0)}
              >
                <Image src="/solana-logo.svg" alt="" height={20} width={20} />
                <Box ml="5px" mr="">
                  Solana
                </Box>
              </Center>
              <Center
                color={active === 1 ? "#e42575" : "white"}
                textDecor={active === 1 ? "underline" : "none"}
                onClick={() => setActive(1)}
              >
                <Image src="/etherium.svg" alt="" height={20} width={20} />
                <Box ml="5px">Etherium</Box>
              </Center>
            </Box>
            <Box
              w="100%"
              h={active === 1 ? 0 : "5rem"}
              border={active === 1 ? 0 : "1px solid #e42575"}
              rounded="10px"
              mt={active === 1 ? 0 : "3rem"}
              display={"flex"}
              alignItems="center"
              pl="1rem"
              opacity={active === 0 ? 1 : 0}
              overflow="hidden"
            >
              <Image src="/phantom.svg" alt="" height={40} width={40} />
              <Heading size="md" ml="10px">
                Phantom
              </Heading>
              <Box
                w="1.5rem"
                h="1.5rem"
                rounded={"100%"}
                ml="11rem"
                border={"1px solid #ffffff30"}
              ></Box>
            </Box>
            <Box
              w="100%"
              h="5rem"
              border={"1px solid #e42575"}
              rounded="10px"
              mt="3rem"
              display={"flex"}
              alignItems="center"
              pl="1rem"
              opacity={active === 1 ? 1 : 0}
            >
              <Image src="/metamask.webp" alt="" height={40} width={40} />
              <Heading size="md" ml="10px">
                MetaMask
              </Heading>
              <Box
                w="1.5rem"
                h="1.5rem"
                rounded={"100%"}
                ml="11rem"
                border={"1px solid #ffffff30"}
              ></Box>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
}
