const expect = require('@playwright/test').expect;

class SpeakersPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('.evnt-search-filter .form-control.evnt-search');
    this.profileCard = page.locator('a[href="/users/laszlo-szikszai"]');
    this.githubButton = page.locator('.evnt-social-container a[href="https://github.com/szikszail"]');
    this.githubProfileName = page.locator('h1.vcard-names  span.p-name.vcard-fullname.d-block.overflow-hidden');
    this.shareLinkDropdown = page.locator('share-profile-button show');
    this.copyButton = page.locator('div.Share-module__popoverInputWrapper__3hKYi');
    this.profileName = page.locator('.evnt-card-name');
  }

  async searchForInput(input) {
    await this.searchInput.fill(input);
    await this.searchInput.press('Enter');
  }

  async clickProfileCard() {
    await this.profileCard.click();
  }

  async clickGithubButton() {
    const [newPage] = await Promise.all([this.page.context().waitForEvent('page'), this.githubButton.click()]);
    await newPage.waitForLoadState('load');
    this.page = newPage;
  }

  async checkProfileName(expectedName) {
    const actualName = await this.githubProfileName.textContent();
    expect(actualName.trim()).toBe(expectedName);
  }

  async clickShareLinkDropdown() {
    await this.shareLinkDropdown.click();
  }
}

module.exports = SpeakersPage;
