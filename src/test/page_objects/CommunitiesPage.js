class CommunitiesPage{
    constructor(page){
        this.page = page;
        this.loginButton = page.locator("evnt-header-button login");
        this.emailField = page.locator("#username");
        this.continueButton = page.locator("#kc-login-next");
        this.passwordField = page.locator("#password");
        this.verifyCheckbox = page.locator("#turnstileContainer input");
        this.signInButton = page.locator("#kc-login");
        this.searchInput = page.locator(".evnt-search-filter");
        this.joinButton = page.locator(".evnt-reg-wrapper");
        this.communityCards = page.locator(".evnt-card-wrapper");
        this.littleVideosButton= page.locator(".evnt-sub-header a[href='/communities/idea-pool/videos']");
        this.playButton = page.locator(".plyr__poster:nth-of-type(1)");
        this.fullScreenButton = page.locator("");
        this.verifyCheckbox = page.locator("");
        this.verifyCheckbox = page.locator("");
        this.verifyCheckbox = page.locator("");
    }
}

module.exports = CommunitiesPage;