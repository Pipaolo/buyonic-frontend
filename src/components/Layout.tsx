import { Flex, FlexProps } from "@chakra-ui/react";
import AppBar from "./AppBar";

interface IProps extends FlexProps {}

const Layout = ({ children, ...restProps }: IProps) => {
  return (
    <Flex w="full" h="100vh" bg="primary" flexDir={"column"} {...restProps}>
      {children}
    </Flex>
  );
};

export default Layout;
