import { CommonComponentProps } from "../common.type";

export interface ModalProps extends CommonComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalTitleProps extends CommonComponentProps {}

export interface ModalButtonsProps extends CommonComponentProps {}
