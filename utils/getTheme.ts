import { THEME_KEY, ThemeType } from "../constants/theme/theme.constant";
import Cookie from "../libs/storage/Cookie";

export const getTheme = (): ThemeType => {
  let themeMode = undefined;

  if (typeof window !== "undefined") {
    themeMode = Cookie.get(THEME_KEY);
  }

  if (typeof window !== "undefined" && themeMode === undefined) {
    const isDarkTheme: boolean = window.matchMedia(
      `(prefers-color-scheme: dark)`
    ).matches;

    if (isDarkTheme) {
      return "DARK";
    }
    return "LIGHT";
  }

  console.log(themeMode);

  return themeMode as ThemeType;
};
