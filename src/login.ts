import { chromium } from "playwright";
import dotenv from 'dotenv';

dotenv.config();

export const loginToExchange = async () =>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://www.binance.com/en/login");

     // Enter credentials
    await page.fill('input[name="username"]', process.env.BINANCE_EMAIL!);
    await page.click('button[data-e2e="btn-accounts-form-submit"]');
    await page.fill('input[name="password"]', process.env.BINANCE_PASSWORD!);
    await page.click('button[data-e2e="btn-accounts-form-submit"]');

    console.log('🔐 Waiting for manual 2FA input...');
    await page.waitForTimeout(15000); // Wait for user to enter 2FA manually

    return { browser, page };
};