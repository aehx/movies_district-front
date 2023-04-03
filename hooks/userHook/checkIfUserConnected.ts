import { useEffect } from "react";
import { useRouter } from "next/router";
/**
 * if the condition is true, redirect user to the path
 * @param condition  boolean
 * @param redirectTo redirection path
 * @return void
 */

export const redirectIfCondition = (
  condition: boolean,
  redirectTo: string
): void => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      if (condition) {
        router.push(redirectTo);
      }
    })();
  }, [condition]);
};
