import axios from "axios";
import { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfos } from "../../redux/store/reducers/user.reducer";

export const formHandler = (
  userEmailInput: { current: HTMLInputElement | null },
  userPasswordInput: { current: HTMLInputElement | null }
) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<null | boolean>(false);
  const handleLogin = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        setLoading(true);
        event.preventDefault();
        const signinData = {
          email: userEmailInput.current?.value,
          password: userPasswordInput.current?.value,
        };
        const response = await axios.post(
          "https://movies-district-back.vercel.app/auth",
          signinData
        );
        if ("error" in response.data) {
          setError(response.data.error);
          setLoading(false);
        }
        setLoading(false);
        dispatch(addUserInfos(response.data));
      } catch (e: any) {
        if ("matchError" in e.response.data) {
          setError(e.response.data?.matchError);
          setLoading(false);
        } else {
          setError(e.response.data?.errors[0]?.msg);
          setLoading(false);
        }
      }
    },
    [userEmailInput, userPasswordInput]
  );
  return { handleLogin, error, loading };
};
