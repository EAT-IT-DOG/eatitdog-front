import * as S from "./style";
import { ButtonProps } from "./types";

const Button = ({
  children,
  customStyle,
  buttonType,
  ...attr
}: ButtonProps) => {
  return (
    <S.Container
      {...attr}
      style={{ ...customStyle }}
      buttonType={buttonType}
      data-testid={buttonType}
    >
      {children}
    </S.Container>
  );
};

export default Button;
