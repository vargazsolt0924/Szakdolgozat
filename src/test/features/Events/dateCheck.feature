Feature: Check calendar dates on Events page cards

  Background:
    Given the 'Main' site is opened

  Scenario: Check event cards dates after the calendar filter is setted
    When the 'Events' button is clicked in the header
    Then the 'Events' page should be opened
    When the 'More Filters' option is clicked
    Then more filters should be listed
    When the 'Start date calendar' is clicked
    And a start date is clicked
    Then the cards with this date should be listed
    When the 'End date calendar' is clicked
    And a end date is clicked 
    Then beetween this to date the event cards should be listed
    And all the listed cards date should be checked