Feature: Check the profile link on Speakers page profile

  Background:
    Given the 'Main' site is opened
    
  Scenario Outline: Check the speaker profile link
    When the 'Speakers' button is clicked in the header
    Then the 'Speakers' page should be opened
    When '<speakerName>' is searched
    And the 'profile card' is clicked
    Then the 'profile site' should be opened
    When the 'share link' dropdown is opened
    And the 'profile link' is copied
    And the 'profile link' is opened on a new site
    Then the 'profile site' should be opened
    And the 'profile name' is should be '<githubProfileName>'

    Examples:
      | speakerName     | githubProfileName |
      | Laszlo Szikszai | Laszlo Szikszai   |
