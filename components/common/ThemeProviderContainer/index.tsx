import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/theme/useTheme";
import { darkTheme, lightTheme } from "../../../styles/theme";

import React from "react";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor, currentTheme } = useTheme();

  console.log(currentTheme);

  return <ThemeProvider theme={themeColor}>{children}</ThemeProvider>;
};

export default ThemeProviderContainer;
