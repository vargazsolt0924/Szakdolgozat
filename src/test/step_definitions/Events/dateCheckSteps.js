const { When, Then, BeforeStep, world } = require('@cucumber/cucumber');
const EventsPage = require('../../page_objects/EventsPage');

let eventsPage;

BeforeStep(async function () {
  eventsPage = new EventsPage(world.page);
});

When('the {string} option is clicked', async (string) => {
  await eventsPage.clickMoreFiltersOption();
});

Then('the more filters should be listed', async () => {
  await eventsPage.verifyMoreFiltersVisible();
});

When('the date from is picked from the {string}', async (string) => {});

When('the till date is picked from the {string}', async (string) => {});

Then('check all the listed cards date should be between this two dates', async () => {});
