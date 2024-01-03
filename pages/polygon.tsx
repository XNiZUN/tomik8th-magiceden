import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Popular from "@/pages/marketplace/popular";
import MagicDAO from "@/pages/Resources/MagicDAO";
import DrawerPol from "@/components/menu/drawerPol";
import End from "@/components/menu/end";
import Hours from "@/components/button/hours";
import Coin from "@/components/button/coin";

export default function Polygon() {
  const [active2, setActive2] = React.useState(0);
  const [now, setNow] = React.useState(false);

  let router = useRouter();
  const array = new Array(12).fill(null);
  const [launches, setLaunches] = React.useState([
    "Next 7days",
    "Coming Soon",
    "Live",
  ]);
  const Slide = [
    {
      src: "3moji Genesis",
    },
    {
      src: "YugiBao",
    },
    {
      src: "1day left to claim your rewards",
    },
    {
      src: "Coinage",
    },
  ];
  const trends = [
    {
      src: "a",
    },
    {
      src: "n",
    },
    {
      src: "b",
    },
    {
      src: "c",
    },
    {
      src: "d",
    },
    {
      src: "",
    },
    {
      src: "",
    },
    {
      src: "",
    },
  ];

  return (
    <>
      <DrawerPol></DrawerPol>
      <Box w="calc(100vw - 80px)" ml="80px" mt="80px">
        <Box overflow={"scroll"}>
          <Box display="flex">
            {Slide.map((item, key) => (
              <Box w="70rem" ml="2rem">
                <Box
                  border={"1px solid #ffffff10"}
                  w="70rem"
                  h="500px"
                  display={"flex"}
                  rounded={"2rem"}
                  overflow="hidden"
                >
                  <Box padding={"2rem"}>
                    <Heading fontWeight={900} size="xl" mb="1rem">
                      {Slide[key].src}
                    </Heading>
                    <Button variant={"first"} w="9rem">
                      EXPLORE GAME
                    </Button>{" "}
                  </Box>
                  <Box w="1000px" h="500px">
                    <Image
                      src={"/slide-2-1.png"}
                      alt=""
                      width={690}
                      height={500}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Heading padding="1rem 8rem" mt="3rem">
          Trending Announcements📢
        </Heading>
        <Center padding={"0 8rem"}>
          <Box
            rounded={"1rem"}
            w="100%"
            overflow="hidden"
            border="1px solid #ffffff20"
          >
            {trends.map((item, key) => (
              <Box
                h="4rem"
                w="100%"
                bgColor={"#1c1326"}
                borderBottom=".5px solid #ffffff12"
                padding="1rem"
                _hover={{ bgColor: "#ffffff10" }}
                display="flex"
                alignItems={"center"}
              >
                <Box>
                  <Image src={"/popular.webp"} alt="" height={20} width={20} />
                </Box>
                <Box w="10rem" ml="1rem">
                  GostKidDAO
                </Box>
                <Box w="68%">
                  <Heading opacity={0.6} variant="h6">
                    11hours
                  </Heading>
                  <Heading size="sm">Annon mint is approaching</Heading>
                </Box>
                <Box color="#e42575" w="7rem">
                  View Details
                </Box>
                <Center
                  ml="1rem"
                  bgColor={"#ffffff10"}
                  w="30px"
                  h="30px"
                  rounded="5px"
                >
                  <Image src={"/twitter.svg"} alt="" height={15} width={15} />
                </Center>
              </Box>
            ))}
          </Box>
        </Center>
        <Box padding={"0 1rem"} mt="6rem" display="flex" alignItems={"center"}>
          <Heading as={"h4"} size="lg">
            Popular Collections
          </Heading>
          <Box w="20px"></Box>
          <Hours></Hours>
          <Coin></Coin>
          <Button variant={"second"} ml="22.5%">
            See All
          </Button>
        </Box>
        <Box w="100%" display="grid" gridTemplateColumns={"25% 25% 25% 25%"}>
          {array.map((item, key) => (
            <Box
              w="20rem"
              h="6rem"
              margin={"1rem"}
              display="flex"
              alignItems={"center"}
            >
              {key + 1}
              <Center
                rounded={"100%"}
                w="60px"
                h="60px"
                overflow="hidden"
                ml="1rem"
              >
                <Image src={"/popular.webp"} alt="" height={100} width={100} />
              </Center>
              <Box ml="5px">
                <Heading fontWeight={900} size="sm">
                  {" "}
                  ABC
                </Heading>
                <Box display={"flex"} opacity=".6" fontSize={12} mt="5px">
                  Floor
                  <Image
                    src={"/solana-logo.svg"}
                    alt=""
                    height={10}
                    width={10}
                  />
                  48.1
                </Box>
              </Box>
              <Box
                ml="6rem"
                display={"flex"}
                flexDir="column"
                alignItems={"flex-end"}
              >
                <Heading fontSize={"12px"} color="#00d181">
                  28.72%
                </Heading>
                <Box display={"flex"} opacity=".6" fontSize={12} mt="5px">
                  <Image
                    src={"/solana-logo.svg"}
                    alt=""
                    height={10}
                    width={10}
                  />
                  48.1
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box padding={"1.5rem"} display="flex" alignItems={"center"}>
          <Heading w="30%">Launchpad drops</Heading>
          <Center
            border="1px solid #ffffff10"
            rounded={"2rem"}
            ml="10px"
            h="2.3rem"
          >
            {launches.map((item, key) => (
              <Center
                key={key}
                onClick={() => setActive2(key)}
                padding="10px"
                rounded={"3rem"}
                bgColor={active2 === key ? "#e42575" : "none"}
                h="2.3rem"
              >
                <Heading variant={"h6"}> {item}</Heading>
              </Center>
            ))}
          </Center>
          <Center justifyContent={"flex-end"} w="50%">
            <Button
              variant={"fourth"}
              border="1px solid #ffffff10"
              ml="10px"
              onClick={() => (now === false ? setNow(true) : setNow(false))}
            >
              <Heading size="sm">See All</Heading>
            </Button>
          </Center>
        </Box>
        <Box overflow={"scroll"} padding="0 2rem">
          <Box display={"flex"}>
            {array.map((item, key) => (
              <Box
                w="15rem"
                key={key}
                _hover={{
                  transform: "translateY(-6px)",
                  transition: "all .5s",
                  opacity: ".8",
                }}
              >
                <Box
                  w="12rem"
                  h="15rem"
                  border="1px solid #ffffff10"
                  mt="10px"
                  rounded={"1rem"}
                  mr="1rem"
                >
                  <Box rounded={"1rem"} overflow="hidden" h="160px">
                    <Image
                      src="/auctions/3rd.jpeg"
                      alt=""
                      width={250}
                      height={200}
                    />
                  </Box>
                  <Center mt="10px">
                    <Heading size="xs">cool</Heading>
                  </Center>
                  <Center>
                    <Heading variant={"h6"} color="#E42575">
                      Bullyz Crew
                    </Heading>
                  </Center>
                  <Center>
                    <Button
                      variant={"third"}
                      padding="5px"
                      h="1.5rem"
                      rounded={"1rem"}
                      color="#00d181"
                      mt="5px"
                      border={"0px solid"}
                    >
                      Live
                    </Button>
                  </Center>
                </Box>
                <Center
                  margin={"5px"}
                  w="30px"
                  h="30px"
                  rounded={"100%"}
                  bgColor="black"
                  transform={"translateY(-15rem)"}
                >
                  <Image src="/solana-logo.svg" alt="" width={20} height={20} />
                </Center>
              </Box>
            ))}
          </Box>
        </Box>
        <Heading mt="4rem" ml="2rem">
          Frens are watching
        </Heading>
        <Box overflow={"scroll"} padding="0 2rem">
          <Box display={"flex"}>
            {array.map((item, key) => (
              <Box
                w="15rem"
                key={key}
                _hover={{
                  transform: "translateY(-6px)",
                  transition: "all .5s",
                  opacity: ".8",
                }}
              >
                <Box
                  w="12rem"
                  h="15rem"
                  border="1px solid #ffffff10"
                  mt="10px"
                  rounded={"1rem"}
                  mr="1rem"
                >
                  <Box rounded={"1rem"} overflow="hidden" h="160px">
                    <Image
                      src="/auctions/3rd.jpeg"
                      alt=""
                      width={250}
                      height={200}
                    />
                  </Box>
                  <Center mt="10px">
                    <Heading size="xs">cool</Heading>
                  </Center>
                  <Center>
                    <Heading variant={"h6"} color="#E42575">
                      Bullyz Crew
                    </Heading>
                  </Center>
                  <Center>
                    <Button
                      variant={"third"}
                      padding="5px"
                      h="1.5rem"
                      rounded={"1rem"}
                      mt="5px"
                      border={"0px solid"}
                    >
                      9049 watchers
                    </Button>
                  </Center>
                </Box>
                <Center
                  margin={"5px"}
                  w="30px"
                  h="30px"
                  rounded={"100%"}
                  bgColor="black"
                  transform={"translateY(-15rem)"}
                >
                  <Image src="/solana-logo.svg" alt="" width={20} height={20} />
                </Center>
              </Box>
            ))}
          </Box>
        </Box>
        <End></End>
      </Box>
    </>
  );
}
