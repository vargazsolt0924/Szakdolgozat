const expect = require('@playwright/test').expect;

class ArticlesPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('.evnt-search-filter .form-control.evnt-search');
    this.articleCards = page.locator('.evnt-articles-wrapper .evnt-card-wrapper');
    this.articleCardTitles = page.locator('.evnt-articles-wrapper .evnt-article-name');
    this.tagFilter = page.locator('#filter_tag');
    this.tagFilterInput = page.locator('.evnt-filter-menu.show .evnt-search');
    this.tagFilterHighlightedItem = page.locator('.highlight-text');
    this.moreFiltersOption = page.locator('div.evnt-toggle-filters-button.btn');
    this.languageFilter = page.locator('#filter_language');
    this.languageFilterCheckBox = page.locator('.evnt-filter-item');
    this.checkBoxName = page.locator('.evnt-filter-item .form-check-label');
  }

  async searchForInput(input) {
    await this.searchInput.fill(input);
    await this.searchInput.press('Enter');
  }

  async waitForArticleCardsCount(expectedCardCount) {
    await expect
      .poll(
        async () => {
          const currentCardCount = await this.articleCards.all();
          return currentCardCount.length;
        },
        { timeout: 10000 }
      )
      .toBe(expectedCardCount);
  }

  async verifyAllCardsContainWord(word) {
    const cardTitles = await this.articleCardTitles.allTextContents();
    for (const title of cardTitles) {
      expect(title.toLowerCase()).toContain(word.toLowerCase());
    }
  }

  async clickTagFilter() {
    await this.tagFilter.click();
  }

  async setTagFilterInput(tag) {
    await this.tagFilterInput.fill(tag);
  }

  async clickHighlightedCheckbox() {
    await this.tagFilterHighlightedItem.first().click();
  }

  async clickMoreFiltersOption() {
    await this.moreFiltersOption.click();
  }

  async clickLanguageFilter() {
    await this.languageFilter.click();
  }

  async waitForLanguageFilterDropdown() {
    await this.languageFilterCheckBox.first().waitFor({ state: 'visible' });
  }

  async selectLanguageCheckbox(language) {
    const checkbox = this.page.locator(`.evnt-filter-item .form-check-label:has-text("${language}")`);
    await checkbox.check();
  }
}

module.exports = ArticlesPage;
