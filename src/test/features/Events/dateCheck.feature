Feature: Check date on Events page

  Background:
    Given the 'Main' site is opened
    And the 'URL' is correct
    And the 'Events' button is clicked

  Scenario Outline: Check the events dates
    Then the 'More Filters' option is opened
    And the 'Language' filter dropdown is opened
    When I select the '<checkboxName>' checkbox
    Then the 'Event format' filter dropdown is opened
    And I select 'Offline only' checkbox
    Then the 'Events status' filter dropdown is opened
    And I select 'Free registration is available' checkbox
    Then I see the events
    And I check the event's languages includes the correct language

    Examples:
      | checkboxName |
      | English      |
