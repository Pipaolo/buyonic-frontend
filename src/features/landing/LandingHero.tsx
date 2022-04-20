import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const LandingHero = () => {
  return (
    <Flex
      h="100vh"
      position={"relative"}
      w="full"
      bgRepeat="no-repeat"
      bgColor={"rgba(0,0,0,0.5)"}
      bgBlendMode={"multiply"}
      bgImage={"/hero-bg.png"}
      bgPosition={"center"}
      bgSize={"cover"}
      px={["4", "8", "24"]}
      py={["0", null, "24", "36"]}
    >
      <VStack
        w={["full", null, "50%"]}
        h="full"
        justifyContent={["center", null, "end"]}
        alignItems={"start"}
        spacing="4"
      >
        <Heading
          fontSize={["5xl", "5xl"]}
          color={"primary"}
          w="full"
          textAlign={["center", "left"]}
        >
          BUYONIC
        </Heading>
        <Text
          color={"white"}
          fontSize={["lg", null, "xl"]}
          textAlign={["center", "left"]}
        >
          Afraid to start your small business because you’re a student or young
          entrepeneur? You’ve come to the right website!
        </Text>

        <Button w={"full"} bg="primary">
          Start Selling Now!
        </Button>
      </VStack>
    </Flex>
  );
};

export default LandingHero;
