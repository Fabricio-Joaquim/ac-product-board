import { lazy } from "react";

import { RouteModel } from "./model/routerModel";

export const routes: RouteModel[] = [
  {
    path: "/",
    element: lazy(() => import("../pages/Login/Login")),
    isPrivate: false,
  },
  {
    path: "/home",
    element: lazy(() => import("../pages/Home/DashboardPage")),
    isPrivate: true,
  },
  {
    path: "/cadastro/usuario",
    element: lazy(() => import("../pages/RegisterUser/Register")),
    isPrivate: false,
  },
  {
    path: "*",
    element: lazy(() => import("../pages/Login/Login")),
    isPrivate: false,
  },
  {
    path: "/cadastro/produto",
    element: lazy(() => import("../pages/RegisterProduct/RegisterProduct")),
    isPrivate: true,
  },
];
