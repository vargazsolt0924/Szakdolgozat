Feature: Search on the articles page

  Background:
    Given the 'Main' site is opened
    And the 'Articles' button is clicked

  Scenario Outline: Search for <cardName> articles
    When the '<cardName>' is searched
    Then <cardCount> article card(s) should be listed
    And the '<cardName>' word is contained on all cards

    Examples:
      | cardName  | cardCount |
      | Idea Pool |         6 |
      | Apple     |         1 |
      | Quiz      |         2 |
      | Bank      |         5 |
      | Android   |         2 |

  Scenario Outline: Filter for tag
    When the tag is narrowed to '<checkboxName>'
    And the 'highlighted checkbox' is clicked
    Then <cardCount> article card(s) should be listed

    Examples:
      | checkboxName | cardCount |
      | Banks        |         1 |

  Scenario Outline: Select one language filter
    When the 'More Filters' option is opened
    And the 'Language Filter' Dropdown is opened
    And the '<checkboxName>' checkbox is selected
    Then <cardCount> article card(s) should be listed

    Examples:
      | checkboxName | cardCount |
      | German       |         2 |
