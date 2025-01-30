const { When, Then, BeforeStep, world } = require('@cucumber/cucumber');
const CommunitiesPage = require('../../page_objects/CommunitiesPage');

let communitiesPage;

BeforeStep(async function () {
  communitiesPage = new CommunitiesPage(world.page);
});

When('the test user is logged in', async () => {});

When('{string} is entered in the search bar', async (string) => {});

When('the {string} community card is clicked', async (string) => {});

Then('the {string} community should be opened', async (string) => {});

When('the {string} join button is clicked', async (string) => {});

Then(
  `the {string} button's label should be changed to Joined!`,
  async (string) => {}
);
