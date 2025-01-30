const { Given, When, BeforeStep, Then, world } = require('@cucumber/cucumber');
const MainPage = require('../page_objects/MainPage');

let mainPage;

BeforeStep(async function () {
  mainPage = new MainPage(world.page);
});

Given('the {string} site is opened', async (string) => {
  await mainPage.open();
});

When(
  /the '(Articles|Events|Communities|Speakeres|Videos)' button is clicked in the header/,
  async (subPageName) => {
    const subPageNameMapping = {
      Articles: 'articlesButton',
      Events: 'eventsButton',
      Communities: 'communitiesButton',
      Speakers: 'speakersButton',
      Videos: 'videosButton',
    };
    await mainPage.navigateToSubPage(subPageNameMapping[subPageName]);
  }
);

Then('the {string} page should be opened', async function (expectedPage) {
  const currentURL = await this.page.url();

  let expectedURL;
  switch (expectedPage) {
    case 'Main':
      expectedURL = 'https://wearecommunity.io/';
      break;
    case 'Login':
      expectedURL =
        'https://access.epam.com/auth/realms/plusx/protocol/openid-connect/auth?client_id=oauth-client.epm-evnt.community-z.prod&response_type=code&redirect_uri=https://wearecommunity.io/sso-callback&scope=openid+profile+email';
      break;
    case 'Logout':
      expectedURL =
        'https://access.epam.com/auth/realms/plusx/protocol/openid-connect/logout?redirect_uri=https://wearecommunity.io/';
      break;
    case 'Communities':
      expectedURL = 'https://wearecommunity.io/communities';
      break;
    case 'Idea Pool':
      expectedURL = 'https://wearecommunity.io/communities/idea-pool';
      break;
    default:
      throw new Error(`Unknown page: ${expectedPage}`);
  }

  if (currentURL !== expectedURL) {
    throw new Error(
      `Expected URL to be '${expectedURL}', but got '${currentURL}'`
    );
  }
});
