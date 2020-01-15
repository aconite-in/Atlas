@mocky
Feature: Mocky feature for angular

    Scenario: 01 Scenario
        Given API end point is "http://www.mocky.io/v2/5e1f47a03100008b0018987d"
        When System makes GET request
        Then Validate response code is "200"

    Scenario: 02 Scenario
        Given API end point is "http://www.mocky.io/v2/5e1f47d23100001bcc189881"
        When System makes GET request
        Then Validate response code is "200"