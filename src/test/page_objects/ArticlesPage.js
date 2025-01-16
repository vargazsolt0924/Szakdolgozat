const expect = require('@playwright/test').expect

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

    async searchForInput(input) {
        await this.searchInput.fill(input);
        await this.searchInput.press('Enter');
    }

    async waitForArticleCardsCount(expectedCardCount) {
        await this.page.waitForTimeout(2000);
        const currentCardCount = await this.articleCards.all();
        console.log(currentCardCount)
        expect(currentCardCount.length).toBe(expectedCardCount);
    }

    async verifyAllCardsContainWord(word) {
        const cardTitles = await this.articleCardTitles.allTextContents();
        for (const title of cardTitles) {
            expect(title).toContain(word);
        }
    }

    async clickTagFilter() {
        try {
            await this.tagFilter.click();
        } catch (error) {
            console.error('Failed to click tag filter:', error);
        }
    }

    async setTagFilterInput(tag) {
        await this.tagFilterInput.fill(tag);
    }

    async clickHighlightedCheckbox() {
        await this.tagFilterHighlightedItem.click();
    }

    async clickMoreFiltersOption() {
        await this.moreFiltersOption.click();
    }

    async waitForMoreFiltersOption() {
        await this.page.waitForSelector(this.moreFiltersOption);
    }

    async clickLanguageFilter() {
        await this.languageFilter.click();
    }

    async waitForLanguageFilterDropdown() {
        await this.page.waitForSelector(this.languageFilterCheckBox);
    }

    async selectLanguageCheckbox(language) {
        const checkbox = this.page.locator(`.evnt-filter-item .form-check-label:has-text("${language}")`);
        await checkbox.check();
    }
}

module.exports = ArticlesPage;
