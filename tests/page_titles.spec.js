const { test, expect } = require('@playwright/test');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

/** function to generate random email address for testing **/
function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${randomString}@gmail.com`;
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have the correct title`, async ({ page }) => {
    const pageUrl = `${config.use.baseURL}${page.path}`;
    await page.goto(pageUrl);
    const pageTitle = await page.title();
    expect(pageTitle).toBe(page.title);
  });
});

test.describe('Navbar tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${config.use.baseURL}/`);
  });

  test('Explore Courses link works', async ({ page }) => {
    await page.click('text=Explore Courses');
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Courses');
  });

  test('Instructors link works', async ({ page }) => {
    await page.click('text=Instructors');
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Instructors');
  });

  test('Goals link works', async ({ page }) => {
    await page.click('text=Goals');
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Goals');
  });

  test('Mailchimp integration works', async ({ page }) => {
    await page.click('[placeholder="Email Address"]');
    await page.fill('[placeholder="Email Address"]', generateRandomEmail());
    await page.press('[placeholder="Email Address"]', 'Enter');
    await expect(page.locator('text=Successfully subscribed!')).toBeVisible();
  });

  test('Instructor buttons scroll to correct professors', async ({ page }) => {
    await page.click('text=Instructors');
    await page.click('text=Instructor 1');
    await expect(page.locator('text=Christopher Christiansen')).toBeVisible();
    await page.click('text=Instructor 2');
    await expect(page.locator('text=D\'Angelo Morales')).toBeVisible();
    await page.click('text=Instructor 3');
    await expect(page.locator('text=Keith Williams')).toBeVisible();
  });
});
