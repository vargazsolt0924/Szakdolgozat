Feature: Check the profile link on Speakers page profile

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

  Scenario Outline: Check the link link after sign in
    Given the 'Speakers' button is clicked
    When I search for '<speakerName>'
    Then I click the 'profile card'
    And I see the 'profile site'
    Then I open the 'share link' dropdown
    And I copy the 'profile link'
    Then I open a new site with the 'profile link'
    And I check the 'profile name' is correct

    Examples:
      | speakerName     |
      | Laszlo Szikszai |
