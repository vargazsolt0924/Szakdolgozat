Feature: Check the GitHub button on Speakers page profile

  Background:
    Given the 'Main' site is opened
    And the 'URL' is correct
    And the 'Speakers' button is clicked

  Scenario Outline: Check a speaker profile's GitHub button
    When I search for '<speakerName>'
    Then I click the 'profile card'
    And I see the 'profile site'
    Then I click the 'GitHub button'
    And I see the GitHub profile page
    And the 'URL' is correct
    And the 'profile name' is correct

    Examples:
      | speakerName     |
      | Laszlo Szikszai |
