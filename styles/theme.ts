import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  ...palette,

  backgroundColor: "#fafafa",
  subBackgroundColor: "#ffffff",
  borderColor: "#DBDBDB",
  contrast: "#434343",
};

export const darkTheme: DefaultTheme = {
  ...palette,

  backgroundColor: "#181818",
  subBackgroundColor: "#202020",
  borderColor: "#434343",

  contrast: "#ffffff",
};
