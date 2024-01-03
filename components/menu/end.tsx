import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function End() {
  const mplace = [
    {
      src: "Popular collections",
    },
    {
      src: "Launchpad",
    },
    {
      src: "Auctions",
    },
  ];
  const games = [
    {
      src: "All games",
    },
    {
      src: "Launch With Us",
    },
  ];
  const resources = [
    {
      src: "About Us",
    },
    {
      src: "Support",
    },
    {
      src: "Trust & safety",
    },
    {
      src: "Shop",
    },
    {
      src: "Copyright Policy",
    },
    {
      src: "Terms of Service",
    },
    {
      src: "Privacy Policy",
    },
  ];
  const router = useRouter();
  return (
    <>
      <Box
        display={"flex"}
        h="30rem"
        padding={"0 4rem"}
        bgColor="#120c18"
        pt="5rem"
        color={"white"}
      >
        <Box w="45%" h="25rem">
          <Box h="10rem" w="20rem">
            <Image src="/white-logo.png" alt="" width={300} height={0} />
          </Box>
          <Box
            h="15rem"
            display="flex"
            justifyContent={"flex-end"}
            flexDirection="column"
          >
            <Heading variant={"h5"} opacity={0.8} mb="1rem">
              Magic Eden the homepage of NFT's
            </Heading>{" "}
            <Heading variant={"h5"} opacity=".8" mb="2rem">
              ©2023 Euclid Labs, Inc. All Rights Reserved.
            </Heading>
          </Box>
        </Box>
        <Box w="18%">
          <Heading variant="h4">Marketplace</Heading>
          {mplace.map((item, key) => (
            <Heading
              fontSize={"1rem"}
              opacity={0.6}
              mt=".7rem"
              _hover={{ opacity: 1 }}
              onClick={() => {
                key === 0 ? router.push("/marketplace/popular") : null;
                key === 1 ? router.push("/marketplace/drop") : null;
                key === 2 ? router.push("/marketplace/auctions") : null;
              }}
            >
              {mplace[key].src}
            </Heading>
          ))}
        </Box>
        <Box w="18%">
          <Heading variant="h4">Eden games</Heading>
          {games.map((item, key) => (
            <Heading
              fontSize={"1rem"}
              opacity={0.6}
              mt=".7rem"
              _hover={{ opacity: 1 }}
              onClick={() => {
                key === 0 ? router.push("/Games/allgames") : null;
                key === 1 ? router.push("/Games/homeG") : null;
              }}
            >
              {games[key].src}
            </Heading>
          ))}
        </Box>
        <Box w="18%">
          <Heading variant="h4">Resources</Heading>
          {resources.map((item, key) => (
            <Heading
              fontSize={"1rem"}
              opacity={0.6}
              mt=".7rem"
              _hover={{ opacity: 1 }}
            >
              {resources[key].src}
            </Heading>
          ))}
        </Box>
      </Box>
    </>
  );
}
