const { When, Then, BeforeStep, world } = require('@cucumber/cucumber');
const SpeakersPage = require('../../page_objects/SpeakersPage');

let speakersPage;

BeforeStep(async function () {
  speakersPage = new SpeakersPage(world.page);
});

When('the {string} dropdown is clicked', async (string) => {
  await speakersPage.clickShareLinkDropdown();
});

When('the {string} field is clicked', async (string) => {
  await speakersPage.clickInputField();
});

Then(`the clipboard's content is should be included the right link`, async () => {
  await speakersPage.checkProfileLink('https://wearecommunity.io/users/laszlo-szikszai');
});
