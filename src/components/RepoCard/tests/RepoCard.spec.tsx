import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RepoCard } from "..";

describe("Components: RepoCard", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <RepoCard title="TestTitle" description="lorem ipsum" link="test" />,
      { wrapper: BrowserRouter }
    );

    expect(container).toMatchSnapshot();
  });
});
