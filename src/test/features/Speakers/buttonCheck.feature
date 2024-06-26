Feature: Check the GitHub button on Speakers page profile

  Background:
    Given the 'Main' site is opened
    And I clicked the 'Login' button
    When I enter '' in the 'email' field
    And I clicked the 'Continue' button
    When I enter '' in the 'password' field
    And I clicked the 'Verify you are human' checkbox
    Then I clicked the 'Sign in' button
    And I see the 'Main' site

  Scenario Outline: Check a speaker profile's GitHub button after sign in
    Given the 'Speakers' button is clicked
    When I search for '<speakerName>'
    Then I click the 'profile card'
    And I see the 'profile site'
    Then I click the 'GitHub button'
    And I see the GitHub profile
    Then I close this site

    Examples:
      | speakerName     |
      | Laszlo Szikszai |
