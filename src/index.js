const puppeteer = require('puppeteer');
const account = require('./credentials/account');

(async () => {
const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('https://www.instagram.com/accounts/login/?hl=pt-br');
await page.waitFor(() => document.querySelectorAll('input').length)

await page.type ('[name=username]', account.username)//your username account
await page.type ('[name=password]', account.password)//your password

await page.evaluate(() => {
  document.querySelector('[type=submit]').click()
})

await page.waitFor(5000)

await page.screenshot({path: 'screenshot.png'});

await browser.close();
})()