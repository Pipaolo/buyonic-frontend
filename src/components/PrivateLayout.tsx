import { CircularProgress, FlexProps } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "./Layout";
interface IProps extends FlexProps {}
const PrivateLayout = ({ children, ...restProps }: IProps) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.replace("/auth/login");
    }
  }, [router, session]);

  switch (session.status) {
    case "authenticated":
      return <Layout {...restProps}>{children}</Layout>;
    case "unauthenticated":
      return <></>;
    case "loading":
      return (
        <Layout alignItems={"center"} justifyContent={"center"}>
          <CircularProgress isIndeterminate />
        </Layout>
      );
  }
};

export default PrivateLayout;
