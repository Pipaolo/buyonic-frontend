import {
  Box,
  Flex,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const LandingFooter = () => {
  return (
    <Stack
      bgGradient={"linear(to-r, #252323, rgba(0,0,0, 0.72))"}
      w="full"
      p="4"
      direction={"column"}
      spacing={"4"}
    >
      <Grid templateColumns={"repeat(2,1fr)"}>
        <VStack align={"start"}>
          <Image src="/buyonic-logo-white.png" alt="" />
          <Text color={"white"} fontSize={"small"}>
            eCommerce website for aspiring Young Entrepeneur. Find resources to
            help you take advantage of ecommerce to get your business running
            despite the lockdown.
          </Text>
        </VStack>
      </Grid>
      <HStack
        align={"center"}
        color={"white"}
        justify="space-between"
        fontSize={"small"}
      >
        <Text>Privacy & Security</Text>
        <Text>© 2021 BUYONIC, Inc. All Rights Reserved.</Text>
        <Text>Terms and Conditions</Text>
      </HStack>
    </Stack>
  );
};

export default LandingFooter;
