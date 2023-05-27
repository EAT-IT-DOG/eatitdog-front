import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextInput from ".";

afterEach(cleanup);

describe("<TextInput/>", () => {
  it("<TextInput/> 컴포넌트는 입력값을 잘 받아와야 합니다.", () => {
    const testValue = "test value";
    const testId = "textinput-test-id";

    const onChange = jest.fn();

    const { getByTestId } = render(
      <TextInput onChange={(e) => onChange(e.target.value)} />
    );

    const textInput = getByTestId(testId);

    fireEvent.change(textInput, { target: { value: testValue } });

    expect(onChange).toHaveBeenCalledWith(testValue);
  });
});
