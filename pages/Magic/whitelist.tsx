import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import Drawer from "@/components/menu/drawer";
import { NameArray } from "@/components/informations/name";
export default function Whitelists() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const array = new Array(11).fill(null);
  const [head, setHead] = React.useState([
    "Solana",
    "Etherium",
    "Polygon",
    "Show all",
  ]);
  const headimg = [
    {
      src: "/solana-logo.svg",
    },
    {
      src: "/etherium.svg",
    },
    {
      src: "/polygon.svg",
    },
    {
      src: "",
    },
  ];
  return (
    <>
      <Drawer></Drawer>
      <Box w="calc(100vw - 80px)" ml="80px" mt="80px">
        <Center h="8rem">
          <Heading size="lg">Whitelist opportunities</Heading>

          <Center
            border="1px solid #ffffff10"
            w="24rem"
            rounded={"2rem"}
            ml="20px"
            h="2.5rem"
          >
            {head.map((item, key) => (
              <Center key={key} w="6rem" onClick={() => setActive(key)}>
                <Box
                  w="6rem"
                  pos="absolute"
                  bgColor={"#E42575"}
                  rounded="3rem"
                  h="2.5rem"
                  opacity={active === key ? 1 : 0}
                  zIndex="-1"
                ></Box>
                <Center
                  bgColor={key === 3 ? "" : "#24182F"}
                  rounded="100%"
                  w={key === 3 ? 0 : "20px"}
                  h="20px"
                >
                  <Image
                    src={headimg[key].src}
                    alt=""
                    height={key === 3 ? 0 : 15}
                    width={key === 3 ? 0 : 15}
                  />
                </Center>
                <Heading size="xs" ml="5px">
                  {" "}
                  {item}
                </Heading>
              </Center>
            ))}
          </Center>
          <Box w="20vw"></Box>
          <Button variant={"third"} w="15rem" rounded={"3rem"} h="2.4rem">
            <Image src="/menu/search.png" alt="" width={20} height={20} />
            <Box opacity={0.3} w="100%">
              Search
            </Box>
          </Button>
        </Center>

        <Center flexDir={"column"} padding={"0 2rem"} overflow="scroll">
          <Box
            display="flex"
            alignItems={"center"}
            fontSize="1.1rem"
            h="3.5rem"
            w="83rem"
            pos="sticky"
            top="0rem"
            pl="1rem"
            bgColor={"#120c18"}
          >
            <Heading size="sm" w="470px">
              Collection Name
            </Heading>
            <Heading size="sm" w="170px">
              Social links
            </Heading>
            <Heading size="sm" w="190px">
              Mint Date
            </Heading>
            <Heading size="sm" w="150px">
              Blockchain
            </Heading>
            <Heading size="sm" w="200px">
              No. of spots
            </Heading>
            <Heading size="sm" w="100px">
              Action
            </Heading>
          </Box>
          <Box overflow={"hidden"} fontSize="1rem" w="1300px">
            {array.map((item, key) => (
              <Box
                display="flex"
                borderTop="1px solid #ffffff10"
                h={key === 0 ? "0" : "5rem"}
                alignItems="center"
                opacity={key === 0 ? 0 : 1}
                pl="1rem"
              >
                <Heading
                  size="sm"
                  w="470px"
                  display={"flex"}
                  alignItems="center"
                >
                  <Image
                    src="/auctions/2nd.webp"
                    alt=""
                    height={30}
                    width={30}
                  />
                  <Box w="5px"></Box>
                  {NameArray[key].src}
                </Heading>
                <Heading size="sm" w="170px">
                  <Image src="/drop/link.svg" alt="" height={20} width={20} />
                </Heading>
                <Box w="190px">TBD</Box>
                <Box w="150px" display="flex">
                  <Image src="/solana-logo.svg" alt="" height={15} width={15} />
                  <Heading ml="10px" size="sm">
                    Solana
                  </Heading>
                </Box>
                <Box w="200px">
                  <Box bgColor={"#24182F"} h="7px" w="10rem" rounded={"10px"}>
                    <Box
                      bgColor={"#E42575"}
                      h="7px"
                      w="5rem"
                      rounded={"10px"}
                    ></Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent="flex-end"
                    w="10rem"
                    fontSize={".75rem"}
                  >
                    <Box w="20%">105%</Box>
                    <Box w="80%" display={"flex"} justifyContent="flex-end">
                      (10572/10000)
                    </Box>
                  </Box>
                </Box>
                <Box w="100px">
                  <Button variant="first">Register</Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            w="100%"
            borderTop="1px solid #ffffff10"
            h="4rem"
            display={"flex"}
            alignItems="center"
          >
            <Center w="2rem" h="1.5rem" bgColor="#24182F">
              {"<<"}
            </Center>
            <Center w="1.5rem" h="1.5rem" bgColor="#24182F" ml="12px">
              {"<"}
            </Center>
            <Center w="1.5rem" h="1.5rem" bgColor="#24182F" ml="12px">
              {">"}
            </Center>
            <Center w="2rem" h="1.5rem" bgColor="#24182F" ml="12px">
              {">>"}
            </Center>
            Page{" "}
            <Center fontWeight={900} fontSize="1.2rem" mt="-.3rem" w="6rem">
              1 of 20
            </Center>
          </Box>
          <Box h="3rem"></Box>
        </Center>
      </Box>
    </>
  );
}
