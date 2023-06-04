import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from ".";
import React from "react";

afterEach(cleanup);

describe("<Avatar/>", () => {
  it("<Avatar/> 컴포넌트를 통해 아바타가 생겨야 합니다.", () => {
    const avatarAlt = "avatar";

    render(<Avatar alt={avatarAlt} />);

    const avatar = screen.getByAltText(avatarAlt);

    expect(avatar).toBeInTheDocument();
  });
});
