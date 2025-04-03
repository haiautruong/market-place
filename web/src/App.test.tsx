import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the components used in App
vi.mock("./components/Header/Header", () => ({
  default: () => <div data-testid="header">Header Component</div>,
}));

vi.mock("./components/Footer/Footer", () => ({
  default: () => <div data-testid="footer">Footer Component</div>,
}));

// Mock react-router-dom
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual || {}),
    Outlet: () => <div data-testid="outlet">Page Content</div>,
    useLocation: () => ({ pathname: "/" }),
  };
});

describe("App", () => {
  it("renders header, content area, and footer", () => {
    render(<App />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
