const { When, Then, BeforeStep, world, AfterStep } = require('@cucumber/cucumber');
const CommunitiesPage = require('../../page_objects/CommunitiesPage');

let communitiesPage;

BeforeStep(async function () {
  communitiesPage = new CommunitiesPage(world.page);
});

When('{string} is entered in the search bar', async (string) => {
  await communitiesPage.searchForInput(string);
});

When('the {string} community card is clicked', async (string) => {
  await communitiesPage.clickCommunityCard();
});

When(`the Idea Pool's {string} button is clicked`, async (string) => {
  await communitiesPage.clickJoinButton();
});

Then(`the {string} button's label should be changed to Joined!`, async (string) => {
  await communitiesPage.joinButtonCheck();
});

AfterStep(async function () {
  await communitiesPage.leaveCommunity();
});
