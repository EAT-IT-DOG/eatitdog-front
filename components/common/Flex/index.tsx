import React from "react";
import { FlexContainer } from "./style";
import { FlexProps } from "./types";

const Flex = ({
  children,
  gap,
  justify,
  align,
  direction,
  customStyle,
}: FlexProps) => {
  return (
    <FlexContainer
      style={{
        ...customStyle,
      }}
      justify={justify}
      align={align}
      gap={gap}
      direction={direction}
      data-testid="flex-test-id"
    >
      {children}
    </FlexContainer>
  );
};

export default Flex;
