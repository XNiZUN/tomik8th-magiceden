import Image from "next/image";
import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Drawer from "@/components/menu/drawer";
import { NameArray } from "@/components/informations/name";
export default function AllGames() {
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
        <Box overflow={"scroll"} padding="0 2rem">
          <Heading mt="4rem">Play on ME</Heading>
          <Box
            display={"grid"}
            gridTemplateColumns={
              "12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%"
            }
          >
            {NameArray.map((item, key) => (
              <Box w="10rem" key={key}>
                <Box
                  w="9rem"
                  h="14rem"
                  border="1px solid #ffffff10"
                  mt="10px"
                  rounded={"1rem"}
                  _hover={{
                    transform: "translateY(-6px)",
                    transition: "all .5s",
                    opacity: ".8",
                    bgColor: "#57048a",
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
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
