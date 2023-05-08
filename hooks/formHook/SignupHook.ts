import { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfos } from "../../redux/store/reducers/user.reducer";
import axios from "axios";

const formHandler = (
  usernameInput: { current: HTMLInputElement | null },
  userEmailInput: { current: HTMLInputElement | null },
  userPasswordInput: { current: HTMLInputElement | null }
) => {
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      try {
        setLoading(true);
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
        setLoading(false);
        dispatch(addUserInfos(response.data));
      } catch (e: any) {
        console.log(e);
        const data = e.response.data;
        setError(data.errors[0]?.msg || "User already exist");
      }
    },
    [usernameInput, userPasswordInput, userEmailInput]
  );
  return { handleSubmit, error, loading };
};
export default formHandler;
