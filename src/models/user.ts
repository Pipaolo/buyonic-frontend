import * as z from "zod";

export const userSchema = z.object({
  username: z.string().optional(),
  id: z.number().optional(),
});
export const authUserSchema = userSchema
  .extend({
    accessToken: z.string(),
    roles: z.string().array().optional(),
  })
  .optional();

export type User = z.infer<typeof userSchema>;
export type AuthUser = z.infer<typeof authUserSchema>;
