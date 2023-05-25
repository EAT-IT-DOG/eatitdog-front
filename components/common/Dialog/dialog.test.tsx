import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dialog from ".";

describe("<Dialog/>", () => {
  it("<Dialog/> 컴포넌트가 포탈을 통해 #dialog 태그의 위치에 배치되어야합니다.", () => {
    const dialogText = "dialog";

    render(
      <>
        <div id="dialog" />
        <Dialog isOpen={true} onClose={() => {}}>
          {dialogText}
        </Dialog>
      </>
    );

    const dialog = screen.getByText(dialogText);
    expect(dialog).toBeInTheDocument();
  });

  it("<Dialog/> 컴포넌트의 백그라운드가 출력되어야 합니다.", () => {
    render(
      <>
        <div id="dialog" />
        <Dialog isOpen={true} onClose={() => {}}>
          dialog
        </Dialog>
      </>
    );

    const dialogBackground = screen.getByTestId("dialog-background");
    expect(dialogBackground).toBeInTheDocument();
  });
});
