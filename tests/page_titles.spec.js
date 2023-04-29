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
  await page.waitForSelector('text=Sent to your inbox.', { timeout: TIMEOUT });
  const isSuccessVisible = await page.locator('text=Sent to your inbox.').isVisible();
  await browser.close();
  expect(isSuccessVisible).toBeTruthy();
}

test('Mailchimp integration works', async () => {
  const pageUrl = `${config.use.baseURL}/`; // Replace with the appropriate path where the Mailchimp integration exists.
  await checkMailchimpIntegration(pageUrl);
});

async function checkInstructorButtons(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  await page.click('text=Instructors');
  await page.click('text=Instructor 1');
  await expect(page.locator('h2:text("Christopher Christiansen")')).toBeVisible();
  await page.click('text=Instructor 2');
  await expect(page.locator('h2:text("D\'Angelo Morales")')).toBeVisible();
  await page.click('text=Instructor 3');
  await expect(page.locator('h2:text("Keith Williams")')).toBeVisible();

  await browser.close();
}

test('Instructor buttons scroll to correct professors', async () => {
  const pageUrl = `${config.use.baseURL}/`; // Replace with the appropriate path where the Instructors section exists.
  await checkInstructorButtons(pageUrl);
});

async function checkInstructorImages(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  await page.locator('a:has-text("Instructors")').click();
  await page.locator('img[alt="Image 1"]').first().click();
  await page.locator('img[alt="Image 1"]').nth(1).click();
  await page.locator('img[alt="Image 1"]').nth(2).click();

  await browser.close();
}

test('Instructor images are clickable', async () => {
  const pageUrl = `${config.use.baseURL}/`; // Replace with the appropriate path where the Instructors section exists.
  await checkInstructorImages(pageUrl);
});
