import * as z from "zod";

export const LandingSubscriptionFormSchema = z.object({
  email: z.string().min(1, { message: "This field is required" }).email(),
  name: z.string().min(1, { message: "This field is required" }),
});

export type LandingSubscriptionForm = z.infer<
  typeof LandingSubscriptionFormSchema
>;
