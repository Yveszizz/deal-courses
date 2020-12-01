const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
    userDataDir: ('./user_data'),
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width:1600, height:920});

  await page.goto('https://fr.coursera.org/', { waitUntil: 'networkidle2' });
  //await page.screenshot({path: 'example.png'});

  const searchInput = await page.$(".react-autosuggest__input");
  await page.click(searchInput)
  await page.keyboard.type('next js');

  await page.waitFor(2000);

  await page.click('.search-button');
  await page.waitFor(5000)

 

  await page.waitFor(5000);
  await browser.close();
})();

// // // //

/*const puppeteer = require('puppeteer');
const searchbar = "#tsf > div:nth-child(2) > div > div.RNNXgb > div >   div.a4bIc > input"

async function gsearch() {
const browser = await puppeteer.launch({headless:false, args:['--no-sandbox', '--disable-setuid-sandbox']});
const page = await browser.newPage();

await page.goto('https://google.com');
 var fs  = require("fs");
var array = fs.readFileSync("words.txt").toString().split('\n');
var random = array[Math.floor(Math.random() * array.length)]
await page.click(searchbar)
await page.keyboard.type("what is " + random);
await page.waitFor(1000);
await page.evaluate(() => {
  let elements = $('LC20lb').toArray();
  for (i = 0; i < elements.length; i++) {
    $(elements[i]).click();


  } 
 })
}

gsearch();*/
