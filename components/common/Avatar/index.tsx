import { AvatarProps } from "./avatar.type";
import * as S from "./style";
import DefaultProfileImg from "../../../assets/images/defaultProfile.svg";

const Avatar = ({ customStyle, imageUrl, alt }: AvatarProps) => {
  return (
    <S.Container
      width={120}
      height={120}
      style={{ ...customStyle }}
      src={imageUrl || DefaultProfileImg}
      alt={alt}
    />
  );
};

export default Avatar;
