import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectSideNavigation,
  toggleSideNavigation,
} from "../features/sideNavigation/sideNavigationSlice";

const AppBar = () => {
  const sideNavigation = useAppSelector(selectSideNavigation);
  const dispatch = useAppDispatch();
  const { data, status } = useSession();
  const user = data?.user;

  const onLogoutPressed = async () => {
    await signOut();
  };
  const onToggleSideNavigationPressed = () => {
    dispatch(toggleSideNavigation(!sideNavigation.isVisible));
  };

  return (
    <Flex
      bg="secondary"
      p={"4"}
      h="appbar"
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Box
        h="full"
        display={"flex"}
        alignItems="center"
        cursor={"pointer"}
        transition="all"
        transitionDuration={"400ms"}
        rounded="lg"
        onClick={onToggleSideNavigationPressed}
        _hover={{
          ringColor: "primary",
          ring: "2",
        }}
      >
        <Icon as={HiMenu} h="8" w="8" color={"white"} />
      </Box>
      <Button
        variant="link"
        color="primary"
        alignItems={"center"}
        justifyContent="center"
        gap="1"
      >
        <Text fontWeight={"bold"} as="span">
          {user?.username}
        </Text>
      </Button>
    </Flex>
  );
};

export default AppBar;
