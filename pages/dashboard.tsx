import { Box, Button, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  const [active, setActive] = React.useState(0);
  const collections = [
    {
      src: "Drafts",
    },
    {
      src: "Submissions",
    },
    {
      src: "Reviewed",
    },
    {
      src: "Listed",
    },
    {
      src: "Rejects",
    },
  ];
  const announcements = [
    {
      src: "Approved",
    },
    {
      src: "Drafts",
    },
    {
      src: "Pending",
    },
    {
      src: "Rejected",
    },
    {
      src: "Archived",
    },
  ];
  return (
    <>
      <Box padding={"2rem 8rem"}>
        <Box w="100%" display={"flex"} alignItems="center">
          <Image src="/dashboard-logo.png" alt="" height={60} width={60} />
          <Box w="80%"></Box>
          <Heading size="xs">Dashboard</Heading>
          <Heading size="xs" ml="1rem">
            Sign Out
          </Heading>
        </Box>
        <Box display={"flex"} mt="4rem">
          <Box
            mr="1rem"
            borderBottom={active === 0 ? "1px solid #e42575" : "0px solid"}
            onClick={() => setActive(0)}
          >
            Collections
          </Box>
          <Box
            mr="1rem"
            borderBottom={active === 1 ? "1px solid #e42575" : "0px solid"}
            onClick={() => setActive(1)}
          >
            Whitelists
          </Box>
          <Box
            mr="1rem"
            borderBottom={active === 2 ? "1px solid #e42575" : "0px solid"}
            onClick={() => setActive(2)}
          >
            Announcements
          </Box>
        </Box>
        <Box
          padding={active === 0 ? "3rem 1rem" : 0}
          h={active === 0 ? "" : 0}
          w={active === 0 ? "" : 0}
          overflow="hidden"
        >
          <Box display={"flex"}>
            <Box
              display={"flex"}
              padding="10px"
              bgColor="#111827"
              rounded="10px"
            >
              {collections.map((item, key) => (
                <Box margin={"10px"}>{collections[key].src}</Box>
              ))}
            </Box>
            <Box w="35%"></Box>
            <Button variant="first">Create a whitelist</Button>
            <Button variant="first" ml="1rem">
              Create New Collection
            </Button>
          </Box>
        </Box>
        <Box
          padding={active === 1 ? "3rem 1rem" : 0}
          h={active === 1 ? "" : 0}
          w={active === 1 ? "" : 0}
          overflow="hidden"
        >
          <Box display={"flex"}>
            <Heading>Whitelists(0)</Heading>
            <Box w="55%"></Box>
            <Button variant="first">Create New Announcement</Button>
          </Box>
        </Box>
        <Box
          padding={active === 2 ? "3rem 1rem" : 0}
          h={active === 2 ? "" : 0}
          w={active === 2 ? "" : 0}
          overflow="hidden"
        >
          <Box display={"flex"}>
            <Box
              display={"flex"}
              padding="10px"
              bgColor="#111827"
              rounded="10px"
            >
              {announcements.map((item, key) => (
                <Box margin={"10px"}>{announcements[key].src}</Box>
              ))}
            </Box>
            <Box w="35%"></Box>
            <Button variant="first">Create New Announcement</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
