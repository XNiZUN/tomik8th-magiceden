import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import Drawer from "@/components/menu/drawer";
import { NameArray } from "@/components/informations/name";
export default function HomeG() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const array = new Array(22).fill(null);

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
  const Slide = [
    {
      src: "MINI ROYALE NATIONS",
    },
    {
      src: "Aurory",
    },
    {
      src: "Infinite Drive",
    },
    {
      src: "The Remnants",
    },
  ];
  const slideimg = [
    {
      src: "/slide-1.png",
    },
    {
      src: "/slide-2.png",
    },
    {
      src: "/slide-3.jpeg",
    },
    {
      src: "/slide-4.png",
    },
  ];
  const slidetext = [
    {
      src: "Mini Royale: Nations is a browser-based first-person-shooter set on top of a land strategy game. Players can earn mintable items through Battle Pass and Quests, join or create Clans to participate in Clan Wars, fuse weapons and characters for ultra rare skins, and more. Play now at miniroyale.io",
    },
    {
      src: "Aurory is a free-to-play, Solana-based JRPG. Compete for glory and rewards in our pvp Tactics Mode, or earn loot from quests in our compelling story mode!",
    },
    {
      src: "The Survivors need to Loot, Craft &amp; Build, and Fight (zombies and one another) their way to Survival!",
    },
    {
      src: "The Remnants is a player driven economy based game built on Solana and set in the post-apocalypse Metaverse. The Survivors need to Loot, Craft &amp; Build, and Fight (zombies and one another) their way to Survival!",
    },
  ];
  const service = [
    {
      src: "Dedicated Support",
    },
    {
      src: "Customizable Mint",
    },
    {
      src: "Increased Exposure",
    },
    {
      src: "User Safety Features",
    },
    {
      src: "Coming Soon",
    },
  ];
  return (
    <>
      <Drawer></Drawer>
      <Box
        w="calc(100vw - 80px)"
        border="1px solid #ffffff10"
        borderLeft={"0px"}
        ml="80px"
        mt="80px"
        pos="relative"
      >
        <Box h="500px" overflow={"scroll"} mt="2rem">
          <Box fontSize="1.1rem" display="flex">
            {Slide.map((item, key) => (
              <Box w="70rem" ml="2rem">
                <Box w="70rem" h="500px" rounded={"2rem"} overflow={"hidden"}>
                  <Box
                    className="gradient"
                    w="70rem"
                    h="500px"
                    pos="relative"
                    zIndex={1}
                    padding="2rem"
                    display={"flex"}
                    flexDirection="column"
                    justifyContent={"flex-end"}
                  >
                    <Heading fontWeight={900} size="2xl" mb="1rem">
                      {Slide[key].src}
                    </Heading>
                    <Heading variant={"h5"} w="50%" mb="1rem">
                      {slidetext[key].src}
                    </Heading>
                    <Button variant={"first"} w="9rem">
                      EXPLORE GAME
                    </Button>
                  </Box>
                  <Center transform={"translateY(-500px)"}>
                    <Image
                      src={slideimg[key].src}
                      alt=""
                      width={1200}
                      height={500}
                    />
                  </Center>
                </Box>{" "}
              </Box>
            ))}
          </Box>
        </Box>
        <Box w="100%" padding={"2rem"} mt="2rem">
          <Heading size={"lg"}>Top Blockchain Games</Heading>
        </Box>
        <Center padding={"0 2rem"}>
          <Box
            w="81rem"
            h="1000px"
            border="1px solid #ffffff10"
            rounded={"1.5rem"}
            padding="0 1rem"
            overflow={"scroll"}
          >
            <Box
              display="flex"
              alignItems={"center"}
              fontSize="1.1rem"
              h="3.5rem"
              w="1250px"
              pos="sticky"
              top="0rem"
              pt="1rem"
              bgColor={"#120c18"}
            >
              <Box w="20px">#</Box>
              <Box w="110px"></Box>
              <Box w="290px">Name</Box>
              <Box w="140px">24h Volume</Box>
              <Box w="140px">Volume Total</Box>
              <Box w="120px">Marketcap</Box>
              <Box w="150px">Holders/assets</Box>
              <Box w="180px">Twitter Followers</Box>
              <Box w="100px">Social</Box>
            </Box>
            <Box overflow={"hidden"} fontSize="1.1rem" w="1250px">
              {array.map((item, key) => (
                <Box
                  display="flex"
                  borderTop="1px solid #ffffff10"
                  h={key === 0 ? "0" : "3.5rem"}
                  alignItems="center"
                  opacity={key === 0 ? 0 : 1}
                >
                  <Box w="20px">{key}</Box>
                  <Box w="110px">
                    <Box
                      w="40px"
                      h="40px"
                      rounded={"100%"}
                      overflow="hidden"
                      ml="1rem"
                    >
                      <Image src="/homeG.webp" alt="" height={40} width={40} />
                    </Box>
                  </Box>
                  <Box w="290px">{NameArray[key].src}</Box>
                  <Box w="140px">$ 4.54K</Box>
                  <Box w="140px">$ 9.83M</Box>
                  <Box w="120px">$ 5.03M</Box>
                  <Box w="150px">3.42k/10k</Box>
                  <Box w="180px">51.43k</Box>
                  <Box w="100px">
                    <Image src="/twitter.svg" alt="" width={30} height={30} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Center>
        <Box w="100%" padding={"2rem"} mt="5rem">
          <Heading size={"lg"}>Our Services Include</Heading>
        </Box>
        <Box display="flex">
          {service.map((item, key) => (
            <Box
              w="15rem"
              h="10rem"
              border={"1px solid #e42575"}
              rounded="1rem"
              ml="1.5rem"
              padding="1rem"
            >
              <Image src="/twitter.svg" alt="" width={30} height={30} />
              <Heading size={"sm"}>{service[key].src}</Heading>
              <Heading size={"xs"} opacity=".6" mt="10px">
                Partner with a dedicated manager for the best NFT consultation
                from initial call to post launch.
              </Heading>
            </Box>
          ))}
        </Box>
        <Box overflow={"scroll"} padding="0 2rem">
          <Heading mt="4rem">Play on ME</Heading>
          <Box display={"flex"}>
            {array.map((item, key) => (
              <Box w="15rem" key={key}>
                <Box
                  w="13rem"
                  h="14rem"
                  border="1px solid #ffffff10"
                  mt="10px"
                  rounded={"1rem"}
                  _hover={{
                    transform: "translateY(-6px)",
                    transition: "all .5s",
                    opacity: ".8",
                  }}
                  mr="2rem"
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
                    <Heading size="xs">{NameArray[key].src}</Heading>
                  </Center>
                  <Center>
                    <Heading variant={"h6"} color="#E42575">
                      Bullyz Crew
                    </Heading>
                  </Center>
                </Box>
                <Center
                  margin={"5px"}
                  w="30px"
                  h="30px"
                  rounded={"100%"}
                  bgColor="black"
                  transform={"translateY(-14rem)"}
                >
                  <Image src="/solana-logo.svg" alt="" width={20} height={20} />
                </Center>
              </Box>
            ))}
          </Box>
        </Box>
        <Box overflow={"scroll"} padding="0 2rem">
          <Heading mt="4rem">Partner Games</Heading>
          <Box display={"flex"}>
            {array.map((item, key) => (
              <Box w="15rem" key={key}>
                <Box
                  w="13rem"
                  h="14rem"
                  border="1px solid #ffffff10"
                  mt="10px"
                  rounded={"1rem"}
                  _hover={{
                    transform: "translateY(-6px)",
                    transition: "all .5s",
                    opacity: ".8",
                  }}
                  mr="2rem"
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
                    <Heading size="xs">{NameArray[key].src}</Heading>
                  </Center>
                  <Center>
                    <Heading variant={"h6"} color="#E42575">
                      Bullyz Crew
                    </Heading>
                  </Center>
                </Box>
                <Center
                  margin={"5px"}
                  w="30px"
                  h="30px"
                  rounded={"100%"}
                  bgColor="black"
                  transform={"translateY(-14rem)"}
                >
                  <Image src="/solana-logo.svg" alt="" width={20} height={20} />
                </Center>
              </Box>
            ))}
          </Box>
        </Box>
        <Box overflow={"scroll"} padding="0 2rem">
          <Heading mt="4rem">Recently Added</Heading>
          <Box display={"flex"}>
            {array.map((item, key) => (
              <Box w="15rem" key={key}>
                <Box
                  w="13rem"
                  h="14rem"
                  border="1px solid #ffffff10"
                  mt="10px"
                  rounded={"1rem"}
                  _hover={{
                    transform: "translateY(-6px)",
                    transition: "all .5s",
                    opacity: ".8",
                  }}
                  mr="2rem"
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
                    <Heading size="xs">{NameArray[key].src}</Heading>
                  </Center>
                  <Center>
                    <Heading variant={"h6"} color="#E42575">
                      Bullyz Crew
                    </Heading>
                  </Center>
                </Box>
                <Center
                  margin={"5px"}
                  w="30px"
                  h="30px"
                  rounded={"100%"}
                  bgColor="black"
                  transform={"translateY(-14rem)"}
                >
                  <Image src="/solana-logo.svg" alt="" width={20} height={20} />
                </Center>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
