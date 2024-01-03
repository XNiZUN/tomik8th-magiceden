import { Box, Button, Center, Heading, Input } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ConnectWallet from "./wallet";
import { section, sectionDir } from "../informations/search";

export default function Menu() {
  const [now, setNow] = React.useState(false);
  const [connect, setConnect] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const router = useRouter();

  const [wallet, setWallet] = React.useState(false);

  const openOrClose = () => {
    setWallet(!wallet);
  };
  return (
    <>
      <Box
        opacity={wallet === true ? 1 : 0}
        zIndex={wallet === true ? 0 : -100}
      >
        <ConnectWallet
          openClose={() => openOrClose()}
          wallet={wallet}
        ></ConnectWallet>
      </Box>
      <Box pos="fixed" top="0px" zIndex={"300"}>
        <Box
          w="100vw"
          h="80px"
          bgColor="#120c18"
          display={"flex"}
          alignItems="center"
          padding="0px 16px"
        >
          <Box w="80vw" display={"flex"} alignItems="center">
            <Box
              onClick={() =>
                //  window.location.reload()
                router.push("/")
              }
            >
              <Image
                src="/menu/main-logo.png"
                alt=""
                height={37}
                width={180}
                priority
              />
            </Box>
            <Box w="5vw"></Box>
            <Box>
              <Button
                variant={"second"}
                w="10rem"
                h="40px"
                onClick={() => setNow(!now)}
                mt={now === true ? "2.5rem" : 0}
              >
                <Box rounded="100%" bgColor={"#1C1326"}>
                  <Image
                    src={"/menu/small-logo.svg"}
                    alt=""
                    height={20}
                    width={20}
                  />
                </Box>

                <Box ml="10px" w="5rem">
                  All Chains
                </Box>
                <Box
                  ml="10px"
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
              <Box
                w={"10rem"}
                h={now === true ? "40px" : 0}
                opacity={now === true ? 1 : 0}
                bgColor={"#1c1326"}
                display="flex"
                alignItems={"center"}
                onClick={() => router.push("/polygon")}
              >
                <Box rounded="100%" bgColor={"#1C1326"} ml="10px">
                  <Image src={"/polygon.svg"} alt="" height={20} width={20} />
                </Box>
                <Box ml="20px" w="5rem">
                  Polygon
                </Box>
              </Box>
            </Box>

            <Box w="5vw"></Box>
            <Box>
              <Button
                variant={"third"}
                rounded="3rem"
                w="300px"
                h="44px"
                onClick={() =>
                  search === false ? setSearch(true) : setSearch(false)
                }
              >
                <Image src="/menu/search.png" alt="" width={20} height={20} />
                <Input
                  border="0px"
                  fontSize={"12px"}
                  placeholder="Search Creators and Collections"
                ></Input>
              </Button>
              <Box
                w={search === true ? "40rem" : 0}
                h={search === true ? "20rem" : 0}
                zIndex={search === true ? 400 : -400}
                bgColor={"black"}
                border="1px solid #ffffff30"
                pos="absolute"
                overflow={"scroll"}
                mt="10px"
                rounded={"10px"}
              >
                <Heading size="md" padding={"10px"}>
                  Collections
                </Heading>
                {section.map((item, key) => (
                  <Box
                    display={"flex"}
                    alignItems="center"
                    h="3rem"
                    _hover={{
                      bgColor: "#ffffff10",
                    }}
                    borderTop="1px solid #ffffff20"
                    onClick={() => router.push(sectionDir[key].src)}
                  >
                    <Box ml="10px" mr="10px" rounded="5px" overflow={"hidden"}>
                      <Image
                        src="/search-img.webp"
                        alt=""
                        height={35}
                        width={35}
                      />
                    </Box>
                    <Box w="calc(100% - 90px)" fontSize={"14px"}>
                      {section[key].src}
                    </Box>
                    <Box>
                      <Image
                        src="/solana-logo.svg"
                        alt=""
                        height={20}
                        width={20}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box w="20vw" display={"flex"} justifyContent={"flex-end"}>
            <Button
              variant={"first"}
              w="9rem"
              h="40px"
              onClick={() => {
                setConnect(!connect);
                setWallet(!wallet);
              }}
            >
              <Image src="/menu/wallet.png" alt="" width={20} height={20} />
              Connect Wallet
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
