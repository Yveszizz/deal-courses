//const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer'


(async () => {
  const browser = await puppeteer.launch({
    userDataDir: ('./user_data'),
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width:1600, height:920});

  await page.goto('https://fr.coursera.org/', { waitUntil: 'networkidle2' });
 

  const searchInput = ".react-autosuggest__input"
  await page.waitForSelector(searchInput)
  await page.click(searchInput)
  await page.keyboard.type('next js');

  await page.waitFor(2000);

  await page.click('.search-button');
  await page.waitFor(5000)

 

  await page.waitFor(5000);
  await browser.close();
})();

/*export default async function(show){

  const browser = await puppeteer.launch({headless: ! show})
  const page = await browser.newPage()
  await page.goto('https://fr.coursera.org')

  const searchInput = await page.$(".react-autosuggest__input");
  await page.waitForSelector(searchInput)
  await page.click(searchInput)
  await page.keyboard.type('next js');
}*/

