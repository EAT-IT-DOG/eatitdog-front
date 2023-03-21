import { AvatarProps } from "./Avatar.type";
import * as S from "./style";

const Avatar = ({ customStyle, imageUrl }: AvatarProps) => {
  return <S.Container style={{ ...customStyle }} src={imageUrl} />;
};

export default Avatar;
