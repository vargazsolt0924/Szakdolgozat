class VideosPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator(
      '.evnt-search-filter .form-control.evnt-search'
    );
    this.videoCard = page.locator('.evnt-talk-card');
    this.videoCardName = page.locator('.evnt-talk-name');
    this.watchButton = page.locator('#video_play');
    this.playbackRateButton = page.locator('#plyr-toggle-speed-71');
    this.twoSpeedButton = page.locator('input[value="2"]');
    this.videoCloseButton = page.locator('div.evnt-video-close');
  }
}

module.exports = VideosPage;
