Feature: Idea Pool community's video test

  Background:
    Given the 'Idea Pool' page is opened

  Scenario: Verify that a Community's video can be played
    When the community's 'Videos' button is clicked
    Then the community's videos should be listed
    When the first video is started
    And the 'play' button on a video is clicked
    And the "AI-Generated Summary" pop up is closed
    And the 'enter full screen' button is clicked
    And seeking to 10 minutes is done
    Then the video is watched for 5 seconds
    When the 'exit full screen' button is clicked
    And the 'Home' button is clicked
    Then the 'Idea pool' community home page should be opened
