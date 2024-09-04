//If you wanted before/after hooks you would define them in the same file (or describe block) as the tests they are to affect
//This might force you to repeat these hooks across multiple files.
//One solution to this would be to use Project Dependencies ( https://playwright.dev/docs/test-global-setup-teardown )
//to define setup and tear down projects (containing code to run before/after your tests in your main project - essentially beforeAll/afterAll for the project)
//However thanks to a new feature you can now define code to execute before and after tests and import that in to any files requiring those hooks.
//This may be a simpler or more flexible approach than Project Dependencies.

//Documentation ( https://playwright.dev/docs/next/test-fixtures#adding-global-beforeeachaftereach-hooks ) - currently in 'next', not in stable documentation

//Note no beforeEach/All or afterEach/All in this file and test() is imported from ./globalbeforeafter.ts
import { test } from './globalbeforeafter.ts'
import { expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
