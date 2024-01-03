import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { NameArray } from "../../components/informations/name";
import ItemMenu from "../../components/menu/itemMenu";
import Drawer from "@/components/menu/drawer";
import Makeoffer from "@/components/menu/makeOffer";
export default function MagicDAO() {
  const [now, setNow] = React.useState(false);
  const [royal, setRoyal] = React.useState(false);
  const [grid, setGrid] = React.useState(false);
  const [item, setItem] = React.useState(false);
  const [royal2, setRoyal2] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const [head, setHead] = React.useState([
    "Items",
    "Collection Offers",
    "Activity",
    "Analytics",
    "Announcements",
  ]);
  const ticket = [
    {
      src: "FLOOR",
    },
    {
      src: "TOTAL VOL",
    },
    {
      src: "AVG.SALE 24H",
    },
    {
      src: "OWNERS",
    },
    {
      src: "LISTED",
    },
    {
      src: "TOTAL SUPPLY",
    },
  ];
  const feeling = [
    {
      src: "Full",
    },
    {
      src: "Half",
    },
    {
      src: "None",
    },
  ];

  const openOrClose = () => {
    setItem(!item);
  };

  const openOrClose2 = () => {
    setActive(!active);
  };
  return (
    <>
      <Box
        zIndex={active === true ? "100" : -100}
        opacity={active === true ? 1 : 0}
      >
        <Makeoffer
          openClose2={() => openOrClose2()}
          active={active}
        ></Makeoffer>
      </Box>
      <Box
        zIndex={item === true ? "100" : -100}
        opacity={item === true ? 1 : 0}
      >
        <ItemMenu openClose={() => openOrClose()} drawer={item}></ItemMenu>
      </Box>
      <Drawer></Drawer>
      <Box
        w="calc(100vw - 80px)"
        border="1px solid #ffffff10"
        borderLeft={"0px"}
        padding="2rem"
        ml="80px"
        mt="80px"
        pos="relative"
      >
        <Box
          border={"1px solid #ffffff10"}
          w="100%"
          h="350px"
          pos="relative"
          zIndex={1}
          padding="5rem 3rem"
          display={"flex"}
          rounded="1rem"
        >
          <Box rounded="100%" overflow="hidden" w="200px">
            <Image
              src={"/resources/animate-logo.gif"}
              alt=""
              height={200}
              width={200}
            />
          </Box>
          <Box ml="4rem">
            <Heading fontWeight={900}>Magic Ticket</Heading>
            <Box display="flex">
              <Center display="grid" gridTemplateColumns={"13rem 13rem"}>
                {ticket.map((item, key) => (
                  <Box
                    w="12rem"
                    bgColor="#1c1326"
                    mt="10px"
                    h="2.3rem"
                    display="flex"
                    alignItems={"center"}
                    fontSize="14px"
                    rounded={"5px"}
                  >
                    <Box w="calc(60% - 10px)" ml="10px">
                      {ticket[key].src}
                    </Box>
                    <Box
                      w="calc(40% - 10px)"
                      mr="10px"
                      display="flex"
                      justifyContent={"flex-end"}
                    >
                      <Image
                        src={"/solana-logo.svg"}
                        alt=""
                        height={13}
                        width={13}
                      />
                      1,030
                    </Box>
                  </Box>
                ))}
              </Center>
              <Box borderLeft={"1px solid #ffffff10"} ml="2rem" pl="2rem">
                <Box display="flex">
                  <Button variant="sixth">
                    <Image
                      src={"/social/discord.svg"}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </Button>
                  <Button variant="sixth" ml="10px">
                    <Image src={"/twitter.svg"} alt="" height={20} width={20} />
                  </Button>
                  <Button variant="sixth" ml="10px">
                    <Image
                      src={"/social/blog.svg"}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </Button>
                  <Button variant={"sixth"} ml="10px" padding="0 8px">
                    {" "}
                    <Image
                      src={"/social/scope.svg"}
                      alt=""
                      height={20}
                      width={20}
                    />
                    Watch
                    <Box w="2rem" ml="10px" bgColor={"#24182f"} padding="3px">
                      3.5K
                    </Box>
                  </Button>
                  <Button variant={"sixth"} ml="10px">
                    <Image
                      src={"/tri-point.svg"}
                      alt=""
                      height={20}
                      width={20}
                    />
                  </Button>
                </Box>
                <Heading variant={"h5"} mt="1rem">
                  Magic Ticket NFT for active wallets on Magic Eden. Holders
                  will receive access to MagicDAO.
                </Heading>
                <Box>
                  <Button
                    variant="sixth"
                    mt="1rem"
                    padding={"0 10px"}
                    onClick={() =>
                      royal === false ? setRoyal(true) : setRoyal(false)
                    }
                    w="10rem"
                  >
                    Royalties: Full 🤩{" "}
                    <Box
                      ml="5px"
                      transform={
                        royal === true ? "rotate(0deg)" : "rotate(180deg)"
                      }
                    >
                      <Image
                        src={"/menu/down-arrow.png"}
                        alt=""
                        height={15}
                        width={15}
                      />
                    </Box>
                  </Button>
                  <Center
                    flexDir={"column"}
                    pos="absolute"
                    w={"10rem"}
                    h={royal === false ? 0 : "9rem"}
                    overflow="hidden"
                    bgColor="#1c1326"
                  >
                    {feeling.map((item, key) => (
                      <Box>
                        <Button
                          variant={"second"}
                          bgColor={royal2 === key ? "#24182f" : "none"}
                          w="9rem"
                          border="0px"
                          onClick={() => setRoyal2(key)}
                        >
                          {feeling[key].src}
                        </Button>
                      </Box>
                    ))}
                  </Center>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box pos="sticky" top="80px" bgColor={"#120c18"} zIndex="5">
          <Box
            display="flex"
            h="3rem"
            mt="3rem"
            borderBottom={"1px solid #ffffff10"}
            w="100%"
            alignItems={"center"}
          >
            {head.map((item, key) => (
              <Box
                mr="2rem"
                _hover={{
                  color: "#e42575",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
          <Box display="flex" h="6rem" w="100%" alignItems={"center"}>
            <Button variant={"second"}>
              <Image src="/filter.svg" alt="" width={20} height={20} />
            </Button>
            <Button variant={"second"} ml="1rem">
              <Image src="/restart.svg" alt="" width={20} height={20} />
            </Button>
            <Button variant={"third"} w="14rem" rounded={"2rem"} ml="1rem">
              <Box ml="20px" opacity={0.3} mr="4.5rem">
                Search Items
              </Box>
              <Image src="/menu/search.png" alt="" width={20} height={20} />
            </Button>
            <Button
              variant={"second"}
              ml="1rem"
              onClick={() => setActive(!active)}
            >
              <Image src="/layer.svg" alt="" width={20} height={20} />
              <Box ml=".5rem">Make Offer</Box>
            </Button>
            <Box
              w={item === true ? "42.5%" : "70%"}
              display={"flex"}
              justifyContent="flex-end"
            >
              <Button variant={"second"} mr="1rem">
                <Box mr="2rem"> Price: Low to High</Box>
                <Box
                  ml="5px"
                  transform={now === true ? "rotate(0deg)" : "rotate(180deg)"}
                >
                  <Image
                    src={"/menu/down-arrow.png"}
                    alt=""
                    height={15}
                    width={15}
                  />
                </Box>
              </Button>
              <Box display="flex" border={"1px solid #ffffff10"} rounded="7px">
                <Button variant={"fourth"} onClick={() => setGrid(false)}>
                  <Image src="/two.svg" alt="" width={20} height={20} />
                </Button>
                <Button variant={"fourth"} onClick={() => setGrid(true)}>
                  <Image src="/tri.svg" alt="" width={20} height={20} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box w={item === false ? "100%" : "calc(100% - 16rem)"}>
          <Box
            display={"grid"}
            gridTemplateColumns={
              grid === false || item === true
                ? "25% 25% 25% 25%"
                : "20% 20% 20% 20% 20%"
            }
          >
            {NameArray.map((item, key) => (
              <Box w={grid === false ? "25%" : "20%"} key={key}>
                <Box
                  w={grid === false ? "19rem" : "15rem"}
                  h={grid === false ? "24rem" : "21rem"}
                  border="1px solid #ffffff10"
                  mb="1rem"
                  rounded={"1rem"}
                  _hover={{
                    transform: "translateY(-6px)",
                    transition: "all .5s",
                    opacity: ".8",
                  }}
                  onClick={() => {
                    setItem(true);
                    setGrid(true);
                  }}
                >
                  <Box
                    rounded={"1rem"}
                    overflow="hidden"
                    h={grid === false ? "280px" : "230px"}
                  >
                    <Image
                      src="/MagicDAO.webp"
                      alt=""
                      width={450}
                      height={400}
                    />
                  </Box>
                  <Box padding={"1rem"}>
                    <Box>
                      <Heading size="xs">{NameArray[key].src}</Heading>
                    </Box>
                    <Box mt={"3px"}>
                      <Heading variant={"h6"} color="#E42575">
                        Bullyz Crew
                      </Heading>
                    </Box>
                    <Box mt="15px" display="flex" alignItems={"center"}>
                      <Image
                        src="/solana-logo.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                      <Heading size="xs" ml="5px" mr="10px">
                        2.14
                      </Heading>
                      <Image src="/detail.svg" alt="" width={15} height={15} />
                      <Button
                        variant={"fifth"}
                        borderColor="#ffffff10"
                        padding="5px"
                        h="1.7rem"
                        ml={grid === false ? "8rem" : "4rem"}
                      >
                        DETAILS
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
