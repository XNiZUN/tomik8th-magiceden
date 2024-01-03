import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import End from "@/components/menu/end";
import { useRouter } from "next/router";

export default function Trust() {
  const text = [
    {
      src: "Magic Eden",
    },
    {
      src: "Creators",
    },
    {
      src: "Collectors",
    },
  ];
  const router = useRouter();
  return (
    <>
      <Box w="100vw" bgColor="#000">
        <Box w="100%" h="5rem" bgColor={"#110c17"} padding="1.3rem">
          <Box onClick={() => router.push("/")}>
            <Image src="/white-logo.png" alt="" width={200} height={40} />
          </Box>
        </Box>
        <Center
          w="100%"
          h="400px"
          pos="absolute"
          fontSize={"4rem"}
          fontWeight="900"
        >
          Trust & Safety
        </Center>
        <Box w="100%">
          <Image src="/banner.png" alt="" width={2500} height={400} />
        </Box>
        <Box h="100px"></Box>
        <Center
          w="100%"
          h="200px"
          pos="absolute"
          fontSize={"3rem"}
          fontWeight="900"
        >
          Welcome to web3 and NFTs
        </Center>
        <Center w="100%" h="200px">
          <Image src="/background-title.png" alt="" width={700} height={200} />
        </Center>
        <Box padding={"0 18rem"}>
          <Center textAlign={"center"}>
            Web3 can mean something slightly different to all of us, but I think
            we all agree it is important to be transparent in a fast-moving,
            evolving environment. Magic Eden aims to be your destination for
            discovery, expression, and ownership across digital cultures. Our
            goal is to provide the most delightful platform experience for
            creators and collectors. This requires trust in each other and in
            our platform, so we’ve outlined the responsibilities and information
            each of us needs in order to participate.
          </Center>
          <Center fontSize={"1.5rem"} fontWeight="800" mt="5rem">
            How do we uphold Trust and Safety in web3 and NFTs?
          </Center>
          <Center mt="1rem">
            Please know that given how quickly NFTs are evolving, we are always
            open to feedback. We always love to hear from you so we can continue
            to make the right changes that benefit the community. Below you will
            find helpful information on our guidelines and policies.
            <br />
            <br />
            Set out below is specific information we have on subject matters we
            are often asked about. If you have any other questions, try visiting
            our Help Center! And if you still don’t feel your question is
            answered, please send us a message using the chat widget below.
          </Center>
        </Box>
        <Box padding={"10rem 10rem 0 10rem "}>
          <Box
            className="intro-gradient"
            w="100%"
            h=".5rem"
            rounded={"1rem"}
          ></Box>
          <Box display="flex" padding={"3rem 2.5rem"}>
            <Heading>Setting expectations for </Heading>
            <Heading ml="1rem" color={"#e42575"}>
              Magic Eden, Creators{" "}
            </Heading>{" "}
            <Heading ml="1rem">and</Heading>{" "}
            <Heading ml="1rem" color={"#e42575"}>
              Collectors
            </Heading>
          </Box>
        </Box>
        <Center>
          {text.map((item, key) => (
            <Center key={key} w="27rem">
              <Box w="25.5rem" h="17rem" bgColor={"#1c1326"} padding="2rem">
                <Heading pos="absolute">{text[key].src}</Heading>
                <Box h="50px" display={"flex"} alignItems="flex-end">
                  <Image src="/text.svg" alt="" width={150} height={30} />
                </Box>
                <Heading variant={"h5"} opacity=".6">
                  Creators are responsible for delivering on the collection’s
                  promises and providing adequate transparency to potential
                  collectors so they can make informed decisions. After mint,
                  creators are responsible for continuing to engage with their
                  communities and fulfill their roadmap to their fullest
                  potential.
                </Heading>
              </Box>
            </Center>
          ))}
        </Center>
        <Center flexDir={"column"} mt="5rem">
          <Heading size={"2xl"}>Want to find out more?</Heading>
          <Heading variant={"h5"} mt="1.5rem">
            Discover informative content thats actually useful for Creators, and
            Collectors across a wide range of topics.
          </Heading>
          <Center
            w="50rem"
            h="8rem"
            borderBottom="1px solid #ffffff10"
            mt="2rem"
          >
            <Heading w="10rem" opacity={0.6}>
              General
            </Heading>
            <Heading w="13rem" opacity={0.6}>
              Launchpad
            </Heading>
            <Heading w="10rem" opacity={0.6}>
              Platform
            </Heading>
          </Center>
          <Box w="40rem" h="3rem" mt="4rem" borderBottom="1px solid #ffffff10">
            What does it mean to DYOR?
          </Box>
        </Center>
        <Box h="10rem"></Box>
        <End></End>
      </Box>
    </>
  );
}
