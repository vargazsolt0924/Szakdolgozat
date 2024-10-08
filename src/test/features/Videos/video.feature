Feature: Videos page's video test

  Background:
    Given the 'Main' site is opened

  Scenario Outline: Videos page's video's buttons test
    When the 'Videos' button is clicked in the header
    Then the 'Videos' page should be opened
    When the '<videoCardName>' is searched
    And the '<videoCardName>' word is contained in all card(s)
    Then <videoCardCount> video card(s) should be listed
    When the 'video card' is clicked
    Then the 'video' page should be opened
    When the 'Watch' button is clicked
    Then the 'login' window should be popped 
    When the 'Login' button is clicked
    Then the 'Login' page should be opened
    When the 'email' enterd in the field
    And the 'Continue' button is clicked
    Then the 'Login' page should be opened again
    When the 'password' enterd in the field
    And the 'Verify you are human' checkbox is clicked
    And the 'Sign in' button is clicked
    Then the 'video' should be get in fullscreen
    When the 'playback rate' button is clicked
    And the '2x' button is clicked
    And the 'play' button is clicked
    And the 'close' button is clicked
    Then the 'video' page should be opened again

    Examples:
      | videoCardName | videoCardCount |
      | Idea Pool     |              1 |
