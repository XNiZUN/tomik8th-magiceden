import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import ConnectWallet from "@/components/menu/wallet";

export default function Mywatchlist() {
  const [connect, setConnect] = React.useState(false);
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
      </Box>{" "}
      <Center
        h="calc(100vh - 80px)"
        w="calc(100vw - 80px)"
        flexDirection={"column"}
      >
        <Heading variant={"h4"}>
          Connect your wallet to view your watchlist
        </Heading>
        <Button
          variant="first"
          w="10rem"
          mt="1rem"
          onClick={() => {
            setConnect(!connect);
            setWallet(!wallet);
          }}
        >
          Connect Wallet
        </Button>
      </Center>
    </>
  );
}
