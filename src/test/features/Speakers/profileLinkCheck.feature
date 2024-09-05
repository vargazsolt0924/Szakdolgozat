Feature: Check the profile link on Speakers page profile

  Background:
    Given the 'Main' site is opened
    And the 'URL' is correct
    And the 'Speakers' button is clicked
    
  Scenario Outline: Check the link link
    When I search for '<speakerName>'
    Then I click the 'profile card'
    And I see the 'profile site'
    Then I open the 'share link' dropdown
    And I copy the 'profile link'
    Then I open a new site with the 'profile link'
    And I check the 'profile name' is correct

    Examples:
      | speakerName     |
      | Laszlo Szikszai |
