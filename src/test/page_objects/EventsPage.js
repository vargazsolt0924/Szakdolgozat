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
    await this.page.waitForFunction((expectedDate) => {
      const elements = document.querySelectorAll('p[aria-label="date"]');
      return Array.from(elements).some((el) => el.textContent.includes(expectedDate));
    }, tillDate);
  }

  async checkListedEvents() {
    const today = new Date();
    const selectedDates = [];

    for (let i = 0; i < 3; i++) {
      selectedDates.push(today.getDate() + i);
    }

    const dates = await this.cardDate.allTextContents();

    for (const dateText of dates) {
      let eventDates = [];

      if (dateText.includes('-')) {
        const [startStr, endStr] = dateText.split(' - ');
        const startDay = parseInt(startStr.trim(), 10);
        const endDay = parseInt(endStr.trim(), 10);

        for (let day = startDay; day <= endDay; day++) {
          eventDates.push(day);
        }
      } else {
        const eventDay = parseInt(dateText.trim(), 10);
        eventDates.push(eventDay);
      }

      let isValid = false;
      for (const selectedDate of selectedDates) {
        for (const eventDate of eventDates) {
          if (selectedDate === eventDate) {
            isValid = true;
            break;
          }
        }
      }

      if (!isValid) {
        throw new Error(`Event date ${dateText} is out of range`);
      }
    }
  }
}

module.exports = EventsPage;
