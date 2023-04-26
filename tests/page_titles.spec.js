const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
async function checkPageTitle(pageUrl, expectedTitle) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  const pageTitle = await page.title();
  await browser.close();
  expect(pageTitle).toBe(expectedTitle);
}

function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${randomString}@gmail.com`;
}

/**
 *
 *

pages.forEach((page) => {
  test(`Page "${page.path}" should have the correct title`, async ({ page }) => {
    const pageUrl = `${config.use.baseURL}${page.path}`;
    await page.goto(pageUrl);
    const pageTitle = await page.title();
    expect(pageTitle).toBe(page.title);
  });
});

test('navbar test', async ({ page }) => {
  await page.locator('a:has-text("Instructors")').click();
  await page.locator('h1:text("Instructors")').click();
  await page.locator('a:has-text("Courses")').click();
  await page.locator('h1:text("Courses")').click();
  await page.locator('a:has-text("Goals")').click();
  await page.locator('h1:text("Embracing the Future of Online Learning: MyWebClass.org")').click();
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
}); **/

pages.forEach((page) => {

  test(`Page "${page.path}" should have the correct title`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    const expectedTitle = page.title;
    await checkPageTitle(pageUrl, expectedTitle);
  });
});

async function checkMailchimpIntegration(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  await page.waitForSelector('[placeholder="Email Address"]');
  await page.click('[placeholder="Email Address"]');
  await page.fill('[placeholder="Email Address"]', generateRandomEmail());
  await page.press('[placeholder="Email Address"]', 'Enter');

  const isSuccessVisible = await page.locator('text=Successfully subscribed!').isVisible();
  await browser.close();
  expect(isSuccessVisible).toBeTruthy();
}

/** test('Mailchimp integration works', async () => {
  const pageUrl = `${config.use.baseURL}/`; // Replace with the appropriate path where the Mailchimp integration exists.
  await checkMailchimpIntegration(pageUrl);
}); **/