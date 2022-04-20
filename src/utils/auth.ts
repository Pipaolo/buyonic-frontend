import { getSession, useSession } from "next-auth/react";

/**
 *
 * checks if the currently logged in user is an admin,
 * using the useSession hook from next-auth
 *
 * @returns {boolean}
 */
export const useIsAdmin = (): {
  isAdmin: boolean;
  isLoading: boolean;
} => {
  const { data: sessionData, status } = useSession();

  let data = {
    isAdmin: false,
    isLoading: status === "loading",
  };

  if (!sessionData) return data;
  if (!sessionData.user) return data;
  const user = sessionData.user;

  data.isAdmin = !!user.roles?.find((role) => role === "ADMIN");

  return data;
};
