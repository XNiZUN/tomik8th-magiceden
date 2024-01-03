import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Menu from "@/components/menu/menu";
import { menuimg } from "../informations/menuimg";
import { useRouter } from "next/router";
import Links from "../button/links";

export default function Drawer() {
  const Marketplace = () => {
    const [acc1, setAcc1] = React.useState([
      " Popular collections",
      " Drop calendar",
      " Auctions",
    ]);
    return (
      <>
        {acc1.map((item, key) => (
          <Box
            mt="10px"
            color={page === key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(key);
              key === 0 ? router.push("/marketplace/popular") : null;
              key === 1 ? router.push("/marketplace/drop") : null;
              key === 2 ? router.push("/marketplace/auctions") : null;
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
  const Insights = () => {
    const [acc2, setAcc2] = React.useState(["Stats", "My watchlist"]);
    return (
      <>
        {acc2.map((item, key) => (
          <Box
            mt="10px"
            color={page === 3 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(3 + key);
              key === 0 ? router.push("/Insights/stats") : null;
              key === 1 ? router.push("/Insights/mywatchlist") : null;
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
  const Magic = () => {
    const [acc3, setAcc3] = React.useState(["Whitelists"]);
    return (
      <>
        {acc3.map((item, key) => (
          <Box
            mt="10px"
            color={page === 5 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(5 + key);
              router.push("/Magic/whitelist");
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
  const Launchpad = () => {
    const [acc3, setAcc3] = React.useState(["Launches", "About"]);
    return (
      <>
        {acc3.map((item, key) => (
          <Box
            mt="10px"
            color={page === 6 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(6 + key);
              key === 0 ? router.push("/Launchpad/launches") : null;
              key === 1 ? router.push("/Launchpad/aboutL") : null;
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
  const Games = () => {
    const [acc3, setAcc3] = React.useState(["Home", "All Games"]);
    return (
      <>
        {acc3.map((item, key) => (
          <Box
            mt="10px"
            color={page === 8 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(8 + key);
              key === 0 ? router.push("/Games/homeG") : null;
              key === 1 ? router.push("/Games/allgames") : null;
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
            color={page === 10 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(10 + key);
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
  const Intro = () => {
    const [acc3, setAcc3] = React.useState([]);
    return (
      <>
        {acc3.map((item, key) => (
          <Box
            mt="10px"
            color={page === 13 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(13 + key);
              router.push("/intro");
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
      "Trust & Safety",
    ]);
    return (
      <>
        {acc3.map((item, key) => (
          <Box
            mt="10px"
            color={page === 14 + key ? "#E42575" : "#ffffff80"}
            onClick={() => {
              setPage(14 + key);
              key === 0 ? router.push("/Resources/aboutMagic") : null;
              key === 1 ? router.push("/Resources/MagicDAO") : null;
              key === 2 ? router.push("/Resources/trust") : null;
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

  const [page, setPage] = React.useState(23);
  const [active2, setActive2] = React.useState(10);
  const [now2, setNow2] = React.useState(10);
  const [menu, setMenu] = React.useState([
    "Marketplace",
    "Insights",
    "Magic Eden List",
    "Launchpad",
    "Eden Games",
    "Creators",
    "Intro to NFTs",
    "Resources",
  ]);
  const direction: any = [
    {
      src: <Marketplace></Marketplace>,
    },
    {
      src: <Insights></Insights>,
    },
    {
      src: <Magic></Magic>,
    },
    {
      src: <Launchpad></Launchpad>,
    },
    {
      src: <Games></Games>,
    },
    {
      src: <Creators></Creators>,
    },
    {
      src: <Intro></Intro>,
    },
    {
      src: <Resources></Resources>,
    },
  ];
  let router = useRouter();

  return (
    <>
      <Box
        w="80px"
        h="calc(100vh - 80px)"
        borderRight="1px solid #ffffff10"
        padding="0px 1rem"
        overflow={"scroll"}
        bgColor="#09080d"
        pos="fixed"
        top="80px"
        zIndex={0}
        pointerEvents="none"
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
            <Image src={menuimg[key].src} alt="" height={20} width={20} />
          </Box>
        ))}
        <Box h="7vh"></Box>
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
        bgColor="#09080d"
        pos="fixed"
        top="80px"
        _hover={{
          zIndex: 300,
          opacity: 1,
        }}
        zIndex="0"
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
                key === 6 ? router.push("/intro") : null;
              }}
              mt="5px"
              key={key}
            >
              <Image src={menuimg[key].src} alt="" height={20} width={20} />
              <Box opacity={1} ml="10px" w="10rem" fontSize={"14px"}>
                {item}
              </Box>
              <Box
                ml="10px"
                transform={active2 === key ? "rotate(0deg)" : "rotate(180deg)"}
                opacity={key === 6 ? 0 : 1}
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
        <Links></Links>
      </Box>
      <Menu></Menu>
    </>
  );
}
