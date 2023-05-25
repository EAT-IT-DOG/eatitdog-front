import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

describe("<Button/>", () => {
  it("<Button/> 컴포넌트의 Children이 버튼에 잘 출력되어야 합니다.", () => {
    const buttonText = "버튼";

    render(<Button buttonType="Submit">{buttonText}</Button>);

    const button = screen.getByText(buttonText);

    expect(button).toBeInTheDocument();
  });

  it("<Button/> 컴포넌트의 타입에 Cancel을 넣었을 때 Cancel이 들어가야 합니다.", () => {
    render(<Button buttonType="Cancel"></Button>);

    const button = screen.getByTestId("Cancel");

    expect(button).toBeInTheDocument();
  });

  it("<Button/> 컴포넌트의 타입에 Submit을 넣었을 때 Submit이 들어가야 합니다.", () => {
    render(<Button buttonType="Submit"></Button>);

    const button = screen.getByTestId("Submit");

    expect(button).toBeInTheDocument();
  });
});
