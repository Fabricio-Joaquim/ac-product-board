import { useDispatch, useSelector } from "react-redux";

import { setAccessToken } from "../slice/userSlice";
import { RootState } from "../store";

export function useUser() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setAccessToken(""));
  };

  const login = (accessToken: string) => {
    dispatch(setAccessToken(accessToken));
  };

  return { user, logout, login };
}
