const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 1000;
async function checkPageTitle(pageUrl, expectedTitle) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  const pageTitle = await page.title();
  await browser.close();
  expect(pageTitle).toBe(expectedTitle);
}

pages.forEach((page) => {

  test(`Page "${page.path}" should have the correct title`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    const expectedTitle = page.title;
    await checkPageTitle(pageUrl, expectedTitle);
  });
});

/** function to generate random email address for testing **/
function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${randomString}@gmail.com`;
}


/** checks for courses navbar item to work  **/
test('courses navbar', async ({ page }) => {
  await page.getByRole('link', { name: 'Explore Courses' }).click();
  await page.getByRole('heading', { name: 'Courses' }).click();
});
/** checks for instructors navbar item to work  **/
test('instructors navbar', async ({ page }) => {
  await page.getByRole('link', { name: 'Instructors' }).click();
  await page.getByRole('heading', { name: 'Instructors', exact: true }).click();
});

/** checks for goals navbar item to work  **/
test('goals navbar', async ({ page }) => {
  await page.getByRole('link', { name: 'Goals' }).click();
  await page.getByRole('heading', { name: 'Embracing the Future of Online Learning: MyWebClass.org' }).click();
});

/** checks if Mailchimp integration works**/
test('Mailchimp', async ({ page }) => {
  await page.getByPlaceholder('Email Address').click();
  await page.fill('[placeholder="Email Address"]', generateRandomEmail());
  await page.getByPlaceholder('Email Address').press('Enter');
  await page.getByText('Successfully subscribed!').click();
});

/** checks to see if instructor buttons scrolls down to proper professors**/
test('instructions for Professor', async ({ page }) => {
  await page.getByRole('link', { name: 'Instructors' }).click();
  await page.getByRole('button', { name: 'Instructor 1' }).click();
  await page.getByRole('heading', { name: 'Christopher Christiansen' }).click();
  await page.getByRole('button', { name: 'Instructor 2' }).click();
  await page.getByRole('heading', { name: 'D\'Angelo Morales' }).click();
  await page.getByRole('button', { name: 'Instructor 3' }).click();
  await page.getByRole('heading', { name: 'Keith Williams' }).click();
});