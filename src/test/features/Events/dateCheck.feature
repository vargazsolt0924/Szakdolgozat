Feature: Check today's date on Events page cards

  Background:
    Given the 'Main' site is opened

  Scenario: After setting the calendar filter to today's date, check the dates on the event cards
    When the 'Events' button is clicked in the header
    Then the 'Events' page should be opened
    When the 'More Filters' option is clicked
    Then the more filters should be listed
    When the date from and till are picked as today
    Then check all the listed cards should contain today's date
