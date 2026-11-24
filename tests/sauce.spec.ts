import {test, expect} from '@playwright/test';

test('Test to login into SauceLab', async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder('Username').fill('standard_us');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name:'Login'}).click();
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.getByText('Products')).toBeVisible();
 }
);