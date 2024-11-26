Feature: Check calendar dates on Events page cards

  Background:
    Given the 'Main' site is opened

  Scenario: Check event cards dates after the calendar filter is setted
    When the 'Events' button is clicked in the header
    Then the 'Events' page should be opened
    When the 'More Filters' option is clicked
    Then more filters should be listed
    When the 'Date from calendar' is clicked
    And a from date is clicked
    Then the cards with this date should be listed
    When the 'Date till calendar' is clicked
    And a till date is clicked 
    Then beetween this two dates the event cards should be listed
    And all the listed cards date should be checked