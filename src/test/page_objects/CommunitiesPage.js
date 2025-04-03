const expect = require('@playwright/test').expect;

class CommunitiesPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('[placeholder="Search by Title or Tags"]');
    this.communityCards = page.locator('.evnt-card-wrapper');
    this.ideaPoolCommunityCardText = page.locator('[data-tooltip-id=community-card-tooltip_418]');
    this.joinButton = page.locator('.Button-module__button__Oq73a.Button-module__medium__2vqKz.Button-module__grass__LyAs-.subscribe.reg-button');
    this.joinedButton = page.locator('.Button-module__button__Oq73a.Button-module__medium__2vqKz.unsubscribe.reg-button');
    this.okButton = page.locator('button.Button-module__button__Oq73a.Button-module__small__3KYbo.Button-module__fire__3Aw4y');
  }

  async open() {
    await this.page.goto('https://wearecommunity.io/communities/idea-pool/');
  }

  async searchForInput(input) {
    await this.searchInput.fill(input);
    await this.searchInput.press('Enter');
  }

  async clickCommunityCard() {
    const ideaPoolCard = this.ideaPoolCommunityCardText;
    await ideaPoolCard.waitFor({ state: 'visible' });
    await ideaPoolCard.click();
  }

  async clickJoinButton() {
    await this.joinButton.click();
  }

  async joinButtonCheck() {
    const joinedButton = this.joinedButton;
    await joinedButton.waitFor({ state: 'visible' });

    const joinButton = this.joinButton;
    const isVisible = await joinButton.isVisible();
    expect(isVisible).toBeFalsy();

    const buttonText = await joinedButton.textContent();
    expect(buttonText.trim()).toBe('Joined!');
  }

  async leaveCommunity() {
    if (await this.joinedButton.isVisible()) {
      await this.joinedButton.click();
      await this.okButton.waitFor({ state: 'visible' });
      await this.okButton.click();
    }
  }
}

module.exports = CommunitiesPage;
