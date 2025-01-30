Feature: Login check

    Background:
        Given the 'Main' site is opened
    
    Scenario: Checking the log in and the log out on the site
        When the 'Login' button is clicked
        Then the 'Login' page should be opened
        When the 'email' entered in the field
        And the 'Continue' button is clicked
        Then the 'Login' page should be opened again
        When the 'password' entered in the field
        #And the 'Verify you are human' checkbox is clicked
        And the 'Sign in' button is clicked
        Then the 'Main' page should be opened
        When the 'profile' dropdown is opened in the top right corner 
        And the 'Logout' button is clicked
        Then the 'Logout' page should be opened
        When the 'Logout' button is clicked again
        Then the 'Main' page should be opened again 