import Image from "next/image";
import {
  Box,
  Center,
  color,
  transition,
  Button,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import End from "@/components/menu/end";
import { useRouter } from "next/router";
export default function Blog() {
  const [now, setNow] = React.useState(false);
  const [now2, setNow2] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const slide1 = new Array(3).fill(null);
  const Slide = [
    {
      src: "Interview: Pokeee.eth on Sweeping 69 DeGods & Using Them For Tinder Matches",
    },
    {
      src: "Announcing: Magic Eden Rewards (Beta)!",
    },
    {
      src: "Continuing our multi-chain vision with Polygon",
    },
  ];
  const Slideimg = [
    {
      src: "/resources/blog-1-1.avif",
    },
    {
      src: "/resources/blog-1-2.avif",
    },
    {
      src: "/resources/blog-1-3.avif",
    },
  ];
  const Slidetext = [
    {
      src: "💡 A true ape, Pokeee.eth (@pokeepandaa) swept 69 DeGods using Magic Eden's sweeper tool and told many women about it on Tinder in hopes of a match. None of them really cared but we re all still really happy for the ~$900k he spent on his new jpegs.",
    },
    {
      src: " Today is day one for our latest experiment: a NFT marketplace loyalty program for our collectors. We created Magic Eden Rewards to celebrate and create value for our community. This program includes future rewards and fee discounts for our collectors.",
    },
    {
      src: "We are adding Polygon as our third supported chain on Magic Eden.",
    },
  ];
  const head = [
    {
      src: "Perspectives",
    },
    {
      src: "Updates",
    },
    {
      src: "New to NFTs",
    },
  ];
  const slide2 = [
    {
      src: "Interview: Pokeee.eth on Sweeping 69 DeGods & Using Them For Tinder Matches",
    },
    {
      src: "Mini Royale: Nations Partners with Magic Eden for Clan Wars!",
    },
    {
      src: "Mini Royale Season 4 is here!",
    },
    {
      src: "The CORE of Star Atlas and their new Graphic Novel",
    },
    {
      src: "Biggest Ws + Ls: Bounceback? brains + zombies mint & Reddit delivers $2.5M",
    },
    {
      src: "NFT Trading 101 with @runn1ngm8n",
    },
  ];
  const slide2img = [
    {
      src: "/resources/blog-1-1.avif",
    },
    {
      src: "/resources/blog-1-2.avif",
    },
    {
      src: "/resources/blog-1-3.avif",
    },
    {
      src: "/resources/blog-2-4.avif",
    },
    {
      src: "/resources/blog-2-5.avif",
    },
    {
      src: "/resources/blog-2-6.avif",
    },
  ];
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
        <Center h="calc(6.5rem - 3px)"></Center>
        <Box
          id="prB"
          h="3px"
          w="0%"
          maxW="100%"
          className="intro-gradient"
        ></Box>
      </Box>
      <Box
        w="100vw"
        bgColor={now2 === true ? "black" : "#fff"}
        color={now2 === true ? "#fff" : "#000"}
      >
        <Box
          w="100%"
          h="5rem"
          bgColor={"#370d36"}
          display="flex"
          padding="2rem"
          color={"white"}
        >
          <Box w="60%" display={"flex"} alignItems="center">
            <Box onClick={() => router.push("/")} mr="1rem">
              <Image src="/white-logo.png" alt="" width={200} height={40} />
            </Box>
            |
            <Heading size="sm" ml="1rem">
              Our Blog
            </Heading>
          </Box>

          <Box
            w="40%"
            display={"flex"}
            justifyContent="flex-end"
            alignItems={"center"}
          >
            {head.map((item, key) => (
              <Box ml="1rem">{head[key].src}</Box>
            ))}
            <Button variant={"first"} ml="2rem">
              Keep in touch
            </Button>
            <Box
              w="3rem"
              bgColor={"#e42575"}
              h="2rem"
              ml="1rem"
              rounded={"2rem"}
              onClick={() => (now2 === false ? setNow2(true) : setNow2(false))}
            ></Box>
          </Box>
        </Box>
        <Box padding={"0 14rem"} mt="5rem">
          <Box h="400px" w="60rem" overflow={"scroll"} mt="2rem">
            <Box fontSize="1.1rem" display="flex">
              {Slide.map((item, key) => (
                <Box
                  w="72rem"
                  transform={
                    active === 0
                      ? "translateX(0rem)"
                      : active === 1
                      ? "translateX(-70rem)"
                      : active === 2
                      ? "translateX(-140rem)"
                      : "none"
                  }
                  transition=".3s"
                >
                  <Box w="70rem" h="350px" overflow={"hidden"} display="flex">
                    <Box w="25rem" padding={"1rem"}>
                      <Heading variant={"h5"} color="#e42575">
                        Featured Stories
                      </Heading>
                      <Heading variant={"h3"} mt="10px">
                        {Slide[key].src}
                      </Heading>
                      <Heading variant={"h5"} mt="10px">
                        {Slidetext[key].src}
                      </Heading>
                      <Button variant={"first"} mt="10px">
                        Read More
                      </Button>
                      <Heading variant={"h4"} opacity=".4" mt="10px">
                        Jan 17, 2023
                      </Heading>
                    </Box>
                    <Center>
                      <Image
                        src={Slideimg[key].src}
                        alt=""
                        height={0}
                        width={550}
                      />
                    </Center>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box display="flex">
            {slide1.map((item, key) => (
              <Box
                w="6rem"
                h="5px"
                rounded={"5px"}
                bgColor={active === key ? "#e42575" : "#000"}
                opacity={active === key ? 1 : 0.2}
                onClick={() => setActive(key)}
                ml="10px"
              ></Box>
            ))}
          </Box>
          <Box display={"flex"} alignItems="center" mt="5rem">
            <Heading color={"#e42575"}>Perspectives</Heading>
            <Box opacity={0.6} ml="73%">
              See All
            </Box>
          </Box>
          <Box h="400px" overflow={"scroll"} mt="2rem">
            <Box fontSize="1.1rem" display="flex">
              {slide2.map((item, key) => (
                <Center w="21rem" padding={"10px"}>
                  <Box w="20rem" h="300px" overflow={"hidden"}>
                    <Center w="20rem" h="160px" overflow={"hidden"}>
                      <Image
                        src={slide2img[key].src}
                        alt=""
                        width={400}
                        height={0}
                      />
                    </Center>

                    <Heading size="sm" color={"#e42575"} mt="10px">
                      Perspectives
                    </Heading>
                    <Heading size="md" mt="10px">
                      {slide2[key].src}
                    </Heading>
                    <Heading variant={"h4"} opacity=".4" mt="10px">
                      Jan 17, 2023
                    </Heading>
                  </Box>{" "}
                </Center>
              ))}
            </Box>
          </Box>
          <Center
            w="100%"
            h="300px"
            border={"5px solid #e42575"}
            bgColor={now2 === false ? "#f2edf5" : "#120c18"}
            rounded="1.5rem"
          >
            <Center flexDir={"column"} pos="absolute">
              <Heading size="xl">Stay up to date on the latest web3</Heading>
              <Heading size="xl">news & Magic Eden updates</Heading>
              <Center mt="1rem">
                <Button
                  variant={"third"}
                  bgColor={now2 === false ? "#0000001a" : "#24182f"}
                >
                  Your email address
                </Button>
                <Button variant={"first"} ml="1rem" color={"white"}>
                  Subscribe
                </Button>
              </Center>
              <Heading variant={"h5"} mt="1rem">
                I agree to Magic Eden’s Terms of Service and Privacy Policy
              </Heading>
            </Center>
            <Image src="/shapes.png" alt="" width={1000} height={0} />
          </Center>
          <Box display={"flex"} alignItems="center" mt="5rem">
            <Heading color={"#e42575"}>Magic Eden Updates</Heading>
            <Box opacity={0.6} ml="60%">
              See All
            </Box>
          </Box>
          <Box h="400px" overflow={"scroll"} mt="2rem">
            <Box fontSize="1.1rem" display="flex">
              {slide2.map((item, key) => (
                <Center w="21rem" padding={"10px"}>
                  <Box w="20rem" h="300px" overflow={"hidden"}>
                    <Center w="20rem" h="160px" overflow={"hidden"}>
                      <Image
                        src={slide2img[key].src}
                        alt=""
                        width={400}
                        height={0}
                      />
                    </Center>

                    <Heading size="sm" color={"#e42575"} mt="10px">
                      Perspectives
                    </Heading>
                    <Heading size="md" mt="10px">
                      {slide2[key].src}
                    </Heading>
                    <Heading variant={"h4"} opacity=".4" mt="10px">
                      Jan 17, 2023
                    </Heading>
                  </Box>{" "}
                </Center>
              ))}
            </Box>
          </Box>
          <Box display={"flex"} alignItems="center" mt="2rem">
            <Heading color={"#e42575"}>New to NFTs</Heading>
            <Box opacity={0.6} ml="73%">
              See All
            </Box>
          </Box>
          <Box h="400px" overflow={"scroll"} mt="2rem">
            <Box fontSize="1.1rem" display="flex">
              {slide2.map((item, key) => (
                <Center w="21rem" padding={"10px"}>
                  <Box w="20rem" h="300px" overflow={"hidden"}>
                    <Center w="20rem" h="160px" overflow={"hidden"}>
                      <Image
                        src={slide2img[key].src}
                        alt=""
                        width={400}
                        height={0}
                      />
                    </Center>

                    <Heading size="sm" color={"#e42575"} mt="10px">
                      Perspectives
                    </Heading>
                    <Heading size="md" mt="10px">
                      {slide2[key].src}
                    </Heading>
                    <Heading variant={"h4"} opacity=".4" mt="10px">
                      Jan 17, 2023
                    </Heading>
                  </Box>{" "}
                </Center>
              ))}
            </Box>
          </Box>
        </Box>

        <End></End>
      </Box>
    </>
  );
}
