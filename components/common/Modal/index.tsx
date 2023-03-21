import { Portal } from "../Portal";
import { ModalButtonsProps, ModalProps, ModalTitleProps } from "./modal.type";
import * as S from "./style";

const Modal = ({ isOpen, onClose, customStyle, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Portal selector="#modal">
          <S.Background onClick={onClose} />
          <S.Container style={{ ...customStyle }}>{children}</S.Container>
        </Portal>
      )}
    </>
  );
};

const ModalTitle = ({ children, customStyle }: ModalTitleProps) => {
  return <S.Title style={{ ...customStyle }}>{children}</S.Title>;
};

const ModalButtons = ({ children, customStyle }: ModalButtonsProps) => {
  return (
    <S.ButtonContainer style={{ ...customStyle }}>{children}</S.ButtonContainer>
  );
};

export default Object.assign(Modal, {
  Title: ModalTitle,
  Buttons: ModalButtons,
});
