/* eslint-disable */
//@ts-nocheck
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { BoardLayer } from "@/components/Layer/BoardLayer";
import { MainLoading } from "@/components/Loading/Loading";
import { useUser } from "@/store/hook/useUser";

import { routes as pages } from "./routes";

export const AuthRouters = () => {
  const { user } = useUser();

  return (
    <Suspense fallback={<MainLoading />}>
      <Routes>
        {pages.map(Page => {
          if (Page.isPrivate && user.accessToken) {
            return (
              <Route key={Page.path} path={Page.path} element={<BoardLayer />}>
                <Route
                  key={Page.path}
                  path={Page.path}
                  element={<Page.Element />}
                />
                ;
              </Route>
            );
          } else if (!Page.isPrivate) {
            return (
              <Route
                key={Page.path}
                path={Page.path}
                element={<Page.Element />}
              />
            );
          } else return false;
        })}
      </Routes>
    </Suspense>
  );
};
