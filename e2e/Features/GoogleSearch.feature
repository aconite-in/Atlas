@ironSearch
Feature: Testing Google

    Scenario: Validate Search
        Given User is on Page "GoogleHomePage"
        When System waits for 15 seconds
        When User types "iron man" in textbox "SearchTextBox"
        When User clicks on element "SearchButton"