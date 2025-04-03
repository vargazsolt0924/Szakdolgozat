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

When('the date from and till are picked as today', async () => {
  await eventsPage.pickTodayDate();
});

Then("check all the listed cards should contain today's date", async () => {
  await eventsPage.checkListedEventsForToday();
});
