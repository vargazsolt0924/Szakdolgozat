class CommunitiesPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('.evnt-search-filter');
    this.communityCards = page.locator('.evnt-card-wrapper');
    this.joinButton = page.locator('evnt-nav-cell subscribe-buttons');
    this.joinedButton = page.locator('.evnt-nav-cell.subscribe-buttons', {
      hasText: 'Joined',
    });
    this.littleVideosButton = page.locator(
      '.evnt-sub-header a[href="/communities/idea-pool/videos"]'
    );
    this.firstVideo = page.locator(
      'div.evnt-video-cards-column:first-child iframe'
    );
    this.seekBar = page.locator('#plyr-seek-2630');
    this.currentTiem = page
      .locator('div.plyr__time.plyr__time--current')
      .nth(12);
    this.popUpCloseButton = page.locator('[data-name="close"]');
    this.homeButton = page.locator(
      '.evnt-sub-header a[href="/communities/idea-pool"]'
    );
  }

  async open() {
    await this.page.goto('https://wearecommunity.io/communities/idea-pool/');
  }

  async clickVideosButton() {
    await this.littleVideosButton.click();
  }

  async startFirstVideo() {
    await this.firstVideo.click();
  }

  async enterAndExitFullscreen() {
    await this.firstVideo.dblclick();
  }

  async closePopUp() {
    await this.popUpCloseButton.click();
  }

  async seekTo10Minutes() {}

  async clickHomeButton() {
    await this.homeButton.click();
  }
}

module.exports = CommunitiesPage;
