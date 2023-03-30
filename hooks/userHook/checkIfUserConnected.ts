import { useRouter } from "next/router";
import { useEffect } from "react";

export const redirectIfUserConnected = (
  user: {
    username: string;
    accessToken: string;
    refreshToken: string;
  } | null
) => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      if (user) {
        const token = user && "accessToken" in user && user.accessToken;
        if (token) {
          router.push("/");
        }
      }
    })();
  }, [user]);
};
