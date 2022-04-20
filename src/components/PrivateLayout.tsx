import { CircularProgress, FlexProps, VStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SideNavigationBar from "../features/sideNavigation/SideNavigationBar";
import { useIsAdmin } from "../utils/auth";
import AppBar from "./AppBar";
import Layout from "./Layout";
interface IProps extends FlexProps {}

export const AdminPrivateLayout = ({ children, ...restProps }: IProps) => {
  const { isAdmin, isLoading } = useIsAdmin();

  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !isAdmin) {
      // router.replace("/unauthorized");
    }
  }, [isAdmin, , isLoading, router]);

  if (!isAdmin) {
    return <></>;
  }

  return <PrivateLayout {...restProps}> {children}</PrivateLayout>;
};

export const PrivateLayout = ({ children, ...restProps }: IProps) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.replace("/auth/login");
    }
  }, [router, session]);

  switch (session.status) {
    case "unauthenticated":
      return <></>;
    case "loading":
      return (
        <Layout alignItems={"center"} justifyContent={"center"}>
          <CircularProgress isIndeterminate />
        </Layout>
      );
    case "authenticated":
      return (
        <Layout flexDir={"row"} {...restProps}>
          <SideNavigationBar />
          <VStack w={"full"} align="normal">
            <AppBar />
            {children}
          </VStack>
        </Layout>
      );
  }
};
