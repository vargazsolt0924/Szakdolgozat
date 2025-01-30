Feature: Communities page's test

    Background:
        Given the 'Main' site is opened
        And the test user is logged in

    Scenario: Verify that a Community can be joined
        When the 'Communities' button is clicked in the header
        Then the 'Communities' page should be opened
        When 'Idea Pool' is entered in the search bar
        And the 'Idea Pool' community card is clicked
        Then the 'Idea Pool' community should be opened
        When the 'Join' button is clicked
        Then the 'Join' button's label should be changed to Joined!
