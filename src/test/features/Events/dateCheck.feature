Feature: Check date on Events page

  Background:
    Given the 'Main' site is opened
    And the 'URL' is correct
    When I clicked the 'Login' button
    And I see the Login page
    Then I enter '' in the 'email' field
    And I click the 'Continue' button
    Then I enter '' in the 'password' field
    And I click the 'Verify you are human' checkbox
    Then I click the 'Sign in' button
    And I see the 'Main' site

  Scenario Outline: Check the events dates after sign in
    Given the 'Events' button is clicked
    Then the 'More Filters' option is opened
    And the 'Language' filter dropdown is opened
    When I select the '<checkboxName>' checkbox
    Then the 'Event format' filter dropdown is opened
    And I select 'Offline only' checkbox
    Then the 'Events status' filter dropdown is opened
    And I select 'Free registration is available' checkbox
    When I sort events by 'Popularity'
    Then I see events
    And I check the today's events dates

    Examples:
      | checkboxName |
      | English      |
