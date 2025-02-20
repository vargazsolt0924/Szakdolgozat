Feature: Check calendar dates on Events page cards

  Background:
    Given the 'Main' site is opened

  Scenario: After setting the calendar filter, check the dates on the event cards
    When the 'Events' button is clicked in the header
    Then the 'Events' page should be opened
    When the 'More Filters' option is clicked
    Then the more filters should be listed
    When the date from is picked from the 'Date from calendar'
    And the till date is picked from the 'Date till calendar'
    Then check all the listed cards date should be included these two dates range
