import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
export default function Selling() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);

  return (
    <>
      <Box w="100%" display={"flex"} mt="15rem">
        <Box w="50%">
          <Heading size={"3xl"} w="25rem">
            Selling NFTs
          </Heading>
        </Box>
        <Box w="50%">
          <Heading size={"lg"}>How do I sell NFTs on Magic Eden? </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            People can also send in offers for the NFTs you have listed. If
            you’ve changed your mind on listing, cancel the listing by clicking
            cancel listing and approve the transaction. It’s that simple!
          </Heading>
          <Box
            w="100%"
            h="7rem"
            rounded={"1rem"}
            border="1px solid #e42575"
            mt="2rem"
            display="flex"
            padding="1rem"
          >
            <Box w="7%" h="30px">
              <Image src="/drop/warning.svg" alt="" width={30} height={30} />
            </Box>
            <Box w="93%">
              <Heading size={"md"}>Safety Note:</Heading>
              <Heading variant={"h5"} opacity=".6">
                NFTs are a whole lot of fun but you should be aware that they
                can fluctuate in value and are a highly volatile asset class.
                Please do your own research (DYOR) before you decide to invest
                in NFTs.
              </Heading>
            </Box>
          </Box>
          <Heading size={"lg"} mt="5rem">
            Will I be able to sell an NFT immediately?{" "}
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            An NFT is an illiquid asset, which means that to see any real
            returns, you need to realize your gains by selling the NFT. There
            needs to be demand in order to sell an NFT. A quick way to see if an
            NFT collection has demand is by checking the transaction activity of
            the collection! The more activity here, the higher the likelihood of
            your NFT being sold.
            <br />
            <br />
            Keep an eye on the prices at which the NFTs are being purchased! If
            people are purchasing at the floor price and you list your NFT for
            10 times higher, the chances of it being bought are significantly
            lower.
          </Heading>
          <Heading size={"lg"} mt="7rem">
            What is the floor price?{" "}
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            The floor price can be found on the page of every collection on
            Magic Eden. It is the minimum price a collection’s NFTs are being
            sold for! It shows how the NFT holders are valuing them. A higher
            floor price usually indicates a higher valuation.
          </Heading>
          <Heading size={"lg"} mt="7rem">
            What are attributes and why are they important?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            Within a collection, NFTs have different attributes that make each
            NFT unique. Whether that is how the mouth looks, the body, or even
            the background, the variety helps to add value to an NFT collection
            through rarity.
            <br />
            <br />
            An NFT’s rarity is determined by the likelihood of its unique
            combination of attributes. So, if an NFT has purple sunglasses, and
            the purple sunglasses are only present 0.01% of the time across the
            collection, this can potentially make the NFT more valuable! On
            Magic Eden, you can see the rarity rank of an NFT on their
            collection page.
          </Heading>
          <Heading size={"lg"} mt="7rem">
            Now that I’ve bought and sold an NFT, what do I do?{" "}
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            Congratulations and welcome! You’re now a part of the NFT community.
            Trading NFTs isn’t solely about having an appreciating digital
            asset, it’s also an opportunity to build and be part of a community.
          </Heading>
          <Box
            w="100%"
            rounded={"2rem"}
            bgColor="#1c1326"
            mt="3rem"
            border={"1px solid #ffffff10"}
            padding="1rem"
          >
            <Box display={"flex"}>
              <Center
                w="40px"
                h="40px"
                bgColor={"#00000060"}
                rounded="10px"
                fontWeight="900"
              >
                1
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Start by interacting on Twitter and Discord. Twitter is the
                place where the larger NFT community hangs out. It’s your
                neighborhood. Discord is your house. It’s where specific NFT
                communities gather.
              </Heading>
            </Box>
            <Box display={"flex"} mt="3rem">
              <Center
                w="40px"
                h="40px"
                bgColor={"#00000060"}
                rounded="10px"
                fontWeight="900"
              >
                2
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Spend time on Discord, get on the general chat channel, chat
                with other holders and have fun while you’re at it! Maybe make a
                friend or two?
              </Heading>
            </Box>
            <Box display={"flex"} mt="3rem">
              <Center
                w="40px"
                h="40px"
                bgColor={"#00000060"}
                rounded="10px"
                fontWeight="900"
              >
                3
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Ask questions and as you gain footing in the NFT space, interact
                with newbies seeking guidance and answer their questions. Seek
                to provide value.
              </Heading>
            </Box>
            <Box display={"flex"} mt="3rem">
              <Center
                w="40px"
                h="40px"
                bgColor={"#00000060"}
                rounded="10px"
                fontWeight="900"
              >
                4
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                When you’re ready to contribute to strengthening the NFT
                project, think about what you can offer that is unique to you —
                what are you good at?
              </Heading>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent="center" h="30rem">
            <Button variant={"first"} mt="3rem">
              EXPLORE COLLECTIONS
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
