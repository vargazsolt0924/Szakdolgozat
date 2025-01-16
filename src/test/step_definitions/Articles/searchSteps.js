const { Given, When, Then, BeforeStep, world, setDefaultTimeout } = require('@cucumber/cucumber');
const ArticlesPage = require('../../page_objects/ArticlesPage.js');
const  generalSteps = require('../generalSteps.js'); 
//setDefaultTimeout(parseInt(process.env.DEFAULT_TIMEOUT) || 60000);

let articlesPage;

BeforeStep(async function () {
    articlesPage = new ArticlesPage(world.page);
});

When('I search for {string}', async (input) => {
    await articlesPage.searchForInput(input);
});

Then('I see {int} article card', async (expectedCardCount) => {
    await articlesPage.waitForArticleCardsCount(expectedCardCount);
});

Then('All cards contain the {string} word', async (word) => {
    await articlesPage.verifyAllCardsContainWord(word);
});

When('I narrow the tag to {string}', async (tag) => {
    await articlesPage.clickTagFilter();
    await articlesPage.setTagFilterInput(tag);
});

When('I click the highlighted checkbox', async () => {
    await articlesPage.clickHighlightedCheckbox();
});

Then('the "More Filters" option is opened', async () => {
    await articlesPage.clickMoreFiltersOption();
    await articlesPage.waitForMoreFiltersOption();
});

Then('the Language Filter Dropdown is opened', async () => {
    await articlesPage.clickLanguageFilter();
    await articlesPage.waitForLanguageFilterDropdown();
});

When('the{string} checkbox is selected', async (language) => {
    await articlesPage.selectLanguageCheckbox(language);
});
