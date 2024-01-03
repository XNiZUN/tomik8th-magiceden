import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export default function Hours() {
  const [now, setNow] = React.useState(false);

  const hours = [
    {
      src: "1 hour",
    },
    {
      src: "6 hours",
    },
    {
      src: "24 hours",
    },
    {
      src: "7 days",
    },
    {
      src: "30 days",
    },
  ];
  return (
    <>
      <Box>
        <Button
          variant={"fourth"}
          border="1px solid #ffffff10"
          w="12rem"
          onClick={() => (now === false ? setNow(true) : setNow(false))}
        >
          <Heading size="sm">Last 24 Hours</Heading>
          <Box
            ml="35px"
            transform={now === true ? "rotate(0deg)" : "rotate(180deg)"}
          >
            <Image src={"/menu/down-arrow.png"} alt="" height={15} width={15} />
          </Box>
        </Button>
        <Box
          pos="absolute"
          w={now === true ? "12rem" : 0}
          h={now === true ? "" : 0}
          rounded={"10px"}
          bgColor="#1c1326"
          overflow={"hidden"}
          zIndex="1"
          mt="10px"
        >
          {hours.map((item, key) => (
            <Box
              padding="8px"
              _hover={{
                bgColor: "#ffffff10",
              }}
            >
              Last {hours[key].src}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
