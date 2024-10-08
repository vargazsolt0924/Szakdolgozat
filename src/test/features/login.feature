Feature: Login check

    Background:
        Given the 'Main' site is opened
    
    Scenario: Checking the log in to the site
        When the 'Login' button is clicked
        Then the 'Login' page should be opened
        When the 'email' enterd in the field
        And the 'Continue' button is clicked
        Then the 'Login' page should be opened again
        When the 'password' enterd in the field
        And the 'Verify you are human' checkbox is clicked
        And the 'Sign in' button is clicked
        Then the 'Main' site should be opened