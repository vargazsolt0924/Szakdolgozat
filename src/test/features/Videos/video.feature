Feature: Videos page's video test

  Background:
    Given the 'Main' site is opened
    And the 'URL' is correct
    And the 'Videos' button is clicked

  Scenario Outline: Videos page's video's buttons test
    When I search for '<videoCardName>'
    And I see <videoCardCount> card(s)
    And all cards contain the '<videoCardName>' word
    And I click the 'video card'
    Then I click the 'Watch' button
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
