import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useUser } from "@/store/hook/useUser";

import { routes as pages } from "./routes";

export const AuthRouters = () => {
  const { user } = useUser();

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        {pages.map(({ element: Elements, path, isPrivate }, i) => {
          if (isPrivate && user.accessToken) {
            return <Route key={i} path={path} element={<Elements />} />;
          } else if (!isPrivate) {
            return <Route key={i} path={path} element={<Elements />} />;
          } else return false;
        })}
      </Routes>
    </Suspense>
  );
};
