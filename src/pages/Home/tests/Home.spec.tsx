import { render } from "@testing-library/react";
import { Home } from "..";
import { BrowserRouter } from "react-router-dom";

describe("Pages: Home", () => {
  it("should match snapshot", () => {
    const { container } = render(<Home />, { wrapper: BrowserRouter });

    expect(container).toMatchSnapshot();
  });
});
