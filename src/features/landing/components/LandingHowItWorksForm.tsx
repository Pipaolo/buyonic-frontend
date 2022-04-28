import {
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useMergeRefs,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import * as z from "zod";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectLanding, subscriptionSubmitted } from "../landingSlice";
import {
  LandingSubscriptionForm,
  LandingSubscriptionFormSchema,
} from "../types";
import { useEffect, useRef } from "react";

const LandingHowItWorksForm = () => {
  const { isLoading, success, scrollToForm } = useAppSelector(selectLanding);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formRef = useRef<HTMLFormElement & HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LandingSubscriptionForm>({
    resolver: zodResolver(LandingSubscriptionFormSchema),
  });

  const onSubmit = async (data: LandingSubscriptionForm) => {
    dispatch(subscriptionSubmitted(data));
  };

  useEffect(() => {
    /// Show modal here when the form has been successfully submitted
    if (!isLoading && success) {
      onOpen();
    }
  }, [success, isLoading, onOpen]);

  useEffect(() => {
    if (scrollToForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [scrollToForm, formRef]);

  return (
    <Stack
      ref={formRef}
      w={["full"]}
      maxW={[null, "md"]}
      justify={["center"]}
      alignSelf={"center"}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading textAlign={"center"}>INTERESTED?</Heading>
      <Text textAlign={["center"]}>SUBSCRIBE TO US TO GET STARTED!</Text>
      <Divider />
      <VStack>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            colorScheme={"primary"}
            placeholder={"Enter name"}
            bg={"rgba(0,0,0,0.8)"}
            color={"white"}
            _focus={{
              borderColor: "primary",
            }}
            {...register("name")}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            colorScheme={"primary"}
            placeholder={"Enter email address"}
            bg={"rgba(0,0,0,0.8)"}
            color={"white"}
            _focus={{
              borderColor: "primary",
            }}
            {...register("email")}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <Button type={"submit"} bg={"primary"} w={"full"} disabled={isLoading}>
          {isLoading ? (
            <CircularProgress isIndeterminate color={"primary"} size={"2rem"} />
          ) : (
            "Subscribe"
          )}
        </Button>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank you!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Thank you for subscribing to <b>Buyonic</b>, we will send you up
              to date information about the app and the future of the platform.
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default LandingHowItWorksForm;
