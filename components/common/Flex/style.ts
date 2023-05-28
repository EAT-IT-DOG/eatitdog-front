import styled from "styled-components";
import {
  FlexAlign,
  FlexAlignType,
  FlexDirection,
  FlexDirectionType,
  FlexJustify,
  FlexJustifyType,
} from "./types";

export const FlexContainer = styled.div<{
  gap: number | undefined;
  justify: FlexJustifyType | undefined;
  align: FlexAlignType | undefined;
  direction: FlexDirectionType | undefined;
}>`
  display: flex;
  ${({ gap }) => gap && `gap: ${gap}px;`}
  ${({ justify }) => justify && `justify-content: ${FlexJustify[justify]};`}
  ${({ align }) => align && `align-items: ${FlexAlign[align]};`}
  ${({ direction }) =>
    direction && `flex-direction: ${FlexDirection[direction]};`}
`;
