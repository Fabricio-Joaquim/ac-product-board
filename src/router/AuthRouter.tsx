import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { BoardLayer } from "@/components/Layer/BoardLayer";
import { useUser } from "@/store/hook/useUser";

import { routes as pages } from "./routes";

export const AuthRouters = () => {
  const { user } = useUser();

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        {pages.map(Page => {
          if (Page.isPrivate && user.accessToken) {
            return (
              <Route key={Page.path} path={Page.path} element={<BoardLayer />}>
                <Route
                  key={Page.path}
                  path={Page.path}
                  element={<Page.element />}
                />
                ;
              </Route>
            );
          } else if (!Page.isPrivate) {
            return (
              <Route
                key={Page.path}
                path={Page.path}
                element={<Page.element />}
              />
            );
          } else return false;
        })}
      </Routes>
    </Suspense>
  );
};
