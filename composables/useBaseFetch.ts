import { getCookieAuth } from "~/utils";

export interface IJwt {
  token: string;
}

export async function useBaseFetch<T = any>(request: string, opts: any) {
  const config = useRuntimeConfig();
  const { tokenClientEncrypt } = getCookieAuth();

  let token;
  if (tokenClientEncrypt) {
    token = tokenClientEncrypt;
  }

  const { data, pending, error, refresh } = await useFetch<T>(request, {
    baseURL: config.public.baseURL,
    ...(token && {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    ...opts,
  });
  const errorCode = error.value?.data?.error_code;
  if (errorCode === "TOKEN_EXPIRED") {
    // TOKEN_EXPIRED
  }
  if (error.value?.data?.errorMessage?.message === "Unauthorized") {
    // router.push("/");
  }

  return { data, pending, error, refresh };
}
