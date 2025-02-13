const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    this.browser = null;
    this.page = null;
    this.context = null;
  }

  async init() {
    this.browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    this.context = await this.browser.newContext({ viewport: null });
    this.page = await this.context.newPage();
  }

  async cleanup() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
