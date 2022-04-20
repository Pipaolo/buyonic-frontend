import Head from "next/head";
import { AdminPrivateLayout } from "../../../components/PrivateLayout";

const MerchantsPage = () => {
  return (
    <AdminPrivateLayout>
      <Head>
        <title>Merchants</title>
      </Head>
    </AdminPrivateLayout>
  );
};

export default MerchantsPage;
