import axios from "axios";
import { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfos } from "../../redux/store/reducers/user.reducer";

const formHandler = (
  usernameInput: { current: HTMLInputElement | null },
  userEmailInput: { current: HTMLInputElement | null },
  userPasswordInput: { current: HTMLInputElement | null }
) => {
  const [error, setError] = useState(null);
  const [fieldError, setFieldError] = useState({});
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const signupData = {
        username: usernameInput.current?.value,
        email: userEmailInput.current?.value,
        password: userPasswordInput.current?.value,
      };
      const response = await axios.post(
        "http://localhost:4000/users",
        signupData
      );
      dispatch(addUserInfos(response.data));
    },
    [usernameInput, userPasswordInput, userEmailInput]
  );
  return { handleSubmit, error, fieldError };
};
export default formHandler;
