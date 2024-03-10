import { LazyExoticComponent, ReactNode } from "react";

export interface RouteModel {
  path: string;
  element: LazyExoticComponent<(props: unknown) => JSX.Element> | ReactNode;
  isPrivate: boolean;
  name?: string;
}
