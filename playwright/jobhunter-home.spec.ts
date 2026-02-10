import { test, expect } from 'playwright/test';

// Visual regression test for the JobHunter07 home Storybook story
// Use the canvas-only iframe URL so the page content is directly in the DOM
// and not nested inside Storybook's preview iframe.

const storyPath = '/iframe.html?id=jobhunter07-com-pages-home--default';

test.describe('JobHunter07 home hero', () => {
  test('nav + hero match baseline screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto(storyPath);

    // Wait for main hero text to ensure fonts/content are ready
    await page.getByText('LAND YOUR DREAM JOB').waitFor({ state: 'visible' });

    await expect(page).toHaveScreenshot('jobhunter-home.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });
});
