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

const Title = ({ children, customStyle }: InputWrapperTitleProps) => {
  const { direction } = useInputWrapperContext();

  return (
    <S.Title style={{ ...customStyle }} direction={direction}>
      {children}
    </S.Title>
  );
};

const useInputWrapperContext = () => {
  const context = React.useContext(InputWrapperContext);
  return context;
};

export default Object.assign(InputWrapper, {
  Title: Title,
});
