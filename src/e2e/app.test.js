import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = await fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

//  test('should add "valid" class for valid input', async () => {
//      await page.goto(baseUrl);
//      const form = await page.$('#enterform');
//      const input = await form.$('#entercard');
//      await input.type('5084840100137725');
//      const submit = await form.$('#enterbutton');
//      submit.click();
//      await page.waitForSelector('#entercard.valid');
//  });

//  test('should add "invalid" class for invalid input', async () => {
//      await page.goto(baseUrl);
//      const form = await page.$('#enterform');
//      const input = await form.$('#entercard');
//      await input.type('5084840100137726');
//      const submit = await form.$('#enterbutton');
//      submit.click();
//      await page.waitForSelector('#entercard.invalid');
//  });

  describe('Check credit card form -- valid', () => {
    test('should add .valid class for valid card number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('#enterform');
      const input = await form.$('#entercard');
      await input.type('5084840100137725');
      const submit = await form.$('#enterbutton');
      submit.click();
      await page.waitForSelector('#entercard.valid');
    });
  });
  
  describe('Check credit card form -- invalid', () => {
    test('should add .invalid class for invalid card number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('#enterform');
      const input = await form.$('#entercard');
      await input.type('5084840100137726');
      const submit = await form.$('#enterbutton');
      submit.click();
      await page.waitForSelector('#entercard.invalid');
    });
  });
  
});
