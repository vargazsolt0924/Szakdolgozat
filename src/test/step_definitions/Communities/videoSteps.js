const { Given, When, Then, BeforeStep, world, setDefaultTimeout } = require('@cucumber/cucumber');
const CommunitiesPage = require('../../page_objects/CommunitiesPage');

setDefaultTimeout(50000);
let communitiesPage;

BeforeStep(async function () {
  communitiesPage = new CommunitiesPage(world.page);
});

Given('the {string} page is opened', async (string) => {
  await communitiesPage.open();
});

When(`the community's {string} button is clicked`, async (buttonName) => {
  if (buttonName === 'Videos') {
    await communitiesPage.clickVideosButton();
  } else {
    await communitiesPage.clickHomeButton();
  }
});

Then(`the community's videos should be listed`, async () => {});

When('the first video is started', async () => {
  await communitiesPage.startFirstVideo();
});

When('the {string} pop up is closed', async (string) => {
  await communitiesPage.closePopUp();
});

When('the video is entered to {string}', async (string) => {
  await communitiesPage.enterAndExitFullscreen();
});

When('seeking to 10 minutes is done', async () => {
  await communitiesPage.seekTo10Minutes();
});

Then('the current time should be changed to 10:00', async () => {});

When('the video is taken out of {string}', async () => {
  await communitiesPage.enterAndExitFullscreen();
});

Then('the {string} community home page should be opened', async () => {});
