const { When, Then, BeforeStep, world } = require('@cucumber/cucumber');
const SpeakersPage = require('../../page_objects/SpeakersPage');

let speakersPage;

BeforeStep(async function () {
  speakersPage = new SpeakersPage(world.page);
});

When('the speaker {string} is searched', async (string) => {
  await speakersPage.searchForInput(string);
});

When('the {string} card is clicked', async (string) => {
  await speakersPage.clickProfileCard();
});

When('the {string} icon is clicked', async (string) => {
  await speakersPage.clickGithubButton();
});

Then('the GitHub profile name is should be {string}', async (string) => {
  await speakersPage.checkProfileName(string);
});
