import Image from "next/image";
import { Box, Center, Square, Button, Heading } from "@chakra-ui/react";
import React from "react";
import End from "../../components/menu/end";
import Menu from "@/components/menu/menu";
import { NameArray } from "@/components/informations/name";
import { useRouter } from "next/router";
export default function AboutL() {
  const [now, setNow] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const array1 = new Array(22).fill(null);
  const array2 = new Array(4).fill(null);
  const [head, setHead] = React.useState(["Next 7days", "Coming Soon", "Live"]);
  const array = [
    {
      src: "Unmatched Exposure",
    },
    {
      src: "Leading cross-chain mint change",
    },
    {
      src: "Magic Eden List",
    },
    {
      src: "Long Term Partnership",
    },
    {
      src: "Secondary Trading",
    },
  ];
  const router = useRouter();
  return (
    <>
      <Menu></Menu>
      <Box w="100vw" padding={"1rem"} mt="80px" pos="relative">
        <Center w="100%" flexDirection={"column"} h="80vh">
          <Center w="calc(100vw - 80px)" pos={"absolute"} h="90vh">
            <Image
              src="/launches/aboutBG.svg"
              alt=""
              width={1200}
              height={1000}
            />
          </Center>
          <Heading size="3xl" fontWeight="500">
            Magic Eden Launchpad
          </Heading>
          <Heading fontSize={"1.5rem"} opacity=".8" mt="3rem">
            Your cross-chain launch partner on Solana, Polygon, or Ethereum
          </Heading>
          <Button
            variant={"first"}
            mt="3rem"
            onClick={() => router.push("/Launchpad/launches")}
          >
            Apply for launchpad
          </Button>
          <Heading size={"sm"} opacity=".6" mt="3.5rem">
            Learn more about our vetting process
          </Heading>
        </Center>
        <Center w="100%">
          {array.map((item, key) => (
            <Center w="20%">
              <Center
                w="14rem"
                h="9rem"
                border={"1px solid #ffffff10"}
                rounded="1rem"
              >
                <Center
                  bgColor={"#1c1929"}
                  w="2.5rem"
                  h="2.5rem"
                  fontSize={"1rem"}
                  rounded="5px"
                >
                  {key + 1}
                </Center>
                <Heading size="md" w="9rem">
                  {array[key].src}
                </Heading>
              </Center>
            </Center>
          ))}
        </Center>
        <Box padding={"8rem"}>
          <Box display={"flex"}>
            <Box w="50%">
              <Heading size={"3xl"} fontWeight="500">
                Helping Polygon, Ethereum & Solana creators gain exposure across
                chains
              </Heading>
              <Button
                variant={"first"}
                fontSize="18px"
                mt="2rem"
                onClick={() => router.push("/Launchpad/launches")}
              >
                Apply for Launchpad
              </Button>
            </Box>
            <Box w="40%" ml="1rem">
              <Box>
                <Heading size={"xl"} color={"#E42575"} mt=".5rem">
                  90 percent
                </Heading>
                <Heading size="md">
                  Market share of daily traded SOL NFT volume
                </Heading>

                <Heading variant={"h5"} opacity=".5" mt=".5rem">
                  ME's secondary trading marketplace is where liquidity lives.
                  We are growing steadily in Polygon, and we're just getting
                  started on Ethereum.
                </Heading>
              </Box>
              <Box mt="5rem">
                <Heading size={"xl"} color={"#E42575"} mt=".5rem">
                  10 milloin
                </Heading>
                <Heading size="md">Unique user sessions per month</Heading>

                <Heading variant={"h5"} opacity=".5" mt=".5rem">
                  Give your collection exposure to the fastest growing and most
                  active audience of NFT collectors and enthusiasts across
                  Solana, Polygon, and Ethereum.
                </Heading>
              </Box>
              <Box mt="5rem">
                <Heading size={"xl"} color={"#E42575"} mt=".5rem">
                  14 minutes
                </Heading>
                <Heading size="md">Average session duration</Heading>

                <Heading variant={"h5"} opacity=".5" mt=".5rem">
                  Our active users spend a longer time on our marketplace than
                  other leading web2 and web3 marketplaces.
                </Heading>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} mt="10rem">
            <Box w="50%">
              <Heading size={"2xl"} fontWeight="500">
                Leading cross-chain mint tech & comprehensive mentorship
              </Heading>
              <Heading size={"lg"} fontWeight="300" mt="2rem">
                Magic Eden has the most experienced team with over 350+ projects
                launched, more than all other launchpads!
              </Heading>
              <Button
                variant={"first"}
                fontSize="18px"
                mt="2rem"
                onClick={() => router.push("/Launchpad/launches")}
              >
                Apply for Launchpad
              </Button>
            </Box>
            <Box w="40%" ml="1rem">
              <Heading size={"xl"} color={"#E42575"} mt=".5rem">
                Unparalleled capabilities across Solana, Polygon, and Ethereum!
              </Heading>

              <Box mt="5rem">
                <Heading size="lg">Pre-launch advisory</Heading>
              </Box>
              <Box mt="5rem">
                <Heading size="lg">Launch</Heading>
              </Box>
              <Box mt="5rem">
                <Heading size="lg">Post-launch support</Heading>
              </Box>
            </Box>
          </Box>

          <Box display={"flex"} mt="10rem">
            <Box w="50%">
              <Heading size={"3xl"} fontWeight="500" color="#E42575">
                Magic Eden List
              </Heading>
              <Heading size="3xl" fontWeight="500" mt="2rem">
                Our Whitelist
              </Heading>
              <Heading size="3xl" fontWeight="500" mt="2rem">
                Management Tool
              </Heading>
              <Heading variant={"h3"} mt="2rem">
                Simplify presale whitelist collection for creators across
                Solana, Polygon, & Ethereum
              </Heading>
              <Button
                variant={"first"}
                fontSize="18px"
                mt="2rem"
                onClick={() => router.push("/Launchpad/launches")}
              >
                Apply for Launchpad
              </Button>
            </Box>
            <Box w="40%" ml="1rem">
              <Box>
                <Heading>Feature on our</Heading>
                <Heading color={"#E42575"} mt=".5rem">
                  Drop Calendar
                </Heading>
                <Heading variant={"h4"} opacity=".6" mt=".5rem">
                  Our Drop Calendar garners over 300,000 impressions monthly.
                  With a default mode showing both chains, tap into a
                  cross-chain audience.
                </Heading>
              </Box>
              <Box mt="5rem">
                <Heading>Dedicated Carousel on our homepage</Heading>

                <Heading variant={"h4"} opacity=".6" mt=".5rem">
                  With a guaranteed 400,000 impressions on our Whitelist
                  Opportunities Carousel, your mint will get extra exposure to
                  our users.
                </Heading>
              </Box>
              <Box mt="5rem">
                <Heading>Custom Report</Heading>

                <Heading variant={"h4"} opacity=".6" mt=".5rem">
                  Track key metrics like the number of registrants and
                  impressions with a report generated just for your whitelist
                  page.
                </Heading>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} mt="10rem">
            <Box w="50%">
              <Heading size={"2xl"} fontWeight="500">
                Long-term partnership with Magic Eden{" "}
              </Heading>
              <Heading size={"lg"} fontWeight="300" mt="2rem">
                We are a full-service shop. A partnership means support pre,
                during, and post-launch.
              </Heading>
              <Button
                variant={"first"}
                fontSize="18px"
                mt="2rem"
                onClick={() => router.push("/Launchpad/launches")}
              >
                Apply for Launchpad
              </Button>
            </Box>
            <Box w="40%" ml="1rem">
              <Box>
                <Heading size="xl">Pre-public access</Heading>
                <Heading variant={"h4"} opacity=".6">
                  Gain access to features before the public
                </Heading>
              </Box>
              <Box mt="5rem">
                <Heading size="xl">Full service onboarding</Heading>
                <Heading variant={"h4"} opacity=".6">
                  Onboarding is a breeze with all your future mints
                </Heading>
              </Box>
              <Box mt="5rem">
                <Heading size="xl">Magic Edens network</Heading>
                <Heading variant={"h4"} opacity=".6">
                  Get access to our network of thought-leaders, influencers, and
                  team members
                </Heading>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} mt="10rem">
            <Box w="50%">
              <Heading size={"2xl"} fontWeight="500">
                Secondary Trading on Magic Eden{" "}
              </Heading>
              <Heading size={"lg"} fontWeight="300" mt="2rem">
                On average, our launchpads generate 10x the trade volume
                compared to other launchpads.
              </Heading>
              <Button
                variant={"first"}
                fontSize="18px"
                mt="2rem"
                onClick={() => router.push("/Launchpad/launches")}
              >
                Apply for Launchpad
              </Button>
            </Box>
            <Box w="40%" ml="1rem">
              <Box w="30rem" h="20rem">
                <Image
                  src="/launches/aboutL.png"
                  alt=""
                  width={470}
                  height={390}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Center padding={"2rem"}>
          <Box
            w="80rem"
            border="1px solid #e42575"
            rounded={"2rem"}
            padding="2rem 3rem"
          >
            <Heading variant={"h5"} opacity=".6">
              We re committed to vetting all Launchpad projects
            </Heading>
            <Heading size="4xl" mt="2rem">
              Trust & Accountability
            </Heading>
            <Heading size="lg" mt="2rem">
              Safety signals
            </Heading>
            <Heading size={"lg"} mt="2rem" mb="2rem">
              Project quality signals
            </Heading>
          </Box>
        </Center>
        <Box padding={"1.5rem"} display="flex" alignItems={"center"}>
          <Heading w="30%">Launchpad drops</Heading>
          <Center
            border="1px solid #ffffff10"
            w="18rem"
            rounded={"2rem"}
            ml="10px"
            h="2.5rem"
          >
            {head.map((item, key) => (
              <Center key={key} w="6rem" onClick={() => setActive(key)}>
                <Box
                  w="6rem"
                  pos="absolute"
                  bgColor={"#E42575"}
                  rounded="3rem"
                  h="2.5rem"
                  opacity={active === key ? 1 : 0}
                  zIndex="-1"
                ></Box>

                <Heading variant={"h6"}> {item}</Heading>
              </Center>
            ))}
          </Center>
          <Center justifyContent={"flex-end"} w="50%">
            <Button
              variant={"fourth"}
              border="1px solid #ffffff10"
              ml="10px"
              onClick={() => (now === false ? setNow(true) : setNow(false))}
            >
              <Heading size="sm">See All</Heading>
            </Button>
          </Center>
        </Box>
        <Box overflow={"scroll"} h="70vh">
          <Box display="flex" width={"120rem"}>
            {array1.map((item, key) => (
              <Box w="15rem">
                <Box
                  key={key}
                  w="14rem"
                  h="16rem"
                  border="1px solid #ffffff10"
                  mt="10px"
                  rounded={"1rem"}
                  _hover={{
                    transform: "translateY(-6px)",
                    transition: "all .5s",
                    opacity: ".8",
                  }}
                >
                  <Box rounded={"1rem"} overflow="hidden" h="160px">
                    <Image
                      src="/auctions/3rd.jpeg"
                      alt=""
                      width={250}
                      height={200}
                    />
                  </Box>
                  <Center mt="10px">
                    <Heading size="xs">{NameArray[key].src}</Heading>
                  </Center>
                  <Center>
                    <Heading variant={"h6"} color="#E42575">
                      Bullyz Crew
                    </Heading>
                  </Center>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Center flexDirection={"column"}>
          <Heading size={"2xl"}>The smoothest onboarding experience</Heading>
          <Center mt="4rem">
            {array2.map((item, key) => (
              <Box
                w="17rem"
                h="17rem"
                rounded={"1rem"}
                border="1px solid #e42575"
                ml="20px"
                key={key}
                padding="1.5rem"
              >
                <Center
                  bgColor={"#1c1929"}
                  w="3rem"
                  h="2rem"
                  fontSize={"1rem"}
                  rounded="5px"
                >
                  {key + 1}
                </Center>
                <Heading variant={"h3"} mt="1rem">
                  Onboard
                </Heading>
                <Heading variant={"h5"} opacity=".6" mt="1rem">
                  Fill out onboarding form, private doxxing via 3rd party KYC
                </Heading>
              </Box>
            ))}
          </Center>
        </Center>
        <Box w="100%" h="30rem" mt="10rem" display="flex" padding={"1rem"}>
          <Box display={"flex"} flexDirection={"column"} w="40%" pl="5rem">
            <Heading variant={"h1"} w="90%">
              How would like your NFT listed?
            </Heading>
            <Heading variant={"h5"} opacity=".6">
              We let creators decide how and when they want to list.
            </Heading>
          </Box>
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems="flex-end"
            w="30%"
          >
            <Box w="13rem" h="20rem" borderTop={"1px solid #e42575"}>
              <Heading size="md" mt="1rem">
                Post-mint reveal
              </Heading>
              <Heading variant={"h5"} opacity={0.6} mt=".6rem">
                Mask your NFT with a common image card. Reveal after the mint is
                over.
              </Heading>
            </Box>
            <Box w="13rem" borderTop={"1px solid #e42575"}>
              <Heading size="md" mt="1rem">
                Reciept
              </Heading>
              <Heading variant={"h5"} opacity={0.6} mt=".6rem">
                Freeze trading by issuing a receipt with 100% royalties. After
                mint, airdrop the NFT or set up a free claim.
              </Heading>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems="flex-end"
            w="30%"
          >
            <Box w="13rem" h="20rem" borderTop={"1px solid #e42575"} mr="4rem">
              <Heading size="md" mt="1rem">
                List immediately
              </Heading>
              <Heading variant={"h5"} opacity={0.6} mt=".6rem">
                Signal confidence to the market by making your NFT tradable upon
                mint.
              </Heading>
            </Box>
            <Box w="13rem" borderTop={"1px solid #e42575"} mr="4rem">
              <Heading size="md" mt="1rem">
                Work with us
              </Heading>
              <Heading variant={"h5"} opacity={0.6} mt=".6rem">
                Do you have something else in mind? Work with us to come up with
                a bespoke solution.
              </Heading>
            </Box>
          </Box>
        </Box>
        <Center padding={"3rem 7rem "}>
          <Center w="100%" h="15rem" border="1px solid #e42575" rounded="2rem">
            <Heading size={"4xl"}>Ready to Launch?</Heading>
            <Button variant={"first"} fontSize="18px" ml="20px">
              Apply for launchpad
            </Button>
          </Center>
        </Center>
        <End></End>
      </Box>
    </>
  );
}
