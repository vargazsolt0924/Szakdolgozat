const { config } = require('dotenv');
config();
class MainPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('li.evnt-header-button.login');
    this.emailField = page.locator('#userName');
    this.continueButton = page.locator('.styles_defaultButton__1fEag.styles_primary__CzAMG.submitButton');
    this.passwordField = page.locator('input[type="password"]');
    this.signInButton = page.locator('.styles_defaultButton__1fEag.styles_primary__CzAMG.submitButton');
    this.loader = page.locator('.epamLoader');
    this.collectionButton = page.locator('.evnt-collections-button');
    this.profileDropdown = page.locator('#navbarDropdown');
    this.logoutButton = page.locator('a.dropdown-item.logout-icon');
    this.secondLogoutButton = page.locator('#kc-form-buttons');
    this.articlesButton = page.locator('li.nav-item.articles-icon a[href="/articles"]');
    this.communitiesButton = page.locator('li.nav-item.communities-icon a[href="/communities"]');
    this.eventsButton = page.locator('li.nav-item.events-icon a[href="/events"]');
    this.speakersButton = page.locator('li.nav-item.speakers-icon a[href="/speakers"]');
    this.videosButton = page.locator('li.nav-item.talks-library-icon a[href="/videos"]');
  }

  async open() {
    await this.page.goto('https://wearecommunity.io/');
  }

  async navigateToSubPage(subPageName) {
    await this[subPageName].click();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async enterEmail() {
    await this.emailField.fill(process.env.EMAIL);
  }

  async enterPassword() {
    await this.passwordField.fill(process.env.PASSWORD);
    await this.passwordField.press('Enter');
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickSignInButton() {
    await this.signInButton.click();
    //await this.page.waitForSelector('.epamLoader', { state: 'hidden' });
    // await this.page.waitForSelector(this.collectionButton, { state: 'visible' });
  }

  async clickProfileDropdown() {
    await this.profileDropdown.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async clickTheSecondLogoutButton() {
    await this.secondLogoutButton.click();
  }
}

module.exports = MainPage;
