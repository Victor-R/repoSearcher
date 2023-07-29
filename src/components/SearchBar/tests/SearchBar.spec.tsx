import { render } from "../../../utils/test-utils";
import { SearchBar } from "..";
import { vi } from "vitest";

describe("Components: SearchBar", () => {
  it("should match snapshot", () => {
    const { container } = render(<SearchBar onSearchUpdate={vi.fn} />);

    expect(container).toMatchSnapshot();
  });
});
