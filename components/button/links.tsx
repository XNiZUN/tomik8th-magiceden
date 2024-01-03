import { Button, Center, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Links() {
  const links = [
    {
      src: "Blog",
    },
    {
      src: "TikTok",
    },
    {
      src: "Discord",
    },
    {
      src: "Youtube",
    },
    {
      src: "Twitter",
    },
    {
      src: "Instagram",
    },
  ];
  const linksimg = [
    {
      src: "/social/blog.svg",
    },
    {
      src: "/social/tiktok.svg",
    },
    {
      src: "/social/discord.svg",
    },
    {
      src: "/social/youtube.svg",
    },
    {
      src: "/twitter.svg",
    },
    {
      src: "/social/instagram.svg",
    },
  ];
  let router = useRouter();

  return (
    <>
      {" "}
      <Center
        borderTop="1px solid #ffffff20"
        display={"grid"}
        gridTemplateColumns="50% 50%"
        pt="2rem"
      >
        {links.map((item, key) => (
          <Button
            variant={"second"}
            margin="5px"
            h="2rem"
            onClick={() => (key === 0 ? router.push("/Resources/blog") : null)}
          >
            <Image src={linksimg[key].src} alt="" width={20} height={20} />
            <Heading fontSize={"12px"} ml="5px">
              {links[key].src}
            </Heading>
          </Button>
        ))}
      </Center>
    </>
  );
}
