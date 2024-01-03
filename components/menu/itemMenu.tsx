import { Box, Heading, Center, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
export default function ItemMenu(props: any) {
  const price = [
    {
      src: "Price (0)",
    },
    {
      src: "Royalty",
    },
    {
      src: "Taken Fee",
    },
  ];
  return (
    <>
      <Box
        pos="fixed"
        w="18rem"
        h="calc(100vh - 80px)"
        padding={"1rem"}
        right="0px"
        zIndex={10}
      >
        <Box
          w="100%"
          h="100%"
          border="1px solid #ffffff10"
          rounded="1rem"
          bgColor="#120c18"
        >
          <Box borderBottom="1px solid #ffffff10" padding="1rem">
            <Box display="flex" padding={"10px"} alignItems="center">
              <Heading size="md">Cart (1)</Heading>
              <Heading size="xs" ml="10px" color="#e42575">
                clear
              </Heading>
              <Box ml="3.5rem" onClick={() => props.openClose()}>
                <Image src="/cancel-icon.svg" alt="" height={30} width={30} />
              </Box>
            </Box>
            <Box>
              <Button
                variant="first"
                w="calc(50% - 10px)"
                m="5px"
                fontSize={"16px"}
              >
                Buy
              </Button>
              <Button
                variant={"third"}
                w="calc(50% - 10px)"
                m="5px"
                fontSize={"16px"}
              >
                Sell
              </Button>
            </Box>
          </Box>
          <Box
            borderBottom="1px solid #ffffff10"
            h="4rem"
            display="flex"
            alignItems={"center"}
            padding="1rem"
          >
            Sweep mode
            <Box
              w="2.4rem"
              h="1.3rem"
              rounded={"1rem"}
              ml="7rem"
              bgColor="#24182f"
              padding="2px"
            >
              <Box w="1rem" h="1rem" rounded="100%" bgColor={"#fff"}></Box>
            </Box>
          </Box>
          <Center borderBottom="1px solid #ffffff10" h="3rem">
            (Cart is empty)
          </Center>
          <Box padding="1rem">
            <Box borderBottom="1px solid #ffffff10">
              {price.map((item, key) => (
                <Box display={"flex"} alignItems="center" h="2rem">
                  <Box w="60%">
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
                    <Heading fontSize={".9rem"}>0</Heading>
                  </Box>
                </Box>
              ))}{" "}
            </Box>
            <Box display={"flex"} alignItems="center" h="2rem">
              <Box w="60%">
                <Heading fontSize={".9rem"} opacity=".6">
                  Points earned
                </Heading>
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
            <Box display={"flex"} alignItems="center" h="2rem">
              <Box w="60%">
                <Heading fontSize={".9rem"} opacity=".6">
                  You pay
                </Heading>
              </Box>
              <Box
                w="40%"
                display="flex"
                justifyContent={"flex-end"}
                alignItems="center"
              >
                <Box>
                  <Image src="/solana-logo.svg" alt="" width={13} height={13} />
                </Box>
                <Heading fontSize={".9rem"}>0</Heading>
              </Box>
            </Box>
            <Button variant={"first"} w="100%" mt="1rem">
              Buy now
            </Button>
            <Heading fontSize={"8px"} mt="1rem" opacity=".6">
              By clicking "Buy now", you agree to the Magic Eden
              <br /> Terms of Service
              <br />
              Each transaction will incur non-refundable gas fees.
            </Heading>
          </Box>
        </Box>
      </Box>
    </>
  );
}
