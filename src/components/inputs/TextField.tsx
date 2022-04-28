import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface IProps extends UseFormRegisterReturn {
  error?: FieldError;
  label?: string;
}

const TextField = forwardRef<InputProps & IProps, "input">((props, ref) => {
  const { label, error, type, ...restProps } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const renderPasswordToggleButton = () => {
    return (
      <IconButton
        aria-label="Toggle Password Visibility"
        size={"sm"}
        icon={isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      />
    );
  };

  const renderInput = () => {
    if (type === "password") {
      return (
        <InputGroup>
          <Input
            bg={"white"}
            colorScheme={"primary"}
            _focus={{
              borderColor: "primary",
            }}
            type={isPasswordVisible ? "text" : "password"}
            {...restProps}
            ref={ref}
          />
          <InputRightElement>{renderPasswordToggleButton()}</InputRightElement>
        </InputGroup>
      );
    }
    return (
      <Input
        bg={"white"}
        colorScheme={"primary"}
        _focus={{
          borderColor: "primary",
        }}
        type={type}
        {...restProps}
        ref={ref}
      />
    );
  };

  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <FormLabel htmlFor={restProps.name}>{label ?? "[LABEL]"}</FormLabel>
      )}
      {renderInput()}
      <FormErrorMessage>{error?.message ?? ""}</FormErrorMessage>
    </FormControl>
  );
});

export default TextField;
