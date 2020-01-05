@CDPAPI @PaymentInfoFeature
Feature: APIPaymentInfoFeature

    Background:
        Given API end point is "http://agpjaxsrvp1app1.internal.sungard.corp/WebAPIService/api/v1/PaymentInfo"
        Given API request default headers are
            """
            IP-ApiKey:c870174e-6603-40c3-a768-fe00b471dba0
            ConsumerKey:PrajaktaCustConsumerKey
            ConsumerSecret:PrajaktaCustConsumerSecret
            """
        Given Request content Type is JS Object

    @1
    Scenario: 01. Verify response - With all payment info
        Given API request default headers are
            """
            IP-ApiKey:88bcbbb5-1ed2-45ab-b473-8915cd0b0dd7
            ConsumerKey:FisBillPayC
            ConsumerSecret:FisBillPayS
            """
        Given Request content Type is JS Object
        When System makes POST request with parameter
            """
            {
                "JdrId": 153395142
            }
            """
        Then Validate response code is "200"
        Then Validate response body matches in file "./API/PaymentInfo01.json"

    @2
    Scenario: 02. Verify the response for - ACH payment
        When System makes POST request with parameter
            """
            {
                "JdrId": 153769475,
                "remittancePerSet": 10,
                "remittanceSetNumber": 1
            }
            """
        Then Validate response code is "200"
        Then Validate response body matches in file "./API/PaymentInfo02.json"

    @3
    Scenario: 03. Verify the response for - CHK payment
        When System makes POST request with parameter
            """
            {
                "JdrId": 153756773,
                "remittancePerSet": 10,
                "remittanceSetNumber": 1
            }
            """
        Then Validate response code is "200"
        Then Validate response body matches in file "./API/PaymentInfo03.json"

    @4
    Scenario: 04. Verify the response for - vCard payment
        When System makes POST request with parameter
            """
            {
                "JdrId": 153912741,
                "remittancePerSet": 10,
                "remittanceSetNumber": 1
            }
            """
        Then Validate response code is "200"
        Then Validate response body matches in file "./API/PaymentInfo04.json"


    @5
    Scenario: 05. Verify the response for - GFX Wire payment
        When System makes POST request with parameter
            """
            {
                "JdrId": 153998561,
                "remittancePerSet": 1,
                "remittanceSetNumber": 1
            }
            """
        Then Validate response code is "200"