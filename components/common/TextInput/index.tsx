import { Container } from "./style";
import { TextInputProps } from "./textInput.type";

const TextInput = ({ children, customStyle, ...attr }: TextInputProps) => {
  return <Container {...attr}></Container>;
};

export default TextInput;
