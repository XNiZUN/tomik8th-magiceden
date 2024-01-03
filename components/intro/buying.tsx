import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/react";
export default function Buying() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);

  return (
    <>
      <Box w="100%" display={"flex"} mt="15rem">
        <Box w="50%">
          <Heading size={"3xl"} w="25rem">
            Buying NFTs
          </Heading>
        </Box>
        <Box w="50%">
          <Heading size={"lg"}>How do I mint an NFT collection?</Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            The first and safest way is to use an existing launchpad like Magic
            Eden’s Launchpad. We employ safeguards like doxxing the founders,
            holding funds in escrow, and evaluating a collection’s legitimacy
            before helping them launch!
          </Heading>
          <Heading size="xs" mt="2rem">
            Here’s how you can use Magic Eden’s Launchpad:
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
                Hop on to our launchpad site here.
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
                Connect your wallet to Magic Eden.
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
                3
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Wait for the public mint or presale mint to start.
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
                4
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Once the countdown is over, MINT AWAY!{" "}
              </Heading>
            </Box>
          </Box>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            Note: Launchpad mints often are high-traffic mints which means that
            you’re competing for a chance to mint with a lot of people. Don’t be
            discouraged if you’re unable to mint. There’s always next time!
            <br />
            <br />
            The second way to mint is by minting on the NFT collection’s own
            official website. Join the NFT collection’s Discord server for more
            information.
          </Heading>
          <Heading size={"lg"} mt="5rem">
            How do I choose which NFT is for me?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            You’ll want to DYOR. Ideally, you will assess the project’s
            long-term strength which involves the core idea, the strength of its
            offering and whether the team will be able to deliver. But, you can
            always buy an NFT without doing any research. How degen of you! For
            those that want to do some research, here’s some questions to get
            you started:
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
                Hop on to our launchpad site here.
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
                Connect your wallet to Magic Eden.
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
                3
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Wait for the public mint or presale mint to start.
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
                4
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Once the countdown is over, MINT AWAY!{" "}
              </Heading>
            </Box>
          </Box>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            Note: Launchpad mints often are high-traffic mints which means that
            you’re competing for a chance to mint with a lot of people. Don’t be
            discouraged if you’re unable to mint. There’s always next time!
            <br />
            <br />
            The second way to mint is by minting on the NFT collection’s own
            official website. Join the NFT collection’s Discord server for more
            information.
          </Heading>
          <Heading size={"lg"} mt="7rem">
            How do I choose which NFT is for me?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            You’ll want to DYOR. Ideally, you will assess the project’s
            long-term strength which involves the core idea, the strength of its
            offering and whether the team will be able to deliver. But, you can
            always buy an NFT without doing any research. How degen of you! For
            those that want to do some research, here’s some questions to get
            you started:
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
                Hop on to our launchpad site here.
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
                Connect your wallet to Magic Eden.
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
                3
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Wait for the public mint or presale mint to start.
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
                4
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Once the countdown is over, MINT AWAY!{" "}
              </Heading>
            </Box>
          </Box>
          <Heading size={"lg"} mt="7rem">
            How do I buy an NFT on Magic Eden?
          </Heading>
          <Heading size={"lg"} mt="7rem">
            How do I stay safe while minting and buying NFTs?
          </Heading>
          <Heading variant={"h5"} opacity=".6" mt="1rem">
            Many individuals and projects are genuine but there are bad actors
            who rug or create cash grabs. But, you don’t have to fall prey to
            them.
          </Heading>
          <Heading size="xs" mt="2rem">
            Here are potential red flags to look out for:{" "}
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
                Be wary of accounts that have gathered massive amounts of
                followers in a span of a few days or weeks. However, this could
                also be a huge testament to the NFT collection itself. For
                example, they have great utility or huge hype behind a
                trustworthy team.
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
                Is the team doxxed? If not, are they transparent? Doxxing does
                not guarantee immunity from rugs but a team’s genuinity will set
                them apart. If the team is doxxed, whatever social media
                accounts they have shouldn’t have been created yesterday.
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
                3
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Is the art theirs or is it stolen? Did they get some random
                Fiverr artist to do it? What’s key here is how much time they’ve
                dedicated to building their NFT project. How much effort have
                they put in
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
                4
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Is the purpose of their NFT project clear? Copy pasta projects
                aren’t just lacking in creativity, they can easily be repurposed
                and may be a red flag since there’s a lack of innovation.
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
                5
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Do they use bots for their Twitter and Discord? Fake engagement
                is a big red flag.{" "}
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
                6
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Is it too good to be true? Are they making ridiculous promises?
                You gotta ask, where’s the money coming from?
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
                7
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                If you or others get banned for asking simple questions or
                wanting to find out more… That's a big red flag.
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
                8
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Are they paying for their marketing or is it organic? There’s
                nothing wrong with paying for marketing but if that’s all they
                do, that’s a giant red flag.
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
                9
              </Center>
              <Heading variant="h5" w="80%" ml="10px" opacity={".5"}>
                Is there a high mint price? For example, anything above 2 $SOL
                should be questioned. This can be justified if they’re
                delivering a high quality and unique NFT collection. If not,
                it’s likely a cash grab.{" "}
              </Heading>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
