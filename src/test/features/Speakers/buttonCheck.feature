Feature: Check the GitHub button on Speakers page profile

  Background:
    Given the 'Main' site is opened
    And the 'URL' is correct
    Then I clicked the 'Login' button
    And I see the Login page
    Then I enter '' in the 'email' field
    And I click the 'Continue' button
    Then I enter '' in the 'password' field
    And I click the 'Verify you are human' checkbox
    Then I click the 'Sign in' button
    And I see the 'Main' site

  Scenario Outline: Check a speaker profile's GitHub button after sign in
    Given the 'Speakers' button is clicked
    When I search for '<speakerName>'
    Then I click the 'profile card'
    And I see the 'profile site'
    Then I click the 'GitHub button'
    And I see the GitHub profile page
    And the 'URL' is correct
    And the 'profile name' is correct
    Then I close this site

    Examples:
      | speakerName     |
      | Laszlo Szikszai |
