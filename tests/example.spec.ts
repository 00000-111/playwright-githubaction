
import { test, expect } from '@playwright/test';

// Set the timeout for every test to 60 seconds.
test.setTimeout(60_000);

// Set the timeout for URL assertions to 60 seconds.
const expectTimeout = { timeout: 60_000 };

// Reusable navigation timeout and wait strategy.
const navigationOptions = {
  waitUntil: 'domcontentloaded' as const,
  timeout: 60_000,
};

test('Test 01 - Google India', async ({ page }) => {
  await page.goto('https://www.google.co.in/', navigationOptions);
  await expect(page).toHaveURL(/google\.co\.in/, expectTimeout);
  console.log('Test 01 URL:', page.url());
});

test('Test 02 - Apple India', async ({ page }) => {
  await page.goto('https://www.apple.com/in/', navigationOptions);
  await expect(page).toHaveURL(/apple\.com/, expectTimeout);
  console.log('Test 02 URL:', page.url());
});

test('Test 03 - Microsoft', async ({ page }) => {
  await page.goto('https://www.microsoft.com/', navigationOptions);
  await expect(page).toHaveURL(/microsoft\.com/, expectTimeout);
  console.log('Test 03 URL:', page.url());
});

test('Test 04 - Amazon India', async ({ page }) => {
  await page.goto('https://www.amazon.in/', navigationOptions);
  await expect(page).toHaveURL(/amazon\.in/, expectTimeout);
  console.log('Test 04 URL:', page.url());
});

test('Test 05 - Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/', navigationOptions);
  await expect(page).toHaveURL(/wikipedia\.org/, expectTimeout);
  console.log('Test 05 URL:', page.url());
});

test('Test 06 - GitHub', async ({ page }) => {
  await page.goto('https://github.com/', navigationOptions);
  await expect(page).toHaveURL(/github\.com/, expectTimeout);
  console.log('Test 06 URL:', page.url());
});

test('Test 07 - YouTube', async ({ page }) => {
  await page.goto('https://www.youtube.com/', navigationOptions);
  await expect(page).toHaveURL(/youtube\.com/, expectTimeout);
  console.log('Test 07 URL:', page.url());
});

test('Test 08 - LinkedIn', async ({ page }) => {
  await page.goto('https://www.linkedin.com/', navigationOptions);
  await expect(page).toHaveURL(/linkedin\.com/, expectTimeout);
  console.log('Test 08 URL:', page.url());
});

test('Test 09 - Facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com/', navigationOptions);
  await expect(page).toHaveURL(/facebook\.com/, expectTimeout);
  console.log('Test 09 URL:', page.url());
});

test('Test 10 - Instagram', async ({ page }) => {
  await page.goto('https://www.instagram.com/', navigationOptions);
  await expect(page).toHaveURL(/instagram\.com/, expectTimeout);
  console.log('Test 10 URL:', page.url());
});

test('Test 11 - Reddit', async ({ page }) => {
  await page.goto('https://www.reddit.com/', navigationOptions);
  await expect(page).toHaveURL(/reddit\.com/, expectTimeout);
  console.log('Test 11 URL:', page.url());
});

test('Test 12 - Stack Overflow', async ({ page }) => {
  await page.goto('https://stackoverflow.com/', navigationOptions);
  await expect(page).toHaveURL(/stackoverflow\.com/, expectTimeout);
  console.log('Test 12 URL:', page.url());
});

test('Test 13 - Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/', navigationOptions);
  await expect(page).toHaveURL(/playwright\.dev/, expectTimeout);
  console.log('Test 13 URL:', page.url());
});

test('Test 14 - TypeScript', async ({ page }) => {
  await page.goto('https://www.typescriptlang.org/', navigationOptions);
  await expect(page).toHaveURL(/typescriptlang\.org/, expectTimeout);
  console.log('Test 14 URL:', page.url());
});

test('Test 15 - Node.js', async ({ page }) => {
  await page.goto('https://nodejs.org/', navigationOptions);
  await expect(page).toHaveURL(/nodejs\.org/, expectTimeout);
  console.log('Test 15 URL:', page.url());
});

test('Test 16 - npm', async ({ page }) => {
  await page.goto('https://www.npmjs.com/', navigationOptions);
  await expect(page).toHaveURL(/npmjs\.com/, expectTimeout);
  console.log('Test 16 URL:', page.url());
});

test('Test 17 - MDN Web Docs', async ({ page }) => {
  await page.goto('https://developer.mozilla.org/', navigationOptions);
  await expect(page).toHaveURL(/developer\.mozilla\.org/, expectTimeout);
  console.log('Test 17 URL:', page.url());
});

test('Test 18 - BBC', async ({ page }) => {
  await page.goto('https://www.bbc.com/', navigationOptions);
  await expect(page).toHaveURL(/bbc\.com/, expectTimeout);
  console.log('Test 18 URL:', page.url());
});

test('Test 19 - CNN', async ({ page }) => {
  await page.goto('https://edition.cnn.com/', navigationOptions);
  await expect(page).toHaveURL(/cnn\.com/, expectTimeout);
  console.log('Test 19 URL:', page.url());
});

test('Test 20 - OpenAI', async ({ page }) => {
  await page.goto('https://openai.com/', navigationOptions);
  await expect(page).toHaveURL(/openai\.com/, expectTimeout);
  console.log('Test 20 URL:', page.url());
});
