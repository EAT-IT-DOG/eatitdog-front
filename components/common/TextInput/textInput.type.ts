import { InputHTMLAttributes } from "react";
import { CommonComponentProps } from "../common.type";

export interface TextInputProps
  extends CommonComponentProps,
    InputHTMLAttributes<HTMLInputElement> {}
