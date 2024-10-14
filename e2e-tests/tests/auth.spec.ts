import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/"

test('should allow the user to sign in', async ({ page }) => {
  await page.goto(UI_URL);
//get the sign in button
await page.getByRole("link", {name: "Sign In"}).click();
await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
await page.locator("[name=email]").fill("prechiz@gmail.com")
await page.locator("[name=password]").fill("password")
await page.getByRole("button", {name: "Login"}).click();
await expect(page.getByText("Login successful!")).toBeVisible();
await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});

/* test('should allow users to register', async ({ page }) => {
  await page.goto(UI_URL);
  await page.getByRole("link", {name: "Sign In"}).click();
  await page.getByRole("link", {name: "Create an account here"}).click();
  await expect(page.getByRole('heading', { name: 'Create an Account' })).toBeVisible();
  await page.locator("[name=firstname]").fill("Chzy")
  await page.locator("[name=lastname]").fill("Prious")
  await page.locator("[name=email]").fill("prech@gmail.com")
  await page.locator("[name=password]").fill("password")
  await page.locator("[name=confirmPassword]").fill("password")
  await page.getByRole("button", {name: "Create Account"}).click();
  await expect(page.getByText("Registration successful!")).toBeVisible();
await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
}); */
test('should allow users to register', async ({ page }) => {
  // Navigate to the UI URL
  await page.goto(UI_URL);
  
  // Click on the "Sign In" link
  await page.getByRole("link", { name: "Sign In" }).click();

  // Wait for "Create an account here" link to appear and click on it
  await page.getByRole("link", { name: "Create an account here" }).click();

  // Ensure the "Create an Account" heading is visible
  await expect(page.getByRole('heading', { name: 'Create an Account' })).toBeVisible();

  // Fill in the registration form fields
  await page.getByLabel("First Name").fill("Chzy");
  await page.getByLabel("Last Name").fill("Prious");
  await page.getByLabel("Email").fill("prech@gmail.com");
  await page.getByLabel('Password', { exact: true }).fill('password');
await page.getByLabel('Confirm Password').fill('password');


  // Click on the "Create Account" button
  await page.getByRole("button", { name: "Create Account" }).click();

  // Wait for the success message to appear
  await expect(page.getByText("Registration successful!")).toBeVisible();

  // Ensure "My Bookings" and "My Hotels" links are visible and the "Sign Out" button appears
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});
