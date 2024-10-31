Feature: Check the GitHub button on Speakers page profile

  Background:
    Given the 'Main' site is opened

  Scenario Outline: Check a speaker profile's GitHub button
    When the 'Speakers' button is clicked in the header
    Then the 'Speakers' page should be opened
    When the '<speakerName>' is searched
    And the 'profile card' is clicked
    Then the 'profile page' should be opened
    When the 'GitHub button' is clicked
    Then the 'GitHub profile' page should be opened
    And the 'URL' is should be checked
    And the 'profile name' is should be checked
   
    
    Examples:
      | speakerName     |
      | Laszlo Szikszai |
