const { When, Then, BeforeStep, world } = require('@cucumber/cucumber');
const MainPage = require('../page_objects/MainPage');

let mainPage;

BeforeStep(async function () {
  mainPage = new MainPage(world.page);
});

When('the {string} entered in the field', async (string) => {
  if (string === 'email') {
    await mainPage.enterEmail();
  } else {
    await mainPage.enterPassword();
  }
});

When('the {string} button is clicked', async (string) => {
  if (string === 'Login') {
    await mainPage.clickLoginButton();
  } else if (string === 'Continue') {
    await mainPage.clickContinueButton();
  } else if (string === 'Sign in') {
    await mainPage.clickSignInButton();
  } else {
    await mainPage.clickLogoutButton();
  }
});

Then('the {string} page should be opened again', async (expectedPage) => {
  const currentURL = await mainPage.page.url();
  let expectedURL;
  switch (expectedPage) {
    case 'Main':
      expectedURL = 'https://wearecommunity.io/';
      break;
    case 'Login':
      expectedURL =
        'https://access.epam.com/auth/realms/plusx/protocol/openid-connect/auth?client_id=oauth-client.epm-evnt.community-z.prod&response_type=code&redirect_uri=https://wearecommunity.io/sso-callback&scope=openid+profile+email';
      break;
  }
  if (currentURL !== expectedURL) {
    throw new Error(
      `Expected URL to be '${expectedURL}', but got '${currentURL}'`
    );
  }
});

When(
  'the {string} dropdown is opened in the top right corner',
  async (string) => {
    await mainPage.clickProfileDropdown();
  }
);
When('the {string} button is clicked again', async (string) => {
  await mainPage.clickTheSecondLogoutButton();
});
