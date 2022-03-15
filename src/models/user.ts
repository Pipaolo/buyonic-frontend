import * as z from "zod";

export const userSchema = z.object({
  username: z.string(),
  id: z.number(),
});
export const authUserSchema = userSchema
  .extend({
    accessToken: z.string(),
  })
  .optional();

export type User = z.infer<typeof userSchema>;
export type AuthUser = z.infer<typeof authUserSchema>;
