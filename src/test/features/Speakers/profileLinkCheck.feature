Feature: Check the profile link on Speakers page profile

  Background:
    Given the 'Main' site is opened
    And the test user is logged in
    
  Scenario Outline: Check the speaker profile link
    When the 'Speakers' button is clicked in the header
    Then the 'Speakers' page should be opened
    When the speaker '<speakerName>' is searched
    And the 'profile' card is clicked
    Then the 'profile' page should be opened
    When the 'share profile' dropdown is clicked
    And the 'input' field is clicked 
    Then the clipboard's content is should be included the right link

    Examples:
      | speakerName     |
      | Laszlo Szikszai | 
