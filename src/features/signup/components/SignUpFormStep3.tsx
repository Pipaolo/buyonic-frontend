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
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import TextField from "../../../components/inputs/TextField";
import {
  selectSignup,
  selectSignupFormSelector,
  signupSubmitted,
} from "../signupSlice";
import { SignUpForm, SignUpFormSchema } from "../types";

const SignUpFormStep3 = () => {
  const currentFormData = useAppSelector(selectSignupFormSelector);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      ...currentFormData,
    },
  });

  const onSubmit = (data: SignUpForm) => {
    dispatch(signupSubmitted(data));
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
      <Grid templateColumns={"repeat(3,1fr)"} gap={"4"} mt={"4"}>
        <GridItem colSpan={3}>
          <Heading fontSize={"xl"}>Shop Details</Heading>
          <Divider h={"2"} />
        </GridItem>
        <GridItem colSpan={[3]}>
          <TextField
            {...register("shopName")}
            id="shopName"
            placeholder="Enter shop name"
            label="Shop Name"
            error={errors.shopName}
          />
        </GridItem>
        <GridItem colSpan={[3]}>
          <TextField
            {...register("shopDescription")}
            id="shopDescription"
            placeholder="Enter shop description"
            label="Shop Description"
            error={errors.shopDescription}
          />
        </GridItem>
      </Grid>
      <Spacer />
      <Button type={"submit"} bg={"primary"}>
        Submit
      </Button>
    </Stack>
  );
};

export default SignUpFormStep3;
