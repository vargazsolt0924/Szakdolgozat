class EventsPage{
    constructor(page){
        this.page =page;
        this.moreFiltersOption = page.locator('evnt-toggle-filters-button btn');
        this.dateFromCalendar = page.locator('#dates_fromDate');
        this.dateTillCalendar = page.locator('#dates_toDate');
        this.startDateCalendar = page.locator('');
    }
}

module.exports = EventsPage;