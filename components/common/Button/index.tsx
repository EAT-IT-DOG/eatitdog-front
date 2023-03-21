import { ButtonProps } from "./button.type";
import * as S from "./style";

const Button = ({
  children,
  customStyle,
  buttonType,
  ...attr
}: ButtonProps) => {
  return (
    <S.Container {...attr} style={{ ...customStyle }} buttonType={buttonType}>
      {children}
    </S.Container>
  );
};

export default Button;
