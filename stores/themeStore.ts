import { atom } from "recoil";
import { ThemeType } from "constants/theme/theme.constant";
import { v1 } from "uuid";
import { getTheme } from "utils/getTheme";

export const themeModeAtom = atom<ThemeType>({
  key: `theme/themeMode${v1()}`,
  default: getTheme(),
});
