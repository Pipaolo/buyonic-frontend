import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import TextField from "../../../components/inputs/TextField";

import { selectSignupFormSelector, signupStepSubmitted } from "../signupSlice";
import { SignUpForm, SignUpFormSchema } from "../types";

const SignUpFormStep1 = () => {
  const dispatch = useAppDispatch();
  const currentFormData = useAppSelector(selectSignupFormSelector);
  const { handleSubmit, register, formState } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      ...currentFormData,
    },
  });
  const { errors } = formState;

  const onSubmit = (data: SignUpForm) => {
    dispatch(
      signupStepSubmitted({
        data,
        step: 2,
      })
    );
  };

  return (
    <Stack
      as="form"
      p={"4"}
      bg={"white"}
      shadow={"xl"}
      rounded={"xl"}
      onSubmit={handleSubmit(onSubmit)}
      justify={"start"}
      h={"full"}
    >
      <Heading>Sign up as BUYONIC Seller</Heading>
      <Grid templateColumns={"repeat(3,1fr)"} gap={"6"} mt={"4"}>
        <GridItem colSpan={3}>
          <Heading fontSize={"xl"}>Seller Details</Heading>
          <Divider h={"2"} />
        </GridItem>
        <GridItem colSpan={[3, 1]}>
          <TextField
            {...register("firstName")}
            id="firstName"
            placeholder="Enter first name"
            label="First Name"
            error={errors.firstName}
          />
        </GridItem>
        <GridItem colSpan={[3, 1]}>
          <TextField
            {...register("middleName")}
            placeholder="Enter middle name"
            label="Middle Name"
            error={errors.middleName}
          />
        </GridItem>
        <GridItem colSpan={[3, 1]}>
          <TextField
            {...register("lastName")}
            id="lastName"
            placeholder="Enter last name"
            label="Last Name"
            error={errors.lastName}
          />
        </GridItem>
        <GridItem colSpan={[3]}>
          <TextField
            {...register("email")}
            id="email"
            placeholder="Enter email"
            label="Email"
            error={errors.email}
          />
        </GridItem>
        <GridItem colSpan={[3]}>
          <TextField
            {...register("mobileNumber")}
            id="mobileNumber"
            placeholder="Enter mobile number (e.g 09123456789)"
            label="Mobile Number"
            error={errors.mobileNumber}
          />
        </GridItem>
        <GridItem colSpan={[3]}>
          <TextField
            {...register("password")}
            id="password"
            placeholder="Enter password"
            label="Password"
            type="password"
            error={errors.password}
          />
        </GridItem>
        <GridItem colSpan={[3]}>
          <TextField
            {...register("confirmPassword")}
            id="confirmPassword"
            placeholder="Enter password again"
            label="Confirm Password"
            type="password"
            error={errors.confirmPassword}
          />
        </GridItem>
      </Grid>
      <Spacer />
      <Button type={"submit"} bg={"primary"}>
        Next
      </Button>
    </Stack>
  );
};

export default SignUpFormStep1;
