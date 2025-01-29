Feature: Videos page's video test

  Background:
    Given the 'Main' site is opened
    And the test user is logged in

  Scenario Outline: Videos page's video's buttons test
    When the 'Videos' button is clicked in the header
    Then the 'Videos' page should be opened
    When the '<videoCardName>' is searched
    And the '<videoCardName>' word is contained in all card(s)
    Then <videoCardCount> video card(s) should be listed
    When the 'video card' is clicked
    Then the 'video' page should be opened
    When the 'Watch' button is clicked
    Then the 'video' should be get in fullscreen
    When the 'playback rate' button is clicked
    And the '2x' button is clicked
    Then the 'video' should be played at double speed
    When the 'close' button is clicked
    Then the 'video' page should be opened again

    Examples:
      | videoCardName | videoCardCount |
      | Idea Pool     |              1 |
