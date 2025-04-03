import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "../../test/utils/test-utils";
import MarketplacePage from "./MarketplacePage";
import { server } from "../../test/mocks/server";
import { http, HttpResponse } from "msw";

describe("MarketplacePage", () => {
  it("renders products from API", async () => {
    render(<MarketplacePage />);

    // Verify skeleton elements are present during loading
    const skeletons = document.querySelectorAll(".ant-skeleton");
    expect(skeletons.length).toBeGreaterThan(0);

    // Wait for products to load
    await waitFor(() => {
      expect(screen.getByText("Metal Gear Girl")).toBeInTheDocument();
      expect(screen.getByText("Rhythm Ruler")).toBeInTheDocument();
    });
  });

  it("displays error message when API fails", async () => {
    // Override the handler to return an error
    server.use(
      http.get("http://localhost:5005/products", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<MarketplacePage />);

    // Wait for error message to appear
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
