import React from "react";
import { InputWrapperProps, InputWrapperTitleProps } from "./inputWrapper.type";
import * as S from "./style";

const InputWrapperContext = React.createContext<
  Pick<InputWrapperProps, "direction">
>({
  direction: "column",
});

const InputWrapper = ({
  direction,
  customStyle,
  children,
}: InputWrapperProps) => {
  const value = {
    direction,
  };

  return (
    <InputWrapperContext.Provider value={value}>
      <S.Container direction={direction} style={{ ...customStyle }}>
        {children}
      </S.Container>
    </InputWrapperContext.Provider>
  );
};

const Label = ({ children, customStyle, htmlFor }: InputWrapperTitleProps) => {
  const { direction } = useInputWrapperContext();

  return (
    <S.Label style={{ ...customStyle }} direction={direction} htmlFor={htmlFor}>
      {children}
    </S.Label>
  );
};

const useInputWrapperContext = () => {
  const context = React.useContext(InputWrapperContext);
  return context;
};

export default Object.assign(InputWrapper, {
  Label: Label,
});
