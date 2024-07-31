class ArticlesPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('.evnt-search-filter .form-control.evnt-search');
        this.articleCards = page.locator('.evnt-articles-wrapper .evnt-card-wrapper');
        this.articleCardTitles = page.locator('.evnt-articles-wrapper .evnt-article-name');
        this.tagFilter = page.locator('#filter_tag');
        this.tagFilterInput = page.locator('.evnt-filter-menu.show .evnt-search');
        this.tagFilterHighlightedItem = page.locator('.highlight-text');
        this.moreFiltersOption = page.locator('evnt-toggle-filters-button btn');
        this.languageFilter = page.locator('#filter_language');
        this.languageFilterCheckBox = page.locator('.evnt-filter-item');
        this.checkBoxName = page.locator('.evnt-filter-item .form-check-label');
    }
}

module.exports = ArticlesPage;
