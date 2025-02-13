const { Given, When, BeforeStep, Then, world } = require('@cucumber/cucumber');
const MainPage = require('../page_objects/MainPage');
const expectedUrls = require('../../data/testData');

let mainPage;

BeforeStep(async function () {
  mainPage = new MainPage(world.page);
});

Given('the {string} site is opened', async (string) => {
  await mainPage.open();
});

Given('the test user is logged in', async () => {
  await mainPage.clickLoginButton();
  await mainPage.enterEmail();
  await mainPage.clickContinueButton();
  await mainPage.enterPassword();
  await mainPage.clickSignInButton();
});

When(/the '(Articles|Events|Communities|Speakers|Videos)' button is clicked in the header/, async (subPageName) => {
  const subPageNameMapping = {
    Articles: 'articlesButton',
    Events: 'eventsButton',
    Communities: 'communitiesButton',
    Speakers: 'speakersButton',
    Videos: 'videosButton',
  };
  await mainPage.navigateToSubPage(subPageNameMapping[subPageName]);
});

Then('the {string} page should be opened', async function (expectedPage) {
  const currentURL = await this.page.url();

  const expectedURL = expectedUrls[expectedPage];

  if (currentURL !== expectedURL) {
    throw new Error(`Expected URL to be '${expectedURL}', but got '${currentURL}'`);
  }
});
