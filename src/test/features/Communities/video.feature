Feature: Communities page's video test

  Background:
    Given the 'Main' site is opened
    And I clicked the 'Login' button
    When I enter '' in the 'email' field
    And I clicked the 'Continue' button
    When I enter '' in the 'password' field
    And I clicked the 'Verify you are human' checkbox
    Then I clicked the 'Sign in' button
    And I see the 'Main' site

  Scenario: Test video's buttons in Communities after sign in
    Given the 'Communities' button is clicked
    When I search for 'Idea Pool'
    Then I click the 'join' button
    And I open the 'community card'
    Then I click the little 'Videos' button
    And I see the videos
    Then I click the 'white triangle' button on a video
    And I click the 'enter full screen' button
    Then I seek to 10 minutes
    And I watch the video for 5 seconds
    And I click the 'exit full screen' button
    Then I click the 'Home' button
    And I click the 'Joined!' button
    And I click the 'Ok' button
    Then I open the 'profile' dropdown
    And I click the 'Logout' button
    And I click the 'Logout' button again
    Then I see the 'community's home page'
