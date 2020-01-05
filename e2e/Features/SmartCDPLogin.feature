Feature: Smart Steps Demo

    @SmartStepsDemo
    Scenario: Login
        Given Browser is loaded with URL "https://pr.fisintegratedpayables.com/fis/customerlogin.aspx"
        When User types "muthub1" into textbox next to "User ID:"
        When User clicks "Proceed" button
        When User types "aBCD12345" into textbox next to "Password:"
        When User clicks "Sign In" button
        When User clicks "Yes" button if present
        When User clicks "5231143" link
        When User clicks "Log Out" link