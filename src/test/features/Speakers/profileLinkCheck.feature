Feature: Check the profile link on Speakers page profile

  Background:
    Given the 'Main' site is opened
    
  Scenario Outline: Check the link link
    When the 'Speakers' button is clicked in the header
    Then the 'Speakers' page should be opened
    When '<speakerName>' is searched
    And the 'profile card' is clicked
    Then the 'profile site' should be opened
    When the 'share link' dropdown is opened
    And the 'profile link' is copied
    And the 'profile link' is opened on a new site
    And the 'profile name' is checked
    Then the 'profile site' should be opened

    Examples:
      | speakerName     |
      | Laszlo Szikszai |
