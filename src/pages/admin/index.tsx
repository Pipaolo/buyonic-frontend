import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { AdminPrivateLayout } from "../../components/PrivateLayout";

const AdminPage = () => {
  return (
    <AdminPrivateLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box flex="1" bg="red" m={"0"}></Box>
    </AdminPrivateLayout>
  );
};

export default AdminPage;
