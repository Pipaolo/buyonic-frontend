import { Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import LoginForm from "../../features/login/components/LoginForm";
import { useIsAdmin } from "../../utils/auth";

const LoginPage: NextPage = () => {
  const { status } = useSession();
  const isAdmin = useIsAdmin();

  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      if (isAdmin) {
        router.replace("/admin");
        return;
      }
      router.replace("/");
    }
  }, [status, router, isAdmin]);

  switch (status) {
    case "loading":
      return <div></div>;
  }

  return (
    <Flex
      h="100vh"
      bg="primary"
      w="full"
      alignItems="center"
      justifyContent={"center"}
    >
      <Flex
        textAlign={"center"}
        flexDir="column"
        bg="white"
        p="4"
        rounded="lg"
        shadow={"md"}
        gap={"4"}
      >
        <Text fontSize={"2xl"} fontWeight="bold">
          Login
        </Text>
        <LoginForm />
      </Flex>
    </Flex>
  );
};

export default LoginPage;
