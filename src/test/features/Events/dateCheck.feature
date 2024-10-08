Feature: Check date on Events page

  Background:
    Given the 'Main' site is opened

  Scenario Outline: Check the events dates
    When the 'Events' button is clicked in the header
    Then the 'Events' page should be opened
    Then the 'More Filters' option is opened
    And the 'Language' filter dropdown is opened
    When I select the '<checkboxName>' checkbox
    Then the 'Event format' filter dropdown is opened
    And I select 'Offline only' checkbox
    Then the 'Events status' filter dropdown should be opened
    And I select 'Free registration is available' checkbox
    Then the event cards should be listed
    And I check the event's languages includes the correct language

    Examples:
      | checkboxName |
      | English      |
