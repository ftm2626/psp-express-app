import { Dispatch, SetStateAction } from "react";

export type layoutPropT = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export type menuItemPropT = {
  text: string;
  link: string;
  icon: any; // Use any to avoid conflicts with @svgr/webpack plugin or babel-plugin-inline-react-svg plugin.
};
