import puppeteer from "puppeteer";

export class Launcher {
  constructor() {}

  async execute() {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    });

    this.browser = browser;
  }

  async CreatePage(url) {
    const browser = this.browser;

    const page = await browser.newPage();

    await page.setViewport({
      width: 1600,
      height: 600,
      deviceScaleFactor: 5,
    });

    page.setDefaultNavigationTimeout(0);
    page.on("console", async (msg) => {
      const msgArgs = msg.args();
      for (let i = 0; i < msgArgs.length; ++i) {
        console.log(await msgArgs[i].jsonValue());
      }
    });

    await page.goto(url);

    return page;
  }

  async getPage() {}
}
