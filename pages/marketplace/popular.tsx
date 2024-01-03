import Image from "next/image";
import { Box, Center, Button, Heading } from "@chakra-ui/react";
import React from "react";
import Drawer from "@/components/menu/drawer";
import { Volumetotal } from "@/components/informations/volumeTotal";
import { volume24h } from "@/components/informations/volume24h";
import { NameArray } from "@/components/informations/name";
import Hours from "@/components/button/hours";
import { volumepercent } from "@/components/informations/volume%";
export default function Popular() {
  const [search, setSearch] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [sql2, setSql2] = React.useState(0);
  const [eth, setEth] = React.useState(0);
  const array = new Array(11).fill(null);
  const [head, setHead] = React.useState([
    "Solana",
    "Etherium",
    "Polygon",
    "Show",
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

  const sql = [
    {
      src: "SQL",
    },
    {
      src: "ETH",
    },
    {
      src: "MATIC",
    },
  ];
  return (
    <>
      <Drawer></Drawer>
      <Box
        w="calc(100vw - 80px)"
        h="100vh"
        border="1px solid #ffffff10"
        borderLeft={"0px"}
        ml="80px"
        mt="80px"
        pos="relative"
      >
        <Box
          w="100%"
          h="3rem"
          padding={" 12px"}
          borderBottom="1px solid #ffffff10"
        >
          <Heading as={"h4"} size="md">
            Popular Collections
          </Heading>
        </Box>
        <Box padding={"1rem 12px"} display="flex" alignItems={"center"}>
          <Box>
            <Button variant={"third"} w="45rem">
              <Image src="/menu/search.png" alt="" width={20} height={20} />
              <Box ml="20px" opacity={0.3} w="100%">
                Search
              </Box>
              <Box
                ml="5px"
                transform={search === true ? "rotate(0deg)" : "rotate(180deg)"}
                onClick={() =>
                  search === false ? setSearch(true) : setSearch(false)
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
            <Box
              w={search === true ? "45rem" : 0}
              h={search === true ? "13rem" : 0}
              bgColor="#24182f"
              mt="5px"
              overflow={"hidden"}
              border="1px solid #ffffff20"
              rounded={"10px"}
            >
              <Box padding="1rem">
                <Heading variant={"h5"} opacity=".6">
                  Select collections which match all any of the following
                  conditions:
                </Heading>
                <Box display={"flex"} alignItems="flex-end" mt="10px">
                  <Box>
                    <Box padding={"3px"}>
                      <Button variant={"second"} bgColor="#000000aa" w="12rem">
                        ME floor price
                        <Box
                          ml="45px"
                          transform={
                            search === true ? "rotate(0deg)" : "rotate(180deg)"
                          }
                          onClick={() => setSearch(!search)}
                        >
                          <Image
                            src={"/menu/down-arrow.png"}
                            alt=""
                            height={15}
                            width={15}
                          />
                        </Box>
                      </Button>
                    </Box>
                    <Box padding="3px">
                      <Button variant={"second"} w="12rem" bgColor="#000000aa">
                        Greater than
                        <Box
                          ml="55px"
                          transform={
                            search === true ? "rotate(0deg)" : "rotate(180deg)"
                          }
                          onClick={() => setSearch(!search)}
                        >
                          <Image
                            src={"/menu/down-arrow.png"}
                            alt=""
                            height={15}
                            width={15}
                          />
                        </Box>
                      </Button>
                    </Box>
                  </Box>
                  <Button
                    variant={"second"}
                    w="12rem"
                    h="46px"
                    bgColor="#000000aa"
                    rounded="5px"
                    ml="5px"
                  >
                    0
                  </Button>
                  <Box padding="10px" display="flex" alignItems={"center"}>
                    {sql.map((item, key) => (
                      <Center
                        key={key}
                        onClick={() => setSql2(key)}
                        padding="10px"
                        rounded={"3rem"}
                        bgColor={sql2 === key ? "#e42575" : "none"}
                        h="2rem"
                      >
                        <Heading size="xs">{sql[key].src}</Heading>
                      </Center>
                    ))}
                    <Box ml="15px">
                      <Image src={"/link.svg"} alt="" height={20} width={20} />
                    </Box>
                    <Box ml="10px" onClick={() => setSearch(!search)}>
                      <Image
                        src={"/cancel-icon.svg"}
                        alt=""
                        height={30}
                        width={30}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" mt="10px">
                  <Button variant={"fifth"} color="#fff">
                    + Add filter
                  </Button>
                  <Button variant={"first"} ml="10px">
                    Search
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Center
            border="1px solid #ffffff10"
            rounded={"2rem"}
            ml="1rem"
            h="2.5rem"
          >
            {head.map((item, key) => (
              <Center
                key={key}
                onClick={() => {
                  setActive(key);
                  setEth(key);
                }}
                padding="5px"
                rounded={"3rem"}
                bgColor={active === key ? "#e42575" : "none"}
                h="2.5rem"
              >
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
                  {item}
                </Heading>
              </Center>
            ))}
          </Center>
          <Box w="6%"></Box>
          <Box>
            <Hours></Hours>
          </Box>
        </Box>
        <Center padding={"12px"}>
          <Box
            w="83rem"
            h="500px"
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
              w="1300px"
              pos="sticky"
              top="0rem"
              pt="1rem"
              bgColor={"#120c18"}
            >
              <Box w="500px">Collection</Box>
              <Box w="120px" display={"flex"} justifyContent="flex-end">
                Volume Total
              </Box>
              <Box w="120px" display={"flex"} justifyContent="flex-end">
                24h Volume
              </Box>
              <Box w="136px" display={"flex"} justifyContent="flex-end">
                24h % Volume
              </Box>
              <Box w="70px" display={"flex"} justifyContent="flex-end">
                Sales
              </Box>
              <Box w="110px" display={"flex"} justifyContent="flex-end">
                Floor Price
              </Box>
              <Box w="110px" display={"flex"} justifyContent="flex-end">
                Owners
              </Box>
              <Box w="120px" display={"flex"} justifyContent="flex-end">
                Total Supply
              </Box>
            </Box>
            <Box overflow={"hidden"} fontSize="1.1rem" w="1300px">
              {array.map((item, key) => (
                <Box
                  display="flex"
                  borderTop="1px solid #ffffff10"
                  h={key === 0 ? "0" : "3.5rem"}
                  alignItems="center"
                  opacity={key === 0 ? 0 : 1}
                >
                  <Box w="500px" display="flex">
                    {key}
                    <Box ml="10px" mr="10px" rounded={"100%"}>
                      <Image
                        src={"/resources/animate-logo.gif"}
                        alt=""
                        width={25}
                        height={25}
                      />
                    </Box>
                    <Box>{NameArray[key].src}</Box>
                  </Box>
                  <Box w="120px" display={"flex"} justifyContent="flex-end">
                    <Box mr="5px">{Volumetotal[key].src}</Box>
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
                      height={20}
                      width={20}
                    />
                  </Box>
                  <Box w="120px" display={"flex"} justifyContent="flex-end">
                    {volume24h[key].src}
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
                      height={20}
                      width={20}
                    />
                  </Box>
                  <Box w="136px" display={"flex"} justifyContent="flex-end">
                    {volumepercent[key].src}
                  </Box>
                  <Box w="70px" display={"flex"} justifyContent="flex-end">
                    7
                  </Box>
                  <Box w="110px" display={"flex"} justifyContent="flex-end">
                    1.9k
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
                      height={20}
                      width={20}
                    />
                  </Box>
                  <Box w="110px" display={"flex"} justifyContent="flex-end">
                    6.2K
                  </Box>
                  <Box w="120px" display={"flex"} justifyContent="flex-end">
                    12.9K
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
}
