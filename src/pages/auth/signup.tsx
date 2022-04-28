import { Box, HStack, Progress, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { persistor } from "../../app/store";
import AppBar from "../../components/AppBar";
import Layout from "../../components/Layout";
import SignUpFormStep1 from "../../features/signup/components/SignUpFormStep1";
import SignUpFormStep2 from "../../features/signup/components/SignUpFormStep2";
import SignUpFormStep3 from "../../features/signup/components/SignUpFormStep3";
import {
  selectSignup,
  signupStepUpdated,
} from "../../features/signup/signupSlice";

const SignUpPage: NextPage = () => {
  const { step, totalSteps } = useAppSelector(selectSignup);

  const currentProgress = useMemo(() => {
    return (step / totalSteps) * 100;
  }, [step, totalSteps]);

  const renderForm = useCallback(() => {
    switch (step) {
      case 1:
        return <SignUpFormStep1 />;
      case 2:
        return <SignUpFormStep2 />;
      case 3:
        return <SignUpFormStep3 />;
    }
    return <Box />;
  }, [step]);

  return (
    <Layout h={"100vh"} spacing={0}>
      <AppBar />
      <VStack
        p={"4"}
        justify={"center"}
        align={"center"}
        bgSize={"cover"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        bgImage={"/sign-up-bg.png"}
        flex={"1"}
      >
        <VStack>
          <Progress
            rounded={"xl"}
            color={"primary"}
            fill={"primary"}
            w={"full"}
            value={currentProgress}
          />
          {renderForm()}
        </VStack>
      </VStack>
    </Layout>
  );
};

export default SignUpPage;
