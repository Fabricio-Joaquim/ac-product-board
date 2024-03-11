import { lazy } from "react";

import { RouterEnum } from "./enum/routerEnum";
import { RouteModel } from "./model/routerModel";

export const routes: RouteModel[] = [
  {
    path: RouterEnum.LOGIN,
    element: lazy(() => import("../pages/Login/Login")),
    isPrivate: false,
  },
  {
    path: RouterEnum.DASHBOARD,
    element: lazy(() => import("../pages/Home/DashboardPage")),
    isPrivate: true,
  },
  {
    path: RouterEnum.REGISTER_USER,
    element: lazy(() => import("../pages/RegisterUser/Register")),
    isPrivate: false,
  },
  {
    path: RouterEnum.NOT_FOUND,
    element: lazy(() => import("../pages/Login/Login")),
    isPrivate: false,
  },
  {
    path: RouterEnum.CREATE_PRODUCT,
    element: lazy(() => import("../pages/RegisterProduct/RegisterProduct")),
    isPrivate: true,
  },
  {
    path: `${RouterEnum.UPDATE_PRODUCT}/:id`,
    element: lazy(() => import("../pages/RegisterProduct/RegisterProduct")),
    isPrivate: true,
  },
];
