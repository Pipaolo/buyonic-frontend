import { theme as defaultTheme, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "primary",
        },
      },
    },
  },
  fonts: {
    ...defaultTheme.fonts,
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  sizes: {
    ...defaultTheme.sizes,
    appbar: "4rem",
    drawer: "16rem",
  },
  colors: {
    primary: "#FCCF0A",
    secondary: "#4A3000",
  },
});

export default theme;
