class MainPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('li.evnt-header-button.login');
    this.emailField = page.locator('#username');
    this.continueButton = page.locator('#kc-login-next');
    this.passwordField = page.locator('#password');
    this.verifyCheckbox = page.locator('#turnstileContainer input');
    this.signInButton = page.locator('#kc-login');
    this.profileDropdown = page.locator('#navbarDropdown');
    this.logoutButton = page.locator('a.dropdown-item.logout-icon');
    this.secondLogoutButton = page.locator('#kc-form-buttons');
    this.articlesButton = page.locator(
      'li.nav-item.articles-icon a[href="/articles"]'
    );
    this.communitiesButton = page.locator(
      'li.nav-item.communities-icon a[href="/communities"]'
    );
    this.eventsButton = page.locator(
      'li.nav-item.events-icon a[href="/events"]'
    );
    this.speakersButton = page.locator(
      'li.nav-item.speakers-icon a[href="/speakers"]'
    );
    this.videosButton = page.locator(
      'li.nav-item.talks-library-icon a[href="/videos"]'
    );
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
    await this.emailField.fill('');
  }

  async enterPassword() {
    await this.passwordField.fill('');
    await this.passwordField.press('Enter');
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickSignInButton() {
    await this.signInButton.click();
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
