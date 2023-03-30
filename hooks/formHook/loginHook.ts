import axios from "axios";
import { FormEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addUserInfos } from "../../redux/store/reducers/user.reducer";

export const formHandler = (
  userEmailInput: { current: HTMLInputElement | null },
  userPasswordInput: { current: HTMLInputElement | null }
) => {
  const dispatch = useDispatch();
  const handleLogin = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const signupData = {
        email: userEmailInput.current?.value,
        password: userPasswordInput.current?.value,
      };
      const response = await axios.post(
        "http://localhost:4000/auth",
        signupData
      );
      if (response) {
        dispatch(addUserInfos(response.data));
      }
    },
    [userEmailInput, userPasswordInput]
  );
  return handleLogin;
};
