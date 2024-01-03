import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
export default function Wallet() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);

  return (
    <>
      <Box w="100%" display={"flex"} mt="15rem">
        <Box w="50%">
          <Heading size={"3xl"} w="25rem">
            Wallet
          </Heading>
        </Box>
        <Box w="50%">
          <Heading size={"lg"}>What’s a wallet?</Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            We all know what banks manage, store and track your financial funds.
            A wallet is like a bank except you are the bank. You’re in charge of
            your funds. With that comes great responsibility but, have no fear,
            we cover how you can stay safe.
            <br />
            <br />A wallet is also a form of identification throughout the Web3
            space. Whatever you do in this space will involve your wallet. It’s
            your passport to all things web3. Your wallet is your access point
            to everything to do with NFTs: it is where you exchange tokens,
            purchase NFTs, and store these assets.
          </Heading>
          <Heading size={"lg"} mt="5rem">
            What types of wallets are out there?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            There are many different types of Solana wallets. On Magic Eden, you
            can connect to a variety of wallets. For beginners, we recommend
            Phantom wallet. These wallets are typically available as a browser
            extension and/or phone app, which you can easily connect to Magic
            Eden. With $SOL in your wallet, you’ll be able to buy NFTs.
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
          <Heading size={"lg"} mt="7rem">
            How do I get $SOL?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            ​​You can buy $SOL through crypto exchanges. On a crypto exchange,
            you’ll buy cryptocurrency in fiat. Here’s how to transfer $SOL from
            Binance to your Solana wallet.
          </Heading>
          <Heading size={"lg"} mt="7rem">
            I want my crypto to be well-protected. How do I practice wallet
            safety?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            Keep your seed phrase/private key to yourself. Do not give out your
            seed phrase (a.k.a secret recovery phrase). You should be the only
            person to know it. If anyone else has your seed phrase, they will
            have access to your wallet and can drain your funds.
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
          <Heading size="xs" mt="2rem">
            Use a burner wallet when minting on a platform other than Launchpad:
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt=".5rem">
            Some sites can be shady and will attempt to steal your funds when
            you connect your wallet to them. By using a burner wallet, you’re
            limiting your risk of exposure.{" "}
          </Heading>{" "}
          <Heading size="xs" mt="2rem">
            Use a burner wallet when minting on a platform other than Launchpad:
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt=".5rem">
            Some sites can be shady and will attempt to steal your funds when
            you connect your wallet to them. By using a burner wallet, you’re
            limiting your risk of exposure.{" "}
          </Heading>{" "}
          <Heading size="xs" mt="2rem">
            Here’s how to use a burner wallet:
          </Heading>
          <Box
            w="100%"
            rounded={"2rem"}
            bgColor="#1c1326"
            mt="3rem"
            border={"1px solid #ffffff10"}
            padding="1rem"
          >
            <Box display={"flex"}>
              <Center
                w="40px"
                h="40px"
                bgColor={"#00000060"}
                rounded="10px"
                fontWeight="900"
              >
                1
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Within a single crypto wallet, you can have many different
                wallets that use the same recovery phrase/private key. When
                minting NFTs, it is best practice to use a burner wallet, which
                is a temporary wallet used only to mint. By using a burner
                wallet, youre limiting your risk of exposure to shady websites
                that attempt to steal your funds when your wallet is connected
                to them.
              </Heading>
            </Box>
            <Box display={"flex"} mt="2rem">
              <Center
                w="40px"
                h="40px"
                bgColor={"#00000060"}
                rounded="10px"
                fontWeight="900"
              >
                2
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Once youve created your burner wallet within your main wallet,
                pre-fund your burner wallet with the exact amount of $SOL you
                require for minting. After minting, transfer your newly minted
                NFTs to your main wallet.
              </Heading>
            </Box>
          </Box>
          <Heading size="xs" mt="2rem">
            Check the URL:{" "}
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt=".5rem">
            Always check the URL of any sites you visit to make sure it is the
            official link. Bookmark the sites that you regularly visit. Phishing
            websites pose as the real website but are identical fake sites
            attempting to steal your private information.
          </Heading>
        </Box>
      </Box>
    </>
  );
}
