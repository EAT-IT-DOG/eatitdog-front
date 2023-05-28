import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from ".";
import React from "react";

afterEach(cleanup);

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("<SearchBar/>", () => {
  it("<SearchBar 컴포넌트의 input이 정상적으로 출력되어야 합니다.", () => {
    render(<SearchBar />);

    const searchBarInput = screen.getByTestId("searchBar-input-test-id");

    expect(searchBarInput).toBeInTheDocument();
  });

  it("<SearchBar 컴포넌트의 button이 정상적으로 출력되어야 합니다.", () => {
    render(<SearchBar />);

    const searchBarButton = screen.getByTestId("searchBar-button-test-id");

    expect(searchBarButton).toBeInTheDocument();
  });
});
