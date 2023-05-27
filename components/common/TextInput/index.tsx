import { Input } from "./style";
import { TextInputProps } from "./textInput.type";

const TextInput = ({ children, customStyle, ...attr }: TextInputProps) => {
  return <Input {...attr} data-testid="textinput-test-id" />;
};

export default TextInput;
