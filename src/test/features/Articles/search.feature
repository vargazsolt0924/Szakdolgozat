Feature: Search on the articles page

  Background:
    Given the 'Main' site is opened
    And the 'URL' is correct
    And the 'Articles' button is clicked

  Scenario Outline: Search for <cardName> articles
    When I search for '<cardName>'
    Then I see <cardCount> article card
    And All cards contain the '<cardName>' word

    Examples:
      | cardName  | cardCount |
      | Idea Pool |         6 |
      | Apple     |         1 |
      | Quiz      |         1 |
      | Bank      |         4 |
      | Android   |         2 |

  Scenario Outline: Filter for tag
    When I narrow the tag to '<checkboxName>'
    And I click the highlighted checkbox
    Then I see <cardCount> article card

    Examples:
      | checkboxName | cardCount |
      | Banks        |         1 |

  Scenario Outline: Select the one language filter
    Then the 'More Filters' option is opened
    And the Language Filter Dropdown is opened
    When I select the '<checkboxName>' checkbox
    Then I see <cardCount> article card

    Examples:
      | checkboxName | cardCount |
      | German       |         2 |
