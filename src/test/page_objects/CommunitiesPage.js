class CommunitiesPage{
    constructor(page){
        this.page = page;
        this.searchInput = page.locator('.evnt-search-filter');
        this.communityCards = page.locator('.evnt-card-wrapper');
        this.joinButton = page.locator('evnt-nav-cell subscribe-buttons');
        this.joinedButton = page.locator('.evnt-nav-cell.subscribe-buttons', { hasText: "Joined" });
        this.littleVideosButton= page.locator('.evnt-sub-header a[href="/communities/idea-pool/videos"]');
        this.playButton = page.locator('div.evnt-video-cards-column:first-child iframe');
        this.seekBar = page.locator('#plyr-seek-8957');
    }
}

module.exports = CommunitiesPage;