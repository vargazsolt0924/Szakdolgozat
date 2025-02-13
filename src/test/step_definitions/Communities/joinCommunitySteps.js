const { When, Then, BeforeStep, world, AfterAll } = require('@cucumber/cucumber');
const CommunitiesPage = require('../../page_objects/CommunitiesPage');
const expectedUrls = require('../../../data/testData');
const MainPage = require('../../page_objects/MainPage');

let mainPage;
let communitiesPage;

BeforeStep(async function () {
  mainPage = new MainPage(world.page);
  communitiesPage = new CommunitiesPage(world.page);
});

When('{string} is entered in the search bar', async (string) => {
  await communitiesPage.searchForInput(string);
});

When('the {string} community card is clicked', async (string) => {
  await communitiesPage.clickCommunityCard();
});

Then('the {string} community should be opened', async (expectedPage) => {
  const currentURL = await mainPage.page.url();

  const expectedURL = expectedUrls[expectedPage];

  if (currentURL !== expectedURL) {
    throw new Error(`Expected URL to be '${expectedURL}', but got '${currentURL}'`);
  }
});

When(`the Idea Pool's {string} button is clicked`, async (string) => {
  await communitiesPage.clickJoinButton();
});

Then(`the {string} button's label should be changed to Joined!`, async (string) => {
  await communitiesPage.joinButtonCheck();
});
