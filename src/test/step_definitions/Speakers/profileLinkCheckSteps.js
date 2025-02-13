const { When, Then, BeforeStep, world } = require('@cucumber/cucumber');
const SpeakersPage = require('../../page_objects/SpeakersPage');

let speakersPage;

BeforeStep(async function () {
  speakersPage = new SpeakersPage(world.page);
});

When('the {string} dropdown is clicked', async (string) => {
  speakersPage.clickShareLinkDropdown();
});

When('the {string} is copied', async (string) => {});
When('the {string} is opened on a new tab', async (string) => {});
