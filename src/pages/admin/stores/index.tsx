import Head from "next/head";
import { AdminPrivateLayout } from "../../../components/PrivateLayout";

const StoresPage = () => {
  return (
    <AdminPrivateLayout>
      <Head>
        <title>Stores</title>
      </Head>
    </AdminPrivateLayout>
  );
};

export default StoresPage;
