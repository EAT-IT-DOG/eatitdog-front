import { Portal } from "../Portal";
import { DialogButtonsProps, DialogProps, DialogTextProps } from "./types";
import * as S from "./style";

const Dialog = ({ isOpen, onClose, children, customStyle }: DialogProps) => {
  return (
    <>
      {isOpen && (
        <Portal selector="#dialog">
          <S.Background onClick={onClose} data-testid="dialog-background" />
          <S.Container style={{ ...customStyle }}>{children}</S.Container>
        </Portal>
      )}
    </>
  );
};

const DialogText = ({ children, customStyle }: DialogTextProps) => {
  return <S.Text style={{ ...customStyle }}>{children}</S.Text>;
};

const DialogButtons = ({ children, customStyle }: DialogButtonsProps) => {
  return (
    <S.ButtonsContainer style={{ ...customStyle }}>
      {children}
    </S.ButtonsContainer>
  );
};

export default Object.assign(Dialog, {
  Text: DialogText,
  Buttons: DialogButtons,
});
