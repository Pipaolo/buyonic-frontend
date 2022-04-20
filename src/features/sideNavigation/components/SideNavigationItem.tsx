import { Box, HStack, Text } from "@chakra-ui/react";
import { SideNavigationRoute } from "../types";

interface IProps {
  route: SideNavigationRoute;
}

const SideNavigationItem = ({ route }: IProps) => {
  const { isActive, name, path, children } = route;
  return (
    <Box
      margin="none"
      as="button"
      w="full"
      transition={"all"}
      transitionDuration="300ms"
      _hover={{
        bg: "secondary",
        opacity: "0.8",
      }}
      py="4"
      display="flex"
    >
      <Box h="full" bg="red.200" w="1" />
      <HStack w="full" align={"center"} justify={"center"}>
        <Text color="white" fontWeight={"medium"}>
          {name}
        </Text>
      </HStack>
    </Box>
  );
};

export default SideNavigationItem;
