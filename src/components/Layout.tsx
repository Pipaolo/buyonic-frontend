import { Flex, FlexProps } from "@chakra-ui/react";

interface IProps extends FlexProps {}

const Layout = ({ children, ...restProps }: IProps) => {
  return (
    <Flex w="full" h="100vh" {...restProps}>
      {children}
    </Flex>
  );
};

export default Layout;
