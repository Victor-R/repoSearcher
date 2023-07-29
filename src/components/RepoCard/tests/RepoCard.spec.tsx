import { BrowserRouter } from "react-router-dom";
import { RepoCard } from "..";
import { render } from "../../../utils/test-utils";

describe("Components: RepoCard", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <RepoCard
        description="test-desc"
        link="http://www.pudim.com"
        title="pudim"
      />,
      { wrapper: BrowserRouter }
    );

    expect(container).toMatchSnapshot();
  });
});
