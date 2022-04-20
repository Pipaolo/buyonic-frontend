import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AuthUser } from "../models/user";

declare module "next-auth/jwt" {
  interface JWT {
    user: AuthUser;
  }
}
declare module "next-auth" {
  interface User {
    id: number;
    username: string;
    accessToken: string;
    roles: string[];
  }

  interface Session {
    user: AuthUser;
  }
}
