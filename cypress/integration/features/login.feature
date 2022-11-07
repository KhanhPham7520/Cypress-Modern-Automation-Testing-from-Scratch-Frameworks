Feature: WebDriverUniversity Login Page
    Scenario: Login using valid credentials
    Given I access the WebdriverUniversity Login Portal Page
    When I enter a username joe_blogs
    And I enter a password webdriver123
    And I click on the login button
    Then I should be presented with the following message validation succeeded
