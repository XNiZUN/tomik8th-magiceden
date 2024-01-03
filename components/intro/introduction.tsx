import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
export default function Introduction() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);

  return (
    <>
      <Box w="100%" display={"flex"} mt="8rem">
        <Box w="50%">
          <Heading size={"3xl"} w="25rem">
            Intro to NFTs on Solana
          </Heading>
        </Box>
        <Box w="50%">
          <Heading size={"lg"}>What even is an “NFT”?</Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            NFT stands for “non-fungible token”. In plain English, it’s a
            one-of-a-kind digital asset.
            <br />
            <br />
            When you own an NFT, you can choose to store it because you’re a
            long-term investor or simply because you love the art. You can also
            sell it and turn a profit. Use cases for NFTs are plentiful and are
            being explored in the field of games, music, real estate and more!
            <br />
            <br />A prominent use case for NFTs is that it establishes proof of
            ownership for digital art, which opens up new avenues for artists.
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
            What is proof of ownership?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            On a blockchain, you can track who owns an NFT. If you owned an NFT,
            the whole world would know that your NFT belongs to your specific
            wallet address, and no one can dispute your claim of ownership.
            Anyone can download an image of the Mona Lisa on Google Images but
            not everyone can own the Mona Lisa. This is the strength of digital
            ownership.
          </Heading>
          <Heading size={"lg"} mt="7rem">
            Why Solana?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            You might have heard that the best place to buy NFTs are on
            Ethereum. When you buy an NFT on Ethereum, you need to pay gas fees
            in order for your transaction to be processed. Ethereum gas fees can
            easily cost more than the NFT you wish to mint or buy. On Solana,
            transaction fees are a fraction of a cent. And, its lightning fast!
            Not to mention, the environmental cost of 1 transaction on Solana is
            less than 2 Google searches.
          </Heading>
          <Heading size={"lg"} mt="7rem">
            What happens when I mint or buy an NFT from secondary?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            Unlike buying an NFT from a secondary market like Magic Eden where
            NFTs are listed post-mint, minting an NFT is buying directly from
            the “supplier” (primary market) who are the creators of the NFT
            collection. When an NFT is minted, it is stored on the blockchain.
            <br />
            <br />
            You can mint NFTs directly on Magic Edens Launchpad or on the NFT
            collections official website. You cannot choose which NFT to mint,
            as it usually operates like a lucky draw. If a collection is minting
            for, as an example 1 $SOL, you have equal chances of ending up with
            a legendary-tier NFT or a common-tier NFT. Both for the same price!
            If you mint an NFT, you may be able to purchase the NFT at a lower
            price than you would on a secondary market.
            <br />
            <br />
            Buying NFTs on Magic Eden means you are buying from the secondary
            market. The current holders of the NFTs set the price for each NFT
            they are selling. The good thing about buying on secondary is that
            you can choose which NFT you are getting!
          </Heading>
        </Box>
      </Box>
    </>
  );
}
