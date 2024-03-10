import React from "react";
import { IconType } from "react-icons";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
}

export const Icon = ({ icon: Icon, ...rest }: IconProps) => {
  return <Icon {...rest} />;
};
