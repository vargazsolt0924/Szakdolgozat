const { expect } = require('@playwright/test');

class SpeakersPage {
  constructor(page) {
    this.page = page;
    this.githubPage = null;
    this.searchInput = page.locator('.evnt-search-filter .form-control.evnt-search');
    this.profileCard = page.locator('a[href="/users/laszlo-szikszai"]');
    this.githubButton = page.locator('.evnt-social-container a[href="https://github.com/szikszail"]');
    this.githubProfileName = page.locator('h1.vcard-names span.p-name.vcard-fullname.d-block.overflow-hidden');
    this.shareLinkDropdown = page.locator('div.share-profile-button');
    this.inputField = page.locator('input.evnt-text-fields.form-control.Share-module__popoverInput__WI6mC');
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

  async clickInputField() {
    await this.inputField.click();
  }

  async checkProfileLink(expectedLink) {
    const clipboardContent = await this.page.evaluate(() => navigator.clipboard.readText());
    expect(clipboardContent.trim()).toBe(expectedLink);
  }
}

module.exports = SpeakersPage;
