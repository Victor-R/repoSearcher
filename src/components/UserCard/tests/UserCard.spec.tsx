import { render } from "@testing-library/react";
import { UserCard } from "..";

describe("Components: UserCard", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <UserCard
        active
        name="Gandalf"
        imageUrl="https://i.kym-cdn.com/entries/icons/original/000/042/690/Screen_Shot_2022-11-16_at_2.24.03_PM.jpg"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
