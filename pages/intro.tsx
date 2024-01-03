import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Introduction from "@/components/intro/introduction";
import Wallet from "@/components/intro/wallet";
import Buying from "@/components/intro/buying";
import Selling from "@/components/intro/selling";
import End from "@/components/menu/end";
import { useRouter } from "next/router";
export default function HomeG() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(5);
  const service = [
    {
      src: "Introduction",
    },
    {
      src: "Wallet",
    },
    {
      src: "Buying NFTs",
    },
    {
      src: "Selling NFTs",
    },
  ];
  const section = [
    {
      src: <Introduction></Introduction>,
    },
    {
      src: <Wallet></Wallet>,
    },
    {
      src: <Buying></Buying>,
    },
    {
      src: <Selling></Selling>,
    },
  ];
  useEffect(() => {
    let bar: any = document.querySelector("#prB");

    window.onscroll = function () {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;

      bar.style.width = scrolled + "%";
    };

    const element: any = document.querySelectorAll(".section");
    const rect = element[0].getBoundingClientRect();
    const rect1 = element[1].getBoundingClientRect();
    const rect2 = element[2].getBoundingClientRect();
    const rect3 = element[3].getBoundingClientRect();

    window.addEventListener("scroll", function () {
      let value: any = window.scrollY;

      if (rect.top < value) {
        setActive(0);
        setNow(true);
      } else if (rect.top > value) {
        setNow(false);
      }
      if (rect1.top < value) {
        setActive(1);
        setNow(true);
      }
      if (rect2.top < value) {
        setActive(2);
        setNow(true);
      }
      if (rect3.top < value) {
        setActive(3);
        setNow(true);
      }
    });
  });
  const scroll = (key: any) => {
    const element: any = document.querySelectorAll(".section");
    setActive(key);
    element[key].scrollIntoView({ behavior: "smooth" });
  };
  const router = useRouter();
  return (
    <>
      <Box
        pos="fixed"
        w="100%"
        h="6.5rem"
        bgColor={"#120c18"}
        zIndex={100}
        transform={now === true ? "translateY(0px)" : "translateY(-6.5rem)"}
        transition=".3s"
      >
        <Center h="calc(6.5rem - 3px)">
          {service.map((item, key) => (
            <Center
              h="4.5rem"
              border={
                active === key ? "1px solid #f72c87" : "1px solid #ffffff10"
              }
              rounded="1.5rem"
              mr="1.5rem"
              padding={"1.5rem"}
              onClick={() => scroll(key)}
            >
              <Center
                w="35px"
                h="35px"
                className={active === key ? "intro-gradient" : "null"}
                rounded="7px"
              >
                {key + 1}
              </Center>
              <Heading size={"sm"} ml="5px">
                {service[key].src}
              </Heading>
            </Center>
          ))}
        </Center>
        <Box
          id="prB"
          h="3px"
          w="0%"
          maxW="100%"
          className="intro-gradient"
        ></Box>
      </Box>
      <Box w="100vw" bgColor="#000">
        <Box
          w="100%"
          h="5rem"
          bgColor={"#370d36"}
          display="flex"
          alignItems={"center"}
        >
          <Box onClick={() => router.push("/")} ml="1rem" mr="1rem">
            <Image src="/white-logo.png" alt="" width={200} height={40} />
          </Box>
          |
          <Heading size="sm" ml="1rem">
            Our Blog
          </Heading>
        </Box>
        <Box padding={"0 8rem"} mt="5rem">
          <Box display={"flex"} w="100%">
            <Box w="30%">
              <Heading size={"md"} opacity=".6">
                Magic Eden Playbook
              </Heading>
              <Heading size={"3xl"} mt="3rem">
                Intro to NFTs on Solana
              </Heading>
            </Box>
            <Box ml="18rem">
              <Image src="/intro.png" alt="" width={500} height={600} />
            </Box>
          </Box>
          <Box display={"flex"} w="100%" mt="4rem">
            {service.map((item, key) => (
              <Box
                w="17rem"
                h="10rem"
                border={"1px solid #ffffff20"}
                rounded="1rem"
                mr="1.5rem"
                padding="1rem"
              >
                <Heading size={"md"}>{service[key].src}</Heading>
                <Heading size={"xs"} opacity=".6" mt="10px">
                  Partner with a dedicated manager for the best NFT consultation
                  from initial call to post launch.
                </Heading>
              </Box>
            ))}
          </Box>
          <Box>
            {service.map((item, key) => (
              <Box className="section">
                <Box h="80px"></Box>
                {section[key].src}
              </Box>
            ))}
          </Box>
        </Box>
        <End></End>
        <Box w="100%" h="450px">
          <Image src="/end-bg.png" alt="" width={1500} height={450} />
        </Box>
      </Box>
    </>
  );
}
