import { useDispatch, useSelector } from "react-redux";

import { setAccessToken, setSidebar } from "../slice/userSlice";
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

  const updateSidebar = (sideBar?: boolean) => {
    dispatch(setSidebar(sideBar ?? !user.sidebarActive));
    if (window.innerWidth > 640) dispatch(setSidebar(false));
  };

  return { user, logout, login, updateSidebar };
}
