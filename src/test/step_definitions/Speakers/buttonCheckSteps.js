const { When, Then } = require('@cucumber/cucumber');
const SpeakersPage = require('../../page_objects/SpeakersPage');

let speakersPage;

When('the speaker {string} is searched', async function (string) {
  speakersPage = new SpeakersPage(this.page);
  await speakersPage.searchForInput(string);
});

When('the {string} card is clicked', async function (string) {
  await speakersPage.clickProfileCard();
});

When('the {string} icon is clicked', async function (string) {
  await speakersPage.clickGithubButton();
});

Then('the GitHub profile name is should be {string}', async function (string) {
  await speakersPage.checkProfileName(string);
});
