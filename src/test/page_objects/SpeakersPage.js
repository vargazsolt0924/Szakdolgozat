const { expect } = require('@playwright/test');

class SpeakersPage {
  constructor(page) {
    this.page = page;
    this.githubPage = null;
    this.searchInput = page.locator('.evnt-search-filter .form-control.evnt-search');
    this.profileCard = page.locator('a[href="/users/laszlo-szikszai"]');
    this.githubButton = page.locator('.evnt-social-container a[href="https://github.com/szikszail"]');
    this.githubProfileName = page.locator('h1.vcard-names span.p-name.vcard-fullname.d-block.overflow-hidden');
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
    await this.githubButton.click();

    this.githubPage = await this.page.context().waitForEvent('page');

    await this.githubPage.waitForLoadState();
  }

  async checkProfileName(expectedName) {
    if (!this.githubPage) {
      throw new Error('GitHub oldal nem lett megnyitva!');
    }
    const actualName = await this.githubPage.locator('h1.vcard-names span.p-name.vcard-fullname.d-block.overflow-hidden').textContent();
    expect(actualName.trim()).toBe(expectedName);
  }

  async clickShareLinkDropdown() {
    await this.shareLinkDropdown.click();
  }
}

module.exports = SpeakersPage;
