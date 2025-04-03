// e2e/marketplace.spec.ts
import { test, expect } from "@playwright/test";

test("user can view and interact with marketplace", async ({ page }) => {
  // Navigate to the marketplace page
  await page.goto("/marketplace");

  // Wait for products to load
  await page.waitForSelector(".product-card");

  // Check if products are visible
  const products = await page.$$(".product-card");
  expect(products.length).toBeGreaterThan(0);
});
