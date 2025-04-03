const { format, parse, isWithinInterval } = require('date-fns');

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

  async pickTodayDate() {
    const today = format(new Date(), 'd');
    await this.dateFromCalendar.click();
    await this.calendarDay.locator(`text="${today}"`).first().click();
    await this.dateTillCalendar.click();
    await this.calendarDay.locator(`text="${today}"`).first().click();
  }

  async checkListedEventsForToday() {
    const today = new Date();
    const todayFormatted = format(today, 'd MMM yyyy');

    const dates = await this.cardDate.allTextContents();

    const eventExists = dates.some((dateText) => {
      const trimmedDateText = dateText.trim();

      if (trimmedDateText.includes('-')) {
        const [startStr, endStr] = trimmedDateText.split(' - ');
        const startDate = parse(`${startStr.trim()} ${today.getFullYear()}`, 'd MMM yyyy', today);
        const endDate = parse(endStr.trim(), 'd MMM yyyy', today);

        if (endDate < startDate) endDate.setMonth(endDate.getMonth() + 1);

        return isWithinInterval(today, { start: startDate, end: endDate });
      }

      const date = parse(trimmedDateText, 'd MMM yyyy', today);
      return format(date, 'd MMM yyyy') === todayFormatted;
    });

    if (!eventExists) {
      throw new Error(`Event date does not include today's date`);
    }
  }
}

module.exports = EventsPage;
