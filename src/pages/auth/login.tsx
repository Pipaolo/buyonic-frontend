import { Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import LoginForm from "../../features/login/components/LoginForm";

const LoginPage: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  if (session.status === "authenticated" || session.status === "loading") {
    return <div></div>;
  }

  return (
    <Layout bg="gray.800" alignItems="center" justifyContent={"center"}>
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
    </Layout>
  );
};

export default LoginPage;
