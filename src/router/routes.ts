import { lazy } from "react";

import { RouterEnum } from "./enum/routerEnum";
import { RouteModel } from "./model/routerModel";

export const routes: RouteModel[] = [
  {
    path: RouterEnum.LOGIN,
    Element: lazy(() => import("../pages/Login/Login")),
    isPrivate: false,
  },
  {
    path: RouterEnum.DASHBOARD,
    Element: lazy(() => import("../pages/Home/DashboardPage")),
    isPrivate: true,
  },
  {
    path: RouterEnum.REGISTER_USER,
    Element: lazy(() => import("../pages/Register/User/RegisterUSer")),
    isPrivate: false,
  },
  {
    path: RouterEnum.NOT_FOUND,
    Element: lazy(() => import("../pages/Login/Login")),
    isPrivate: false,
  },
  {
    path: RouterEnum.CREATE_PRODUCT,
    Element: lazy(() => import("../pages/Register/Product/RegisterProduct")),
    isPrivate: true,
  },
  {
    path: `${RouterEnum.UPDATE_PRODUCT}/:id`,
    Element: lazy(() => import("../pages/Register/Product/RegisterProduct")),
    isPrivate: true,
  },
];
