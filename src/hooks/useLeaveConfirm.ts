import { useRouter } from "next/router";
import { FormState } from "react-hook-form";
import React from "react";

interface IProps<T> {
  formState: FormState<T>;
  message?: string;
}
const defaultMessage = "Are you sure to leave without save?";

export function useLeaveConfirm<T>({
  formState,
  message = defaultMessage,
}: IProps<T>) {
  const router = useRouter();

  const onRouteChangeStart = React.useCallback(() => {
    if (formState.isDirty) {
      if (window.confirm(message)) {
        return true;
      }
      throw "Abort route change by user's confirmation.";
    }
  }, [formState, message]);

  React.useEffect(() => {
    router.events.on("routeChangeStart", onRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
    };
  }, [onRouteChangeStart, router]);

  return;
}
