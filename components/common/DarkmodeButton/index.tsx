import { useRecoilValue } from "recoil";
import useTheme from "../../../hooks/theme/useTheme";
import { DarkmodeButtonContainer, DarkmodeButtonIcon } from "./style";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import { HiOutlineSun } from "@react-icons/all-files/hi/HiOutlineSun";
import { ThemeType } from "../../../constants/theme/theme.constant";
import { themeModeAtom } from "../../../stores/themeStore";

const DarkmodeButton = () => {
  const currentTheme = useRecoilValue<ThemeType>(themeModeAtom);
  const { handleTheme } = useTheme();

  return (
    <DarkmodeButtonContainer onClick={handleTheme} aria-label="darkmode">
      <DarkmodeButtonIcon data-testid="darkmodeButton-icon-test-id">
        {currentTheme === "LIGHT" ? <HiOutlineSun /> : <BiMoon />}
      </DarkmodeButtonIcon>
    </DarkmodeButtonContainer>
  );
};

export default DarkmodeButton;
