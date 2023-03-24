import { AvatarProps } from "./Avatar.type";
import * as S from "./style";

const Avatar = ({ customStyle, imageUrl }: AvatarProps) => {
  return (
    <S.Container
      width={120}
      height={120}
      style={{ ...customStyle }}
      src={imageUrl}
      alt="avatar"
    />
  );
};

export default Avatar;
