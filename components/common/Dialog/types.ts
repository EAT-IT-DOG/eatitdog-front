import { CommonComponentProps } from "../common.type";

export interface DialogProps extends CommonComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface DialogTextProps extends CommonComponentProps {}

export interface DialogButtonsProps extends CommonComponentProps {}
