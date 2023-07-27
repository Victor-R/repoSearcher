import { render } from "@testing-library/react";
import { UserCard } from "..";

describe("Components: UserCard", () => {
  it("should match snapshot not active card", () => {
    const { container } = render(
      <UserCard
        imageUrl="https://i.kym-cdn.com/entries/icons/original/000/042/690/Screen_Shot_2022-11-16_at_2.24.03_PM.jpg"
        name="Gandalf"
      />
    );

    expect(container).toMatchSnapshot("not-active-card");
  });

  it("should match snapshot active card", () => {
    const { container } = render(
      <UserCard
        active
        imageUrl="https://i.kym-cdn.com/entries/icons/original/000/042/690/Screen_Shot_2022-11-16_at_2.24.03_PM.jpg"
        name="Gandalf"
      />
    );

    expect(container).toMatchSnapshot("active-card");
  });
});
