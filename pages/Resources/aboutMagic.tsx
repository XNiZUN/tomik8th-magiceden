import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Menu from "@/components/menu/menu";
import { useRouter } from "next/router";
import ConnectWallet from "@/components/menu/wallet";
export default function AboutMagicEden() {
  const [now, setNow] = React.useState(false);
  const [connect, setConnect] = React.useState(false);
  const router = useRouter();
  const [active, setActive] = React.useState(0);
  const number = [
    {
      src: "22,000,000+",
    },
    {
      src: "8,000+",
    },
    {
      src: "70+",
    },
    {
      src: "100,000+",
    },
    {
      src: "$1.9 billion",
    },
    {
      src: "iOS / Android",
    },
  ];
  const visit = [
    {
      src: "unique monthly visitors",
    },
    {
      src: "collections",
    },
    {
      src: "people",
    },
    {
      src: "daily wallet connections",
    },
    {
      src: "secondary trading volume",
    },
    {
      src: "browsing app",
    },
  ];
  const avatar = [
    {
      src: "/resources/avatar-1.png",
    },
    {
      src: "/resources/avatar-2.png",
    },
    {
      src: "/resources/avatar-3.png",
    },
    {
      src: "/resources/avatar-4.png",
    },
  ];
  const avatarname = [
    {
      src: "Sidney Zhang",
    },
    {
      src: "Jack Lu",
    },
    {
      src: "Zhuoxun Yin",
    },
    {
      src: "Zhuojie Zhou",
    },
  ];
  const avatarsocial = [
    {
      src: "@sidazhang",
    },
    {
      src: "@0xLeoInRio",
    },
    {
      src: "@ZhuoxunYin",
    },
    {
      src: "@zhouzhuojie",
    },
  ];
  const avatartext = [
    {
      src: " Sidney started in crypto with his first crypto company working on the Bitcoin Developer API in 2013. He joined Uber in 2015 as one of the Founding Engineers at Uber Eats, where he worked on Uber Eats from zero till it hit the moon. Sidney subsequently spent a few years at Uber Advanced Technologies Group working on self-driving production modeling and research. focusing on computer vision and prediction. He lastly joined Facebooks AI team before co-founding Magic Eden.",
    },
    {
      src: "Jack got into crypto in 2013, when he started hacking on bitcoin wallet apps. Before co-founding Magic Eden, Jack worked at a crypto exchange, Google as a Product Manager and as a consultant at Boston Consulting Group.",
    },
    {
      src: "Zhuoxun has been full time in crypto since 2017 as the second employee at dYdX and as a Senior Product Manager at Coinbase. Before entering the crypto rabbit hole, he spent the early part of his career in strategy at early-stage companies and advising corporate clients at Bain & Company.",
    },
    {
      src: "Rex started his crypto journey with crypto mining around 2014. He was an Early Engineer at Uber, Checkr, and recently was a Staff Engineer at Facebook AI working on PyTorch Dev Infra before co-founding Magic Eden. He is deeply passionate about the open-source developer community and has created Flagr, OpenMock, Open Privacy Vault and DSRHub. Rex also serves as one of the Kong API Gateway community champions.",
    },
  ];
  const job = [
    {
      src: "Chief Technology Officer",
    },
    {
      src: "Chief Executive Officer",
    },
    {
      src: "Chief Operating Officer",
    },
    {
      src: "Chief Engineer",
    },
  ];
  const title = [
    {
      src: "Core secondary marketplace",
    },
    {
      src: "Launchpad",
    },
    {
      src: "Whitelabel marketplaces",
    },
    {
      src: "Partnerships",
    },
    {
      src: "Games",
    },
  ];
  const text = [
    {
      src: "We offer creators the greatest liquidity, holding over 90% market share for secondary trading volume on certain Blockchains and majority share on others.",
    },
    {
      src: "Launchpad is our exclusive minting platform. We accept 3% of all Launchpad applications and feature only the best projects.The greatest exposure and widest reach on Web 3The greatest potential for secondary trading volume post-mint A hassle-free mint with dedicated development support",
    },
    {
      src: "Partner with us by powering your own marketplace or mint button with our tech under your hood. Raydium’s NFT marketplace, Okay Bears’ Bear Market and Exodus’ mobile wallet NFT marketplace, are all powered by Magic Eden.",
    },
    {
      src: "Join global brands and leaders, and drop your NFT collections with us! From white-glove partnerships to something completely new, we want to hear your bright ideas.",
    },
    {
      src: "More than 90% of all NFT gaming secondary trading volume occurs on Magic Eden. We are passionate about supporting game creators and their communities. We’ve partnered with top gaming projects to launch Eden Games, a place for games to call home on Solana & Beyond",
    },
  ];
  const [wallet, setWallet] = React.useState(false);

  const openOrClose = () => {
    setWallet(!wallet);
  };
  return (
    <>
      <Box
        zIndex={wallet === true ? "100" : -100}
        opacity={wallet === true ? 1 : 0}
      >
        <ConnectWallet
          openClose={() => openOrClose()}
          wallet={wallet}
        ></ConnectWallet>
      </Box>
      <Menu></Menu>
      <Box w="100vw">
        <Box padding={"0 8rem"} mt="10rem">
          <Center flexDir={"column"} pos="absolute" w="calc(100vw - 16rem)">
            <Heading size={"3xl"} fontWeight="900">
              Welcome to Magic Eden
            </Heading>
            <Heading w="60%" mt="2rem">
              Your destination for discovery, expression, and ownership across
              digital cultures
            </Heading>
            <Center mt="2rem">
              <Button
                variant="first"
                onClick={() => router.push("/marketplace/popular")}
              >
                Explore Marketplace
              </Button>
              <Button
                variant="fifth"
                ml="1rem"
                onClick={() => router.push("/Launchpad/launches")}
              >
                Apply for Launchpad
              </Button>
            </Center>
          </Center>
          <Box>
            <Image
              src="/resources/shapes.svg"
              alt=""
              width={2500}
              height={550}
            />
          </Box>
          <Box display="grid" gridTemplateColumns={"28rem 28rem"}>
            {visit.map((item, key) => (
              <Box borderTop="1px solid #ffffff10" w="25rem" mt="6rem">
                <Heading size="2xl" mt="2rem">
                  {number[key].src}
                </Heading>
                <Heading color={"#e42575"} variant="h5" mt="2rem">
                  {visit[key].src}
                </Heading>
              </Box>
            ))}
          </Box>
          <Center mt="5rem">
            <Box
              w="50%"
              flexDir="column"
              display="flex"
              justifyContent={"center"}
            >
              <Heading fontWeight={900} opacity={0.7}>
                Magic Eden's Story
              </Heading>
              <Heading variant="h5" opacity={0.6} w="80%">
                After four friends discovered NFTs and its tremendous potential,
                Magic Eden was born. With backgrounds across crypto, DeFi,
                consumer internet companies and management consulting, they
                identified gaps in existing NFT marketplaces and created
                something new.
              </Heading>
            </Box>
            <Box w="50%" h="35rem">
              <Box display="flex">
                {avatar.map((item, key) => (
                  <Center flexDir={"column"} ml="1rem">
                    <Image
                      src={avatar[key].src}
                      alt=""
                      width={250}
                      height={280}
                    />
                    <Center
                      mt="1rem"
                      color={active === key ? "#e42575" : "white"}
                      textDecoration={active === key ? "underline" : "none"}
                      onClick={() => setActive(key)}
                    >
                      {avatarname[key].src}
                    </Center>
                    <Center mt="1rem">{job[key].src}</Center>
                  </Center>
                ))}
              </Box>
              {avatar.map((item, key) => (
                <Box
                  pos="absolute"
                  mt="1rem"
                  mr="8rem"
                  opacity={key === active ? 1 : 0}
                >
                  <Button variant={"fifth"} h="3rem">
                    <Image src="/twitter.svg" alt="" width={20} height={20} />
                    <Box ml="5px" color="white">
                      {avatarsocial[key].src}
                    </Box>
                  </Button>
                  <Heading color={"#e42575"} variant="h5" mt="1rem">
                    {avatartext[key].src}
                  </Heading>
                </Box>
              ))}
            </Box>
          </Center>
          <Box h="10rem"></Box>
          {title.map((item, key) => (
            <Box display="flex" mt="5rem">
              <Box fontSize="1.5rem" color={"#e42575"} w="50%">
                {title[key].src}
              </Box>
              <Box w="40%">
                <Box>{text[key].src}</Box>
                <Button
                  variant="first"
                  mt="2rem"
                  onClick={() => router.push("/dashboard")}
                >
                  Apply for listing
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
        <Box w="100%" h="450px">
          <Image src="/end-bg.png" alt="" width={2500} height={450} />
        </Box>
      </Box>
    </>
  );
}
