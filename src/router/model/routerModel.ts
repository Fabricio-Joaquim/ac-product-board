import { LazyExoticComponent, ReactNode } from "react";

export interface RouteModel {
  path: string;
  Element: LazyExoticComponent<(props: unknown) => JSX.Element> | ReactNode;
  isPrivate: boolean;
  name?: string;
}
