import { Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const UnauthorizedPage = () => {
  return (
    <Layout align={"center"} justify="center">
      <Text fontWeight={"bold"} fontSize="2xl">
        You do not have enough permissions to access this page.
      </Text>
    </Layout>
  );
};

export default UnauthorizedPage;
