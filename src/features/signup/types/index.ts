import * as z from "zod";
import { phMobileNumberRegex } from "../../../consts";

const requiredString = z.string().min(1, { message: "This field is required" });

export const SignUpFormSchema = z
  .object({
    firstName: requiredString,
    lastName: requiredString,
    middleName: z.string(),
    birthDate: requiredString,
    email: requiredString.email(),
    mobileNumber: requiredString.regex(new RegExp(phMobileNumberRegex), {
      message: "Invalid mobile number",
    }),

    // Address fields
    line1: requiredString,
    line2: z.string(),
    barangay: requiredString,
    province: requiredString,
    country: requiredString,
    postalCode: requiredString,

    // Credentials
    username: requiredString,
    password: requiredString.min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: requiredString,

    // Shop Details
    shopName: requiredString,
    shopDescription: requiredString,
  })
  .partial()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

export type SignUpForm = z.infer<typeof SignUpFormSchema>;
