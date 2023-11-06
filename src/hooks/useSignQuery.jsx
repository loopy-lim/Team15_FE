import { useMutation } from "@tanstack/react-query";
import { signIn as signInFromAPi } from "../apis/sign.apis";

export const useSignIn = (config) => {
  const { mutate: signIn } = useMutation({
    ...config,
    mutationFn: signInFromAPi,
  });
  return { signIn };
};
