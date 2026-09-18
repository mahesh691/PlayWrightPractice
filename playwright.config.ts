import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  /* Run tests in parallel */
  fullyParallel: true,

  /* Fail CI if test.only is accidentally committed */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests on CI */
  retries: process.env.CI ? 2 : 0,

  /* Use one worker on CI */
  workers: process.env.CI ? 1 : undefined,

  /* HTML execution report */
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list']
  ],

  /* Shared settings */
  use: {
    baseURL:
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',

    /* Capture screenshot when a test fails */
    screenshot: 'only-on-failure',

    /* Capture trace when test is retried */
    trace: 'on-first-retry',

    /* Record video when test fails */
    video: 'retain-on-failure',
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
