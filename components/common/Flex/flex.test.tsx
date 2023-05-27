import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Flex } from ".";

afterEach(cleanup);

describe("<Flex/>", () => {
  it("<Flex/> 컴포넌트가 화면에 문제 없이 출력되어야 합니다.", () => {
    render(
      <Flex>
        <div>test</div>
      </Flex>
    );

    const flex = screen.getByTestId("flex-test-id");

    expect(flex).toBeInTheDocument();
  });
});
