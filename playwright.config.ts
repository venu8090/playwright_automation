import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'Features/*.feature',
  steps: ['Steps/*.ts', 'Fixtures/fixture.ts'],
});

export default defineConfig({
  testDir,
 timeout: 80_000,              // whole test (default was 30s)
  expect: { timeout: 30_000 },  // expect() assertions
  retries: 1,                   // demo site is flaky
   reporter: [
    ['list'],                                                    // live console output
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: null,
        deviceScaleFactor: undefined, // 👈 required when viewport is null
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});