class SpeakersPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('.evnt-search-filter .form-control.evnt-search');
        this.profileCard = page.locator('.evnt-user-card');
        this.githubButton = page.locator('.evnt-social-container a[href="https://github.com/szikszail"]');
        this.githubProfileName = page.locator('p-name vcard-fullname d-block overflow-hidden');
        this.shareLinkDropdown = page.locator('share-profile-button show'); 
        this.copyButton = page.locator('div.Share-module__popoverInputWrapper__3hKYi');
        this.profileName = page.locator('.evnt-card-name');
    }
}

module.exports = SpeakersPage;