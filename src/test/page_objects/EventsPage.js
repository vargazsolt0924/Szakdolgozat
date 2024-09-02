class EventsPage{
    constructor(page){
        this.page =page;
        this.loginButton = page.locator("evnt-header-button login");
        this.emailField = page.locator("#username");
        this.continueButton = page.locator("#kc-login-next");
        this.passwordField = page.locator("#password");
        this.verifyCheckbox = page.locator("#turnstileContainer input");
        this.signInButton = page.locator("#kc-login");
        this.moreFiltersOption = page.locator("evnt-toggle-filters-button btn");
        this.languageFilter = page.locator("#filter_language");
        this.languageFilterCheckbox = page.locator(".evnt-filter-item");
        this.eventFormatOption = page.locator("#filter_event_participation_format");
        this.offlineOnlyCheckbox = page.locator("label[data-value='Offline only']");
        this.eventsSatusDropdown = page.locator("#filter_event_status");
        this.freeRegistrationCheckbox = page.locator("label[data-value='Free registration is available']");
        this.todayEventLanguage = page.locator(".evnt-language");

    }
}

module.exports = EventsPage;