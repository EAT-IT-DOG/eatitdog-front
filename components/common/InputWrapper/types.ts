import { CommonComponentProps } from "../common.type";

export interface InputWrapperProps extends CommonComponentProps {
  direction: InputWrapperDirection;
}

export interface InputWrapperTitleProps extends CommonComponentProps {
  htmlFor: string;
}

export type InputWrapperDirection = "row" | "column";
