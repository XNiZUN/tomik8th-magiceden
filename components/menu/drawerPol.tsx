import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Links from "../button/links";

export default function DrawerPol(props: any) {
  const Marketplace = () => {
    const [acc1, setAcc1] = React.useState([" Popular collections"]);
    return (
      <>
        {acc1.map((item, key) => (
          <Box
            mt="10px"
            color={page === key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(key);
              key === 0 ? router.push("/polygon/popularPol") : null;
            }}
            _hover={{
              color: "white",
            }}
          >
            {item}
          </Box>
        ))}
      </>
    );
  };
  const Creators = () => {
    const [acc3, setAcc3] = React.useState([
      "Apply for listing",
      "Apply for whitelist",
      "Apply for launchpad",
    ]);
    return (
      <>
        {acc3.map((item, key) => (
          <Box
            mt="10px"
            color={page === 1 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(1 + key);
              key === 0 ? router.push("/dashboard") : null;
              key === 1 ? router.push("/dashboard") : null;
              key === 2 ? router.push("/dashboard") : null;
            }}
            _hover={{
              color: "white",
            }}
          >
            {item}
          </Box>
        ))}
      </>
    );
  };
  const Resources = () => {
    const [acc3, setAcc3] = React.useState([
      "About Magic Eden",
      "MagicDAO",
      " Blog",
      "Trust & Safety",
    ]);
    return (
      <>
        {acc3.map((item, key) => (
          <Box
            mt="10px"
            color={page === 4 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(4 + key);
              key === 0 ? router.push("/Resources/aboutMagic") : null;
              key === 1 ? router.push("/Resources/MagicDAO") : null;
              key === 2 ? router.push("/Resources/blog") : null;
              key === 3 ? router.push("/Resources/trust") : null;
            }}
            _hover={{
              color: "white",
            }}
          >
            {item}
          </Box>
        ))}
      </>
    );
  };

  const [page, setPage] = React.useState(9);
  const [active2, setActive2] = React.useState(10);
  const [now, setNow] = React.useState(false);
  const [now2, setNow2] = React.useState(10);
  const [menu, setMenu] = React.useState([
    "Marketplace",
    "Creators",
    "Resources",
    "Intro to NFTs",
  ]);

  const direction: any = [
    {
      src: <Marketplace></Marketplace>,
    },
    {
      src: <Creators></Creators>,
    },
    {
      src: <Resources></Resources>,
    },
    {
      src: "intro",
    },
  ];
  const img = [
    {
      src: "/menu/marketplace.svg",
    },
    {
      src: "/menu/creators.svg",
    },
    {
      src: "/menu/intro.svg",
    },
    {
      src: "/menu/resources.svg",
    },
  ];
  let router = useRouter();

  return (
    <>
      <Box pos="fixed" top="0px" zIndex={"300"}>
        <Box
          w="100vw"
          h="80px"
          bgColor="#120c18"
          display={"flex"}
          alignItems="center"
          padding="0px 16px"
        >
          <Box onClick={() => router.push("/polygon")}>
            <Image
              src="/polygon-logo.svg"
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
              onClick={() => (now === false ? setNow(true) : setNow(false))}
              mt={now === true ? "2.5rem" : 0}
            >
              <Box rounded="100%" bgColor={"#1C1326"}>
                <Image src={"/polygon.svg"} alt="" height={20} width={20} />
              </Box>
              <Box ml="10px" w="5rem">
                Polygon
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
              onClick={() => router.push("/")}
            >
              <Box rounded="100%" bgColor={"#1C1326"} ml="10px">
                <Image
                  src={"/menu/small-logo.svg"}
                  alt=""
                  height={20}
                  width={20}
                />
              </Box>
              <Box ml="20px" w="5rem">
                All Chains
              </Box>
            </Box>
          </Box>

          <Box w="5vw"></Box>
          <Button variant={"third"} rounded="3rem" w="300px" h="44px">
            <Image src="/menu/search.png" alt="" width={20} height={20} />
            <Box ml="20px" opacity={0.3}>
              Search Creators and Collections
            </Box>
          </Button>
          <Box w="33vw"></Box>
          <Button variant={"first"} w="9rem" h="40px">
            <Image src="/menu/wallet.png" alt="" width={20} height={20} />
            Connect Wallet
          </Button>
        </Box>
      </Box>
      <Box
        w="80px"
        h="calc(100vh - 80px)"
        borderRight="1px solid #ffffff10"
        padding="0px 1rem"
        overflow={"scroll"}
        bgColor="#120c18"
        pos="fixed"
        top="80px"
        zIndex={-300}
      >
        {menu.map((item, key) => (
          <Box
            display={"flex"}
            alignItems="center"
            w={active2 === key ? "3rem" : "12rem"}
            h="3rem"
            padding={"12px"}
            rounded="5px"
            bgColor={active2 === key ? "#ffffff10" : "transparent"}
            mt="5px"
            key={key}
          >
            <Image src={img[key].src} alt="" height={20} width={20} />
          </Box>
        ))}
        <Box h="47vh"></Box>
        <Center w="3rem" h="3rem" borderTop="1px solid #ffffff20">
          <Image src={"/menu/footer.svg"} alt="" height={20} width={20} />
        </Center>
      </Box>
      <Box
        w="230px"
        h="calc(100vh - 80px)"
        borderRight="1px solid #ffffff10"
        padding="0px 1rem"
        overflow={"scroll"}
        bgColor="#120c18"
        pos="fixed"
        top="80px"
        _hover={{
          zIndex: 300,
          opacity: 1,
        }}
        opacity="0"
      >
        {menu.map((item, key) => (
          <Box>
            <Box
              display={"flex"}
              alignItems="center"
              w={"12rem"}
              h="3rem"
              padding={"12px"}
              rounded="5px"
              _hover={{
                bgColor: "#ffffff10",
              }}
              bgColor={active2 === key ? "#ffffff10" : "transparent"}
              onClick={() => {
                active2 === key ? setActive2(10) : setActive2(key);
                now2 === key ? setNow2(10) : setNow2(key);
                key === 3 ? router.push("/intro") : null;
              }}
              mt="5px"
              key={key}
            >
              <Image src={img[key].src} alt="" height={20} width={20} />
              <Box opacity={1} ml="10px" w="10rem">
                {item}
              </Box>
              <Box
                ml="10px"
                transform={active2 === key ? "rotate(0deg)" : "rotate(180deg)"}
                opacity={key === 3 ? 0 : 1}
              >
                <Image
                  src={"/menu/down-arrow.png"}
                  alt=""
                  height={15}
                  width={15}
                />
              </Box>
            </Box>
            <Box h={now2 === key ? "" : 0} overflow="hidden">
              <Box ml="40px">{direction[key].src}</Box>
            </Box>
          </Box>
        ))}
        <Box h="15vh"></Box>
        <Links></Links>
      </Box>
    </>
  );
}
