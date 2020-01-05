@XML
Feature: XML Comapre

    Scenario: xml
        Given API end point is "http://www.mocky.io/v2/5dfc87213100006d00d2bf98"
        When System makes GET request
        Then Validate XML response body matches in file "./API/rr.xml"