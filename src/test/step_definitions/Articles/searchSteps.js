const { When, Then, BeforeStep, world } = require('@cucumber/cucumber');
const ArticlesPage = require('../../page_objects/ArticlesPage.js');

let articlesPage;

BeforeStep(async function () {
  articlesPage = new ArticlesPage(world.page);
});

When('the {string} is searched', async (input) => {
  await articlesPage.searchForInput(input);
});

Then('{int} article card\\(s) should be listed', async (expectedCardCount) => {
  await articlesPage.waitForArticleCardsCount(expectedCardCount);
});

Then('the {string} word is contained on all cards', async (word) => {
  await articlesPage.verifyAllCardsContainWord(word);
});

When('the tag is narrowed to {string}', async (tag) => {
  await articlesPage.clickTagFilter();
  await articlesPage.setTagFilterInput(tag);
});

When('the {string} is clicked', async (checkbox) => {
  await articlesPage.clickHighlightedCheckbox();
});

When('the {string} option is opened', async (option) => {
  await articlesPage.clickMoreFiltersOption();
});

When('the {string} dropdown is opened', async (string) => {
  await articlesPage.clickLanguageFilter();
  await articlesPage.waitForLanguageFilterDropdown();
});

When('the {string} checkbox is selected', async (language) => {
  await articlesPage.selectLanguageCheckbox(language);
});
