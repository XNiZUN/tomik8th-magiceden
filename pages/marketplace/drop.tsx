import Image from "next/image";
import { Box, Center, Input, Heading, Button } from "@chakra-ui/react";
import React from "react";
import Drawer from "@/components/menu/drawer";
import { NameArray } from "@/components/informations/name";
import { Volumetotal } from "@/components/informations/volumeTotal";
import { Router, useRouter } from "next/router";
export default function Drop() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const array = new Array(11).fill(null);
  const [eth, setEth] = React.useState(0);
  const [head, setHead] = React.useState(["Solana", "Etherium", "Show all"]);
  const headimg = [
    {
      src: "/solana-logo.svg",
    },
    {
      src: "/etherium.svg",
    },
    {
      src: "",
    },
  ];
  const router = useRouter();
  return (
    <>
      <Drawer></Drawer>
      <Box w="calc(100vw - 80px)" ml="80px" mt="80px" pos="relative">
        <Box>
          <Center>
            <Heading size="2xl">Upcoming Drops</Heading>
          </Center>
          <Center>
            <Box h="5rem" w="672px" fontSize={"1rem"} mt="2rem">
              <Center>
                Mark your calendars. Get ready to mint the latest NFT projects
              </Center>
              <Center>
                Minting across Launchpad on a Blockchain near you!
              </Center>
            </Box>
          </Center>
          <Center>
            <Center
              w="672px"
              h="5rem"
              border="1px solid #f1c40f"
              rounded="10px"
              padding={"0px 12px"}
            >
              <Image src="/drop/warning.svg" alt="" height={80} width={80} />
              Projects listed are not an endorsement from Magic Eden or a
              guarantee of listing on Magic Eden post-mint. Dates may be subject
              to change.
            </Center>
          </Center>
        </Box>
        <Center mt="3rem">
          <Heading size="md" borderBottom={"1px solid #E42575"} opacity=".5">
            Drops
          </Heading>
          <Box w="40vw"></Box>
          <Center
            border="1px solid #ffffff10"
            w="18rem"
            rounded={"2rem"}
            ml="10px"
            h="2.5rem"
          >
            {head.map((item, key) => (
              <Center
                key={key}
                w="6rem"
                onClick={() => {
                  setActive(key);
                  setEth(key);
                }}
              >
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
                  bgColor={key === 2 ? "" : "#24182F"}
                  rounded="100%"
                  w={key === 2 ? 0 : "20px"}
                  h="20px"
                >
                  <Image
                    src={headimg[key].src}
                    alt=""
                    height={key === 2 ? 0 : 15}
                    width={key === 2 ? 0 : 15}
                  />
                </Center>
                <Heading fontSize={".8rem"} ml="5px">
                  {item}
                </Heading>
              </Center>
            ))}
          </Center>
          <Button
            variant={"first"}
            ml="10px"
            w="10rem"
            h="3rem"
            onClick={() => router.push("/dashboard")}
          >
            <Heading size="sm">List Your Project</Heading>
          </Button>
        </Center>
        <Center>
          <Box w="83rem">
            <Box
              display="flex"
              alignItems={"center"}
              fontSize="1.1rem"
              h="3.5rem"
              w="1300px"
              pos="sticky"
              top="0rem"
              pt="1rem"
              pl="1rem"
              bgColor={"#120c18"}
            >
              <Heading size="sm" w="110px">
                #UpVotes
              </Heading>
              <Heading size="sm" w="470px">
                Project Name
              </Heading>
              <Heading size="sm" w="170px">
                Community
              </Heading>
              <Heading size="sm" w="160px">
                When
              </Heading>
              <Heading size="sm" w="110px">
                Blockchain
              </Heading>
              <Heading
                size="sm"
                w="130px"
                display={"flex"}
                justifyContent="flex-end"
              >
                Mint Link
              </Heading>
              <Heading
                size="sm"
                w="140px"
                display={"flex"}
                justifyContent="flex-end"
              >
                Description
              </Heading>
            </Box>
            <Box overflow={"hidden"} fontSize="1rem" w="100%">
              {array.map((item, key) => (
                <Box
                  display="flex"
                  borderTop="1px solid #ffffff10"
                  h={key === 0 ? "0" : "5rem"}
                  alignItems="center"
                  opacity={key === 0 ? 0 : 1}
                  pl="1rem"
                >
                  <Box w="110px">
                    <Button
                      variant={"third"}
                      w="3.5rem"
                      h="3.5rem"
                      display={"block"}
                    >
                      <Center>
                        <Image
                          src="/drop/heart.svg"
                          alt=""
                          height={20}
                          width={20}
                        />
                      </Center>

                      {Volumetotal[key].src}
                    </Button>
                  </Box>
                  <Heading size="sm" w="470px">
                    {NameArray[key].src}
                  </Heading>
                  <Heading size="sm" w="170px">
                    <Image src="/twitter.svg" alt="" height={20} width={20} />
                  </Heading>
                  <Box w="160px">Feb 05, 08:01</Box>
                  <Box w="110px" display="flex">
                    <Image
                      src={
                        eth === 0
                          ? "/solana-logo.svg"
                          : eth === 1
                          ? "/etherium.svg"
                          : eth === 2
                          ? "/polygon.svg"
                          : "/solana-logo.svg"
                      }
                      alt=""
                      height={15}
                      width={15}
                    />
                    <Heading ml="10px" size="sm">
                      Solana
                    </Heading>
                  </Box>
                  <Box w="130px" display={"flex"} justifyContent="flex-end">
                    <Button variant="third" rounded={"100%"}>
                      <Image
                        src="/drop/link.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </Button>
                  </Box>
                  <Box w="140px" display={"flex"} justifyContent="flex-end">
                    <Button variant="third" rounded={"100%"}>
                      <Image
                        src="/drop/paste.svg"
                        alt=""
                        height={25}
                        width={25}
                      />
                    </Button>
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
          </Box>
        </Center>
      </Box>
    </>
  );
}
