import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";
import { ButtonType } from "./button.type";

afterEach(cleanup);

const testButtonText = "버튼";

const setup = (buttonType: ButtonType) => {
  render(<Button buttonType={buttonType}>{testButtonText}</Button>);
};

describe("<Button/>", () => {
  it("<Button/> 컴포넌트가 화면에 문제 없이 출력되어야 햡니다.", () => {
    setup("Submit");

    const button = screen.getByTestId("Submit");

    expect(button).toBeInTheDocument();
  });

  it("<Button/> 컴포넌트의 Children이 버튼에 잘 출력되어야 합니다.", () => {
    setup("Submit");

    const button = screen.getByText(testButtonText);

    expect(button).toBeInTheDocument();
  });

  it("<Button/> 컴포넌트의 타입에 Cancel을 넣었을 때 Cancel이 들어가야 합니다.", () => {
    setup("Cancel");

    const button = screen.getByTestId("Cancel");

    expect(button).toBeInTheDocument();
  });

  it("<Button/> 컴포넌트의 타입에 Submit을 넣었을 때 Submit이 들어가야 합니다.", () => {
    setup("Submit");

    const button = screen.getByTestId("Submit");

    expect(button).toBeInTheDocument();
  });
});
