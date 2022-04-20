import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import LandingHowItWorksForm from "./LandingHowItWorksForm";

interface HowItWorksStepCardProps {
  title: string;
  subTitles: string[];
  icon: string;
}

const HowItWorksStepCard = (props: HowItWorksStepCardProps) => {
  const renderSubTitles = () => {
    return props.subTitles.map((subTitle, i) => {
      return (
        <Text key={i} fontSize={"smaller"}>
          ✔{subTitle}
        </Text>
      );
    });
  };

  return (
    <VStack>
      <Box
        bg={"primary"}
        rounded={"full"}
        shadow={"md"}
        h="24"
        w="24"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"4"}
      >
        <Image objectFit={"fill"} src={props.icon} alt="" />
      </Box>
      <Text fontWeight={"semibold"}>{props.title}</Text>
      <VStack align={"start"}>{renderSubTitles()}</VStack>
    </VStack>
  );
};

const LandingHowItWorks = () => {
  return (
    <Stack
      p={"8"}
      w={"full"}
      bgGradient={"linear(to-r, #FFFFFF, #FBF3CF)"}
      spacing={"8"}
    >
      <HStack justify={"space-between"}>
        <Text>HOW IT WORKS</Text>
        <Text display={["none", "block"]}>BUYONIC</Text>
      </HStack>
      <VStack justify={"start"} align="start" p={"4"} fontSize={["xl", "2xl"]}>
        <Text>
          Looking for a <b>SIGN?</b>
        </Text>
        <Text>
          This is the sign yo<b>u</b> are waiting for!
        </Text>
        <Text>
          Opportunity for as<b>p</b>iring Students & Young Entrepeneurs
        </Text>
      </VStack>
      <Divider />
      <Stack
        justify={"space-evenly"}
        align={["center", "start"]}
        direction={["column", "row"]}
      >
        <HowItWorksStepCard
          title="Store Registration"
          subTitles={[
            "Determine your eligibility for Buyonic",
            "Upload required documents",
            "Submit your Buyonic Seller Application",
          ]}
          icon="/how-it-works-1-icon.svg"
        />
        <HowItWorksStepCard
          title="Application Review"
          subTitles={["Document Verification", "Brand Suitability Assessment"]}
          icon="/how-it-works-2-icon.svg"
        />
        <HowItWorksStepCard
          title="Store Setup"
          subTitles={[
            "Input Warehouse & Return Address",
            "Decorate your store",
            "Upload products of approved brands",
          ]}
          icon="/how-it-works-3-icon.svg"
        />
        <HowItWorksStepCard
          title="Store Launch"
          subTitles={["Start selling and grow your brand!"]}
          icon="/how-it-works-4-icon.svg"
        />
      </Stack>
      <LandingHowItWorksForm />
    </Stack>
  );
};

export default LandingHowItWorks;
