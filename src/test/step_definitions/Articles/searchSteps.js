const { Given, When, Then, BeforeStep, world, Before} = require('@cucumber/cucumber');
const MainPage = require('../../page_objects/MainPage.js');
const ArticlesPage = require('../../page_objects/ArticlesPage.js');

let mainPage;
let articlesPage;

BeforeStep(async function () {
    mainPage = new MainPage(world.page);
    articlesPage = new ArticlesPage(world.page);
});

Given("the 'Main' site is opened", async () => {
    await mainPage.open();
});

Given("the 'Articles' button is clicked", async () => {
    await mainPage.clickArticlesButton();
});

When("I search for {string}", async (input) => {
    await articlesPage.searchForInput(input);
});
