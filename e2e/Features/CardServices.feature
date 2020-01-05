@DAPI
Feature: Card Services

    Background: Setup of API
        Given API end point is "http://vlmazapexuiap02.fisdev.local:6000/xpressNg/rest/payment/v3/card/get"
        Given API request default headers are
            """
            Application-Id: PAYMENT
            Uuid: 5196f171-bf62-48d0-af23-391e00c9ca3d
            Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJwYXltZW50cyBhcGkgdG9rZW4iLCJvcmdfaWQiOjEsImlzcyI6ImZpcyBwYXltZW50cyIsImp3ZV9rZXkiOiJleUpsYm1NaU9pSkJNalUyUjBOTklpd2lkR0ZuSWpvaWJrc3pjazh4VEV3MmJIWnlWbXRuYzNKWmNGWmxaeUlzSW1Gc1p5STZJa0V5TlRaSFEwMUxWeUlzSW1sMklqb2llWGhCZGtaYVJGTTFUR1JZVHpadmRDSjkuVzZ2RzRsZkpBTGQ3YTh3RE1acE9LVE5jVTg0elFzQ1djNngyUWFfanQzYy5LdHU4WVEtMmpLTXJpR2F0LlhmaFluSENreUlCendCQzUxZ0xCTUtqRFl0OWdSR3g5T0ZwTll3WU03eTQuU2U1emJWRFNTblFKcDhGaURLVmZJdyIsImV4cCI6MTU4NTQ5NjI1OCwiaWF0IjoxNTMzNjU2MjU4LCJmaV9saXN0IjpbXX0.Xv55s4MQjk8oMWuKfeVEnxeiKCiDxHDQm0qwC7aWrnUNMK061FyA8T_s0CCPodN29Yb3hpWIhkQDQiKSHMDjvZ2GqkjOtLDAHGf9ZPaWo9Zz1oSifmZy0-EZyV0atVhHYAjHk0T0o47XFFGbRSCtpyipxlvUzeKeDGuNMhxNiV4
            """
        Given Request content Type is JS Object

    Scenario: Get card request
        When System makes POST request with parameter
            """
            {
                "pan": {
                    "plainText": "1616100920006670",
                    "cipherText": "",
                    "alias": ""
                },
                "includePrimaryMemberOnly": false,
                "includeAccountDetails": true,
                "plastic": ""
            }
            """
        Then Validate response code is "200"
        Then Validate response body matches in file "./API/CardServices01.json"