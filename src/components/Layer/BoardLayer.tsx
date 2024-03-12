import { Sidebar } from "@components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import { RouterEnum } from "@/router/enum/routerEnum";
import { apiService } from "@/service/base";
import { useUser } from "@/store/hook/useUser";

import { Header } from "../Header/Header";

export const BoardLayer = () => {
  const { user } = useUser();

  apiService.interceptors.request.use(config => {
    config.headers["Authorization"] = `Bearer ${user.accessToken}`;
    return config;
  });

  apiService.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response?.status === 401) {
        window.location.href = RouterEnum.LOGIN;
      }
      return Promise.reject(error);
    },
  );

  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="w-full h-full">
        <Header />
        <div className="min-w-full min-h-full bg-trueGray-100 p-1 md:p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
