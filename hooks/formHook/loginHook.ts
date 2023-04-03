import axios from "axios";
import { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfos } from "../../redux/store/reducers/user.reducer";

export const formHandler = (
  userEmailInput: { current: HTMLInputElement | null },
  userPasswordInput: { current: HTMLInputElement | null }
) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<null | { error: string }>(null);
  const handleLogin = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        event.preventDefault();
        const signinData = {
          email: userEmailInput.current?.value,
          password: userPasswordInput.current?.value,
        };
        const response = await axios.post(
          "https://movies-district-back.vercel.app/auth",
          signinData
        );
        dispatch(addUserInfos(response.data));
      } catch (e: any) {
        if ("matchError" in e.response.data) {
          setError({ error: e.response.data?.matchError });
        } else {
          setError({ error: e.response.data?.errors[0]?.msg });
        }
      }
    },
    [userEmailInput, userPasswordInput]
  );
  return { handleLogin, error };
};
