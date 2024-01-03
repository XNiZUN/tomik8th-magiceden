import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export default function Coin() {
  const [active, setActive] = React.useState(0);
  const [head, setHead] = React.useState([
    "Solana",
    "Etherium",
    "Polygon",
    "Show",
  ]);
  const headimg = [
    {
      src: "/solana-logo.svg",
    },
    {
      src: "/etherium.svg",
    },
    {
      src: "/polygon.svg",
    },
    {
      src: "",
    },
  ];
  return (
    <>
      <Center
        border="1px solid #ffffff10"
        rounded={"2rem"}
        ml="1rem"
        h="2.5rem"
      >
        {head.map((item, key) => (
          <Center
            key={key}
            onClick={() => setActive(key)}
            padding="5px"
            rounded={"3rem"}
            bgColor={active === key ? "#e42575" : "none"}
            h="2.5rem"
          >
            <Center
              bgColor={key === 3 ? "" : "#24182F"}
              rounded="100%"
              w={key === 3 ? 0 : "20px"}
              h="20px"
            >
              <Image
                src={headimg[key].src}
                alt=""
                height={key === 3 ? 0 : 15}
                width={key === 3 ? 0 : 15}
              />
            </Center>
            <Heading size="xs" ml="5px">
              {item}
            </Heading>
          </Center>
        ))}
      </Center>
    </>
  );
}
