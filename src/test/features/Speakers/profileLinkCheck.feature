Feature: Check the profile link on Speakers page profile

  Background:
    Given the 'Main' site is opened
    And the test user is logged in
    
  Scenario Outline: Check the speaker profile link
    When the 'Speakers' button is clicked in the header
    Then the 'Speakers' page should be opened
    When the speaker '<speakerName>' is searched
    And the 'profile' card is clicked
    Then the 'profile site' should be opened
    When the 'share profile' dropdown is clicked
    And the 'profile link' is copied
    And the 'profile link' is opened on a new tab
    Then the 'profile site' should be opened
    And the profile name is should be '<speakerProfileName>'

    Examples:
      | speakerName     | speakerProfileName |
      | Laszlo Szikszai | Laszlo Szikszai    |
