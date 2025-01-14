const { Given, When, Then, BeforeStep } = require('@cucumber/cucumber');
const ArticlesPage = require('../../page_objects/ArticlesPage.js');
const  generalSteps = require('../generalSteps.js'); 

let articlesPage;

BeforeStep(async function () {
    articlesPage = new ArticlesPage(world.page);
});

When('I search for {string}', async (input) => {
    await articlesPage.searchForInput(input);
});

Then('{int} article card(s) should be listed', async (cardCount) => {
    const cards = await articlesPage.getArticleCards();
    if (cards.length !== cardCount) {
        throw new Error(`Expected ${cardCount} cards, but found ${cards.length}`);
    }
});

Then('the {string} word is contained on all cards', async (cardName) => {
    const cards = await articlesPage.getArticleCards();
    for (const card of cards) {
        const cardText = await card.textContent();
        if (!cardText.includes(cardName)) {
            throw new Error(`The card does not contain the word: ${cardName}`);
        }
    }
});

When('the tag is narrowed to {string}', async (checkboxName) => {
    await articlesPage.filterByTag(checkboxName);
});

When('the \"highlighted checkbox\" is clicked', async () => {
    await articlesPage.clickHighlightedCheckbox();
});

When('the \"More Filters\" option is opened', async () => {
    await articlesPage.openMoreFilters();
});

When('the \"Language Filter\" Dropdown is opened', async () => {
    await articlesPage.openLanguageFilterDropdown();
});

When('the {string} checkbox is selected', async (checkboxName) => {
    await articlesPage.selectLanguageCheckbox(checkboxName);
});
