//const { format, addDays } = require('date-fns'); // date-fns import

class EventsPage {
  constructor(page) {
    this.page = page;
    this.moreFiltersOption = page.locator('div.evnt-toggle-filters-button.btn');
    this.dateFromCalendar = page.locator('#dates_fromDate');
    this.dateTillCalendar = page.locator('#dates_toDate');
    this.cardDate = page.locator('p[aria-label="date"]');
  }

  async clickMoreFiltersOption() {
    await this.moreFiltersOption.click();
  }

  async verifyMoreFiltersVisible() {
    const filtersVisible = await this.moreFiltersOption.isVisible();
    if (!filtersVisible) {
      throw new Error('More Filters option is not visible');
    }
  }
}

module.exports = EventsPage;
