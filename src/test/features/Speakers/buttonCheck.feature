Feature: Check the GitHub button on Speakers page profile

  Background:
    Given the 'Main' site is opened
    And the test user is logged in

  Scenario Outline: Check a speaker profile's GitHub button
    When the 'Speakers' button is clicked in the header
    Then the 'Speakers' page should be opened
    When the speaker '<speakerName>' is searched
    And the 'profile' card is clicked
    Then the 'profile' page should be opened
    When the 'GitHub' icon is clicked
    Then the 'GitHub profile' page should be opened
    And the profile name is should be '<githubProfileName>'
   
    
    Examples:
      | speakerName     | githubProfileName | 
      | Laszlo Szikszai | Szikszai László   |
