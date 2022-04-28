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
import { selectSignup, selectSignupFormSelector } from "../signupSlice";
import { SignUpForm, SignUpFormSchema } from "../types";
import { signupStepSubmitted } from "../signupSlice/actions";

const SignUpFormStep2 = () => {
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
    dispatch(
      signupStepSubmitted({
        data,
        step: 3,
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
      <Grid templateColumns={"repeat(3,1fr)"} gap={"4"} mt={"4"}>
        <GridItem colSpan={3}>
          <Heading fontSize={"xl"}>Address Details</Heading>
          <Divider h={"2"} />
        </GridItem>
        {/* Address Fields */}
        <GridItem colSpan={3}>
          <TextField
            {...register("line1")}
            id="line1"
            placeholder="Enter line 1 address"
            label="Line 1"
            colorScheme={"primary"}
            error={errors.line1}
          />
        </GridItem>
        <GridItem colSpan={3}>
          <TextField
            {...register("line2")}
            id="line2"
            placeholder="Enter line 2 address"
            label="Line 2"
            error={errors.line2}
          />
        </GridItem>
        <GridItem colSpan={[3, 1]}>
          <TextField
            {...register("barangay")}
            id="barangay"
            placeholder="Enter barangay"
            label="Barangay"
            error={errors.barangay}
          />
        </GridItem>
        <GridItem colSpan={[3, 1]}>
          <TextField
            {...register("province")}
            id="province"
            placeholder="Enter province"
            label="Province"
            error={errors.province}
          />
        </GridItem>
        <GridItem colSpan={[3, 1]}>
          <TextField
            {...register("postalCode")}
            id="postalCode"
            placeholder="Enter postal code"
            label="Postal Code"
            error={errors.postalCode}
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

export default SignUpFormStep2;
