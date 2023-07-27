import { render } from "@testing-library/react";
import { SearchBar } from "..";

describe("Components: SearchBar", () => {
  it("should match snapshot", () => {
    const { container } = render(<SearchBar />);

    expect(container).toMatchSnapshot();
  });
});
