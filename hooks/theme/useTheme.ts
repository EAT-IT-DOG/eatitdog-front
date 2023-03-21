import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { DefaultTheme } from "styled-components";
import { THEME_KEY, ThemeType } from "../../constants/theme/theme.constant";
import Cookie from "../../libs/storage/Cookie";
import { darkTheme, lightTheme } from "../../styles/theme";
import { themeModeAtom } from "../../store/themeStore";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] =
    useRecoilState<ThemeType>(themeModeAtom);

  const themeColor = useMemo((): DefaultTheme => {
    return currentTheme === "DARK" ? darkTheme : lightTheme;
  }, [currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme: ThemeType = currentTheme === "DARK" ? "LIGHT" : "DARK";
    Cookie.set(THEME_KEY, switchTheme);
    setCurrentTheme(switchTheme);
  }, [currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
    currentTheme,
  };
};

export default useTheme;
