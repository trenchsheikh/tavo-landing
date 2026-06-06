import { chromium } from 'playwright';

const url = 'http://localhost:5175/';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const title = await page.title();
const bodyText = (await page.innerText('body')).replace(/\s+/g, ' ').trim().slice(0, 400);
const hasTavo = await page.locator('text=Tavo').count();
const buttons = await page.locator('button').allInnerTexts();

await page.screenshot({ path: '.tmp-landing.png', fullPage: true });

console.log('TITLE:', title);
console.log('TAVO occurrences:', hasTavo);
console.log('BUTTONS:', JSON.stringify(buttons));
console.log('BODY:', bodyText);
console.log('CONSOLE ERRORS:', errors.length ? JSON.stringify(errors, null, 2) : 'none');

await browser.close();
