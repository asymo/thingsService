Feature: Things
    Users can get things

Scenario: The service should be running
    When I GET the root document
    Then I SHOULD get a valid response

Scenario Outline: Successfull Things retrieval
    When I do a GET for Things
    Then I SHOULD get a valid response
    And I will get a Thing with an ID of "<id>"
    And I will get a Thing with a value of <value>

    Examples:
    | id                                    | value     |
    | 1b78c6b6-1818-11ea-8d71-362b9e155667  | 10000     |

Scenario: Successfully add a new Thing
    When I POST a new Thing
    Then I SHOULD get a valid response
    And the last data element will match the new Thing created

Scenario Outline: Retrieve an individual Thing
    When I GET a Thing with an ID of "<id>"
    Then I SHOULD get a valid response
    And only 1 Thing should be returned
    And I will get a Thing with the value of <value>

    Examples:
    | id                                    | value         |
    | 1b78c6b6-1818-11ea-8d71-362b9e155667  | 10000         |
    | 3g78c6b6-1818-11ea-8d71-362b9e753951  | 96847         |
    | 1b78c6b6-1818-11ea-8d71-362b9e175698  | 24000         |