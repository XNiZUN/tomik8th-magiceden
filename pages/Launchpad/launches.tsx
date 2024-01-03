import Image from "next/image";
import { Box, Center, Heading, Button } from "@chakra-ui/react";
import React from "react";
import Drawer from "@/components/menu/drawer";
import { NameArray } from "@/components/informations/name";
import { Sol } from "@/components/informations/sol";
import ItemMenu from "@/components/menu/itemMenu";
export default function Launches() {
  const [active, setActive] = React.useState(0);
  const array = new Array(22).fill(null);
  const [item, setItem] = React.useState(false);
  const L = [
    {
      src: "Star Atlas: CORE Episode 4",
    },
    {
      src: "Mutual Friends",
    },
  ];
  const Ltext = [
    {
      src: " Committed to seeing the path ahead due to the events of episode 3, Gyun and Moda follow the exuberant Timpo down a rabbit hole as the MUD investigators Followers of The Light are hot on their trail!If it was indeed destiny at their doorstep, Gyun would open the door arms wide in anticipation; however, Moda is far less convinced that what Gyun sees as destiny is not in fact their doom. The two brothers in arms face difficult resolutions to their futures as they are not just intertwined by these pivotal moments on the station, but also in the forthcoming decisions off station. Join our ragtag team as they continue to adventure searching for what is worth fighting for in the world of Star Atlas. Brought to you by a team of award-winning creatives, Tim Mcburnie and Matthew Medney",
    },
    {
      src: "The Bullyz Crew is an animated 3D collection of 5555 idiotic and degen pirates. Soon your favorite pirate-themed franchise. Bullyz grant exclusive, cool and fun perks!",
    },
  ];
  const Limg = [
    {
      src: "/launches/L-2.jpeg",
    },
    {
      src: "/launches/L-1.png",
    },
  ];

  const openOrClose = () => {
    setItem(!item);
  };
  return (
    <>
      <Drawer></Drawer>
      <Box
        zIndex={item === true ? "100" : -100}
        opacity={item === true ? 1 : 0}
      >
        <ItemMenu openClose={() => openOrClose()} drawer={item}></ItemMenu>
      </Box>
      <Box
        w="calc(100vw - 80px)"
        padding={"2rem"}
        ml="80px"
        mt="80px"
        zIndex={"1"}
        pos="relative"
      >
        <Box w="83rem" overflow={"hidden"}>
          <Box display="flex">
            {L.map((item, key) => (
              <Box
                mr="5rem"
                transform={
                  active === 1 ? "translateX(-85rem)" : "translateX(0)"
                }
                transition=".3s"
              >
                <Box w="80rem" display={"flex"}>
                  <Box w="40%">
                    <Button variant={"fifth"}>ME LAUNCHPAD</Button>
                    <Heading variant="h1" fontWeight={600}>
                      {L[key].src}
                    </Heading>
                    <Heading
                      variant="h5"
                      opacity={0.6}
                      textAlign="justify"
                      mt="1rem"
                    >
                      {Ltext[key].src}
                    </Heading>
                    <Button variant={"first"} mt="2rem" fontSize={"17px"}>
                      Go to launchpad
                    </Button>
                  </Box>
                  <Box
                    ml="2rem"
                    display={"flex"}
                    justifyContent="flex-end"
                    alignItems={"baseline"}
                    w="60%"
                  >
                    <Image
                      src={Limg[key].src}
                      alt=""
                      width={600}
                      height={600}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display={"flex"}>
          <Box
            w="10rem"
            h="6px"
            rounded={10}
            bgColor="white"
            onClick={() => setActive(0)}
            opacity={active === 1 ? 0.2 : 1}
          ></Box>
          <Box
            w="10rem"
            h="6px"
            rounded={10}
            bgColor="white"
            ml="10px"
            onClick={() => setActive(1)}
            opacity={active === 0 ? 0.2 : 1}
          ></Box>
        </Box>
        <Heading variant={"h2"} h="3rem" mt="3rem">
          UPCOMING
        </Heading>
        <Box w="100%" display="grid" gridTemplateColumns={"20% 20% 20% 20%"}>
          {array.map((item, key) => (
            <Box
              key={key}
              w="15rem"
              h="22rem"
              border="1px solid #ffffff10"
              mt="10px"
              rounded={"1rem"}
              _hover={{
                transform: "translateY(-6px)",
                transition: "all .5s",
                opacity: ".8",
              }}
              onClick={() => setItem(true)}
            >
              <Box rounded={"1rem"} overflow="hidden" h="240px">
                <Image
                  src="/auctions/3rd.jpeg"
                  alt=""
                  width={320}
                  height={260}
                />
              </Box>
              <Center h="1.8rem">
                <Heading size="sm">{NameArray[key].src}</Heading>
              </Center>
              <Center h="1.5rem">
                <Heading variant={"h5"} color="#E42575">
                  11h 50m 40s
                </Heading>
              </Center>
              <Box padding={"0px"}>
                <Box h="3.5rem" rounded={"5px"} padding={"10px"} display="flex">
                  <Button variant={"second"}>ITEMS 1000</Button>
                  <Button variant={"second"} ml="10px">
                    PRICE {Sol[key].src}SOL
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Heading variant={"h2"} h="3rem" mt="3rem">
          ENDED
        </Heading>
        <Box w="100%" display="grid" gridTemplateColumns={"20% 20% 20% 20%"}>
          {array.map((item, key) => (
            <Box
              key={key}
              w="15rem"
              h="22rem"
              border="1px solid #ffffff10"
              mt="10px"
              rounded={"1rem"}
              _hover={{
                transform: "translateY(-6px)",
                transition: "all .5s",
                opacity: ".8",
              }}
              onClick={() => setItem(true)}
            >
              <Box rounded={"1rem"} overflow="hidden" h="240px">
                <Image
                  src="/auctions/3rd.jpeg"
                  alt=""
                  width={320}
                  height={260}
                />
              </Box>
              <Center h="1.8rem">
                <Heading size="sm">{NameArray[key].src}</Heading>
              </Center>
              <Center h="1.5rem">
                <Heading variant={"h5"} color="#E42575">
                  SOLD OUT
                </Heading>
              </Center>
              <Box padding={"0px"}>
                <Box h="3.5rem" rounded={"5px"} padding={"10px"} display="flex">
                  <Button variant={"second"}>ITEMS 1000</Button>
                  <Button variant={"second"} ml="10px">
                    PRICE {Sol[key].src}SOL
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
