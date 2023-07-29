import { act, fireEvent, render, screen } from "../../../utils/test-utils";
import { Home } from "..";
import { mockedUsersResponse } from "./mocks";
import { vi } from "vitest";

describe("Pages: Home", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    fetchMock.resetMocks();
  });

  afterEach(() => {
    act(() => {
      vi.runOnlyPendingTimers();
    });
    vi.useRealTimers();
  });

  it("should match snapshot", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it("should search for users", async () => {
    fetchMock.mockResponse(JSON.stringify(mockedUsersResponse));

    render(<Home />);

    const searchInput = screen.getByPlaceholderText("Search for users...");

    fireEvent.change(searchInput, { target: { value: "Gandalf" } });

    act(() => {
      vi.runAllTimers();
    });

    expect(fetchMock).toBeCalled();
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.github.com/search/users?q=Gandalf&per_page=7"
    );
  });
});
