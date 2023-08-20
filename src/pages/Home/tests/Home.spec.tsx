import { render, screen, act, fireEvent } from "@testing-library/react";
import { Home } from "..";
import { BrowserRouter } from "react-router-dom";
import fetchMock from "jest-fetch-mock";
import { mockedUsersResponse } from "./mocks";

describe("Pages: Home", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    fetchMock.resetMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should match snapshot", () => {
    const { container } = render(<Home />, { wrapper: BrowserRouter });

    expect(container).toMatchSnapshot();
  });

  it("should search for users", async () => {
    fetchMock.mockResponse(JSON.stringify(mockedUsersResponse));

    render(<Home />, { wrapper: BrowserRouter });

    const searchInput = screen.getByPlaceholderText("Search for users...");

    fireEvent.change(searchInput, { target: { value: "Gandalf" } });

    act(() => {
      jest.runAllTimers();
    });

    expect(fetchMock).toBeCalled();
  });
});
