Feature: Login check

    Background:
        Given the 'Main' site is opened
        And the 'URL' is correct
    
    Scenario: Checking the log in to the site
        When I clicked the 'Login' button
        And I see the Login page
        Then I enter '' in the 'email' field
        And I click the 'Continue' button
        Then I enter '' in the 'password' field
        And I click the 'Verify you are human' checkbox
        Then I click the 'Sign in' button
        And I see the 'Main' site