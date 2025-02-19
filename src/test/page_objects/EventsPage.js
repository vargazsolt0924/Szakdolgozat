const { format, addDays } = require('date-fns');

class EventsPage {
  constructor(page) {
    this.page = page;
    this.moreFiltersOption = page.locator('div.evnt-toggle-filters-button.btn');
    this.dateFromCalendar = page.locator('#dates_fromDate');
    this.dateTillCalendar = page.locator('#dates_toDate');
    this.cardDate = page.locator('p[aria-label="date"]');
    this.calendarDay = page.locator('a.ui-state-default');
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

  async pickDateFrom() {
    const today = format(new Date(), 'd');
    await this.dateFromCalendar.click();
    await this.calendarDay.locator(`text="${today}"`).click();
  }

  async pickDateTill() {
    const tillDate = format(addDays(new Date(), 2), 'd');
    await this.dateTillCalendar.click();
    await this.calendarDay.locator(`text="${tillDate}"`).click();
  }

  async verifyListedEventsInRange() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tillDate = addDays(today, 2);
    tillDate.setHours(23, 59, 59, 999);

    const dates = await this.cardDate.allTextContents();

    for (const dateText of dates) {
      let eventStart, eventEnd;

      if (dateText.includes('-')) {
        const [startStr, endStr] = dateText.split(' - ');
        eventStart = new Date(`${startStr.trim()} ${today.getFullYear()}`);
        eventEnd = new Date(`${endStr.trim()} ${today.getFullYear()}`);
      } else {
        eventStart = new Date(dateText);
        eventEnd = eventStart;
      }

      eventStart.setHours(0, 0, 0, 0);
      eventEnd.setHours(23, 59, 59, 999);

      if (eventEnd < today || eventStart > tillDate) {
        throw new Error(`Event date ${dateText} is out of range`);
      }
    }
  }
}

module.exports = EventsPage;
