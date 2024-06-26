Feature: Videos page's video test

  Background:
    Given the 'Main' site is opened
    And I clicked the 'Login' button
    When I enter '' in the 'email' field
    And I click the 'Continue' button
    When I enter '' in the 'password' field
    And I click the 'Verify you are human' checkbox
    Then I click the 'Sign in' button
    And I see the 'Main' site

  Scenario Outline: Videos page's video's buttons test after sign in
    Given the 'Videos' button is clicked
    When I search for '<videoCardName>'
    And I see <videoCardCount> card(s)
    And all cards contain the '<videoCardName>' word
    And I click the 'video card'
    Then I click the 'Watch' button
    And I click the 'subtitles' button
    And I click the 'English (Auto)' button
    And I click the 'playback rate' button
    And I click the '2x' button
    And I click the 'play' button
    And I click the 'close' button
    Then I open the 'profile' dropdown
    And I click the 'Logout' button
    And I click the 'Logout' button again

    Examples:
      | videoCardName | videoCardCount |
      | Idea Pool     |              1 |
