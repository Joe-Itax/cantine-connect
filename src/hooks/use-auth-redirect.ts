"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthUserQuery } from "./use-auth-user";

type RedirectParams = {
  ifAuthenticatedParent?: string;
  ifAuthenticatedAgent?: string;
  ifUnauthenticated?: string;
};

export function useAuthRedirect(params: RedirectParams) {
  const { ifAuthenticatedParent, ifAuthenticatedAgent, ifUnauthenticated } =
    params;
  const router = useRouter();
  const { data: user, isLoading } = useAuthUserQuery();

  useEffect(() => {
    if (isLoading) return;

    try {
      if (
        !ifAuthenticatedParent &&
        !ifAuthenticatedAgent &&
        !ifUnauthenticated
      ) {
        console.warn(
          "useAuthRedirect devrait être utilisé avec au moins un paramètre"
        );
      }

      if (user && user.role === "parent" && ifAuthenticatedParent) {
        router.replace(ifAuthenticatedParent);
      }

      if (
        user &&
        (user.role === "agent" || user?.role === "admin") &&
        ifAuthenticatedAgent
      ) {
        router.replace(ifAuthenticatedAgent);
      }

      if (!user && ifUnauthenticated) {
        router.replace(ifUnauthenticated);
      }
    } catch (error) {
      console.error("Redirect error:", error);
    }
  }, [
    user,
    isLoading,
    router,
    ifAuthenticatedParent,
    ifAuthenticatedAgent,
    ifUnauthenticated,
  ]);

  return { user, isLoading };
}
