class MainPage {
    constructor(page) {
        this.page = page;
        this.articleButton = page.locator("li.nav-item.articles-icon a[href='/articles']");
        this.communitiesButton = page.locator("li.nav-item.communities-icon a[href='/communities']");
        this.eventsButton = page.locator("li.nav-item.events-icon a[href='/events']");
        this.speakersButton = page.locator("li.nav-item.speakers-icon a[href='/speakers']");
        this.videosButton = page.locator("li.nav-item.talks-library-icon a[href='/videos']");
    }

    async open() {
        await this.page.goto('https://wearecommunity.io/');
    }

    async clickArticlesButton() {
        await this.articleButton.click();
    }

    async clickCommunitiesButton() {
        await this.communitiesButton.click();
    }

    async clickEventsButton() {
        await this.eventsButton.click();
    }

    async clickSpeakersButton() {
        await this.speakersButton.click();
    }

    async clickVideosButton() {
        await this.videosButton.click();
    }
}

module.exports = MainPage;
