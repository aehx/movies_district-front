import { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfos } from "../../redux/store/reducers/user.reducer";
import axios from "axios";

const formHandler = (
  usernameInput: { current: HTMLInputElement | null },
  userEmailInput: { current: HTMLInputElement | null },
  userPasswordInput: { current: HTMLInputElement | null }
) => {
  const [error, setError] = useState<null | { error: string }>(null);
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        event.preventDefault();
        const signupData = {
          username: usernameInput.current?.value,
          email: userEmailInput.current?.value,
          password: userPasswordInput.current?.value,
        };
        const response = await axios.post(
          "https://movies-district-back.vercel.app/auth/signup",
          signupData
        );
        dispatch(addUserInfos(response.data));
      } catch (e: any) {
        setError({ error: e.response.data?.errors[0]?.msg });
      }
    },
    [usernameInput, userPasswordInput, userEmailInput]
  );
  return { handleSubmit, error };
};
export default formHandler;
