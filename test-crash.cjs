const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.error('BROWSER ERROR:', error));

  try {
    await page.goto('https://sixsigma-academy.vercel.app/', { waitUntil: 'networkidle2' });
  } catch(e) {
    console.error("Navigation error:", e);
  }

  await browser.close();
})();
