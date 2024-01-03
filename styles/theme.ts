import { extendTheme } from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
export const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#09080d",
        color: "white",
        fontSize: "16px",
        fontFamily: "sans-serif",
      },
    },
  },
  color: {
    brand: {
      primary: "#E42575",
    },
  },
  components: {
    Button: {
      variants: {
        first: {
          bgColor: "#E42575",
          rounded: "5px",
          padding: "8px",
          _hover: { opacity: 0.8 },
          fontWeight: 600,
          fontSize: "14px",
        },
        second: {
          border: "1px solid #ffffff10",
          rounded: "5px",
          padding: "8px",
          _hover: { opacity: 0.9, bgColor: "#24182f" },
          fontWeight: 600,
          fontSize: "14px",
        },
        third: {
          border: "1px solid #ffffff20",
          bgColor: "#24182F",
          rounded: "5px",
          padding: "8px",
          _hover: { opacity: 1, borderColor: "#ffffff10" },
          fontWeight: 500,
          fontSize: "14px",
        },
        fourth: {
          rounded: "5px",
          padding: "12px",
          _hover: { bgColor: "#ffffff10" },
          fontWeight: 500,
          fontSize: "14px",
        },
        fifth: {
          color: "#E42575",
          border: "1px solid #E42575",
          rounded: "5px",
          padding: "8px",
          _hover: { opacity: 0.8 },
          fontWeight: 600,
          fontSize: "14px",
        },
        sixth: {
          border: "1px solid #ffffff10",
          rounded: "3px",
          padding: "3px",
          _hover: { bgColor: "#24182f" },
          fontWeight: 600,
          fontSize: "14px",
        },
      },
    },
    Heading: {
      variants: {
        h1: {
          fontWeight: 900,
          fontSize: "3rem",
        },
        h2: {
          fontWeight: 900,
          fontSize: "2rem",
        },
        h3: {
          fontWeight: 700,
          fontSize: "1.5rem",
        },
        h4: {
          fontWeight: 600,
          fontSize: "1.25rem",
        },
        h5: {
          fontWeight: 500,
          fontSize: "1rem",
        },
        h6: {
          fontWeight: 400,
          fontSize: ".8rem",
        },
      },
    },
    Input: {
      variants: {
        main: {
          bgColor: "transparent",
          border: "0px",
          w: "100%",
          _hover: {
            border: "0px",
          },
        },
      },
    },
  },
});
