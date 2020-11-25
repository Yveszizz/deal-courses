const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    userDataDir: ('./user_data'),
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width:1600, height:920});

  await page.goto('https://udemy.com',/* { waitUntil: 'networkide2' }*/);
  //await page.screenshot({path: 'example.png'});

  const searchInput = await page.$("#u612-search-form-autocomplete--3");
  await searchInput.type('next js');
  await page.waitFor(2000);

  await page.click('#search-icon');
  await page.waitFor(5000)

  await page.waitFor(5000);
  await browser.close();
})();

