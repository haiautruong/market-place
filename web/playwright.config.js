import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/test/e2e",
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm run dev",
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
  // Ignore CSS and other assets to prevent parsing errors
  testIgnore: ["**/*.css", "**/*.scss", "**/*.less"],
});
