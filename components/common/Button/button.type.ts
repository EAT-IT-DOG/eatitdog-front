import React from "react";
import { CommonComponentProps } from "../common.type";

export type ButtonType = "Submit" | "Cancel";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    CommonComponentProps {
  buttonType: ButtonType;
  customStyle?: React.CSSProperties;
}
