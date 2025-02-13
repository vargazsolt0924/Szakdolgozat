const expect = require('@playwright/test').expect;

class CommunitiesPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('[placeholder="Search by Title or Tags"]');
    this.communityCards = page.locator('.evnt-card-wrapper');
    this.communityCardsText = page.locator('[data-tooltip-id=community-card-tooltip_418]');
    this.joinButton = page.locator('.Button-module__button__Oq73a.Button-module__medium__2vqKz.Button-module__grass__LyAs-.subscribe.reg-button');
    this.joinedButton = page.locator('.Button-module__button__Oq73a.Button-module__medium__2vqKz.unsubscribe.reg-button');
    this.littleVideosButton = page.locator('.evnt-sub-header a[href="/communities/idea-pool/videos"]');
    this.firstVideo = page.locator('div.evnt-video-cards-column:first-child iframe');
    this.seekBar = page.locator('#plyr-seek-2630');
    this.currentTime = page.locator('div.plyr__time.plyr__time--current').nth(12);
    this.popUp = page.locator('div.video-summary__container');
    this.popUpCloseButton = page.locator('[data-name="close"]');
    this.homeButton = page.locator('.evnt-sub-header a[href="/communities/idea-pool"]');
  }

  async open() {
    await this.page.goto('https://wearecommunity.io/communities/idea-pool/');
  }

  async searchForInput(input) {
    await this.searchInput.fill(input);
    await this.searchInput.press('Enter');
  }

  async clickCommunityCard() {
    const ideaPoolCard = this.communityCardsText;
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

  async clickVideosButton() {
    await this.littleVideosButton.click();
  }

  async startFirstVideo() {
    this.page.waitForTimeout(10000);
    await this.firstVideo.click();
  }

  async closePopUp() {
    await this.popUp.waitFor({ state: 'visible' });
    await this.popUpCloseButton.click();
  }

  async enterAndExitFullscreen() {
    await this.firstVideo.dblclick();
  }

  async seekTo10Minutes() {}

  async clickHomeButton() {
    await this.homeButton.click();
  }
}

module.exports = CommunitiesPage;
