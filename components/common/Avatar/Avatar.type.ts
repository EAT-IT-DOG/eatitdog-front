import { CommonComponentProps } from "../common.type";

export interface AvatarProps extends Omit<CommonComponentProps, "children"> {
  imageUrl: string;
}
