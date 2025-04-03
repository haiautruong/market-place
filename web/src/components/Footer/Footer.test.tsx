import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";

// Mock useTranslation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Footer", () => {
  it("renders correctly with navigation links", () => {
    render(<Footer />);

    // Check for navigation links
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About us")).toBeInTheDocument();
    expect(screen.getByText("Marketplace")).toBeInTheDocument();

    // Check for subscription form
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /subscribe/i })
    ).toBeInTheDocument();
  });

  it("handles email subscription", async () => {
    const consoleSpy = vi.spyOn(console, "log");
    render(<Footer />);

    // Get the email input and subscribe button
    const emailInput = screen.getByPlaceholderText(/email/i);
    const subscribeButton = screen.getByRole("button", { name: /subscribe/i });

    // Type an email and click subscribe
    await userEvent.type(emailInput, "test@example.com");
    await userEvent.click(subscribeButton);

    // Verify console.log was called with the email
    expect(consoleSpy).toHaveBeenCalledWith(
      "Subscribing email:",
      "test@example.com"
    );

    consoleSpy.mockRestore();
  });
});
