import { Flex, FlexProps, Stack, StackProps } from "@chakra-ui/react";
import AppBar from "./AppBar";

interface IProps extends StackProps {}

const Layout = ({ children, ...restProps }: IProps) => {
  return (
    <Stack w="full" h="100vh" bg="primary" flexDir={"column"} {...restProps}>
      {children}
    </Stack>
  );
};

export default Layout;
