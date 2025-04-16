const { Before, After } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(20000);

Before(async function () {
  await this.init();
});

After(async function () {
  await this.cleanup();
});
