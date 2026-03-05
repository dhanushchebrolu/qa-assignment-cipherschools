const { test, expect } = require('@playwright/test');

test('search product and open details', async ({ page }) => {
  await page.goto('https://with-bugs.practicesoftwaretesting.com');

  // wait for page to load
  await page.waitForLoadState('domcontentloaded');

  // locate the search input using role (more reliable)
  const searchBox = page.getByRole('textbox');
  await searchBox.fill('hammer');
  await searchBox.press('Enter');

  // wait for products to appear
  await page.waitForSelector('.card');

  // open first product
  await page.locator('.card').first().click();

  // assertion: product title visible
  await expect(page.locator('h1')).toBeVisible();
});