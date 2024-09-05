class VideosPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('.evnt-search-filter .form-control.evnt-search');
        this.videoCard = page.locator('.evnt-talk-card');
        this.videoCardName = page.locator('.evnt-talk-name');
        this.watchButton = page.locator('#video_play');
        this.playbackRateButton = page.locator('#plyr-toggle-speed-71');
        this.twoSpeedButton = page.locator('input[value="2"]');
        this.playButton = page.locator('.plyr__control.plyr__control--play');
        this.videoCloseButton = page.locator('.evnt-video-close');
        this.profileDropdown = page.locator('#navbarDropdown');
        this.logoutButton = page.locator('.dropdown-item.logout-icon');
        this.secondLogoutButton = page.locator('#kc-form-buttons');
    }
}

module.exports = VideosPage;