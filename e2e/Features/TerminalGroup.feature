@API @TerminalGroup @regression
Feature: APIPaymentInfoFeature

    Background:
        Given API end point is "http://vlmazapexuiap02.fisdev.local:4200/api/apexdev/terminals/groups"

    @smoke
    Scenario: Authorize the API
        Given API request default headers are
            """
            Content-Type: application/x-www-form-urlencoded
            Uuid: {{$guid}}
            Application-Id: apex-platform-client-qaos
            Security-Token-Type: BasicAuth
            Source-Id: qa
            Security-Token: YXBleC1wbGF0Zm9ybS1jbGllbnQtcWFvczo3ZmVjOGIyNTBjZTJjMDQ`wYjQwYjgwZDAzYWU2ZWNmYTVmNzg=
            """
        And API end point is "http://apex-auth-apex-ui-sit.sdlocpapp.fisdev.local/platform/api/rest/auth/apexdev/v0.1/oauth/token"
        When System makes POST request with parameter "grant_type=password&scope=openid&client_id=apex-platform-client-qaos&username=Regression.QC&password=Jenkins@12&firm=apexdev"
        And API request default headers are
            """
            Security-Token-Type: JWT
            User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36
            """
        And Request content Type is JS Object
        When header "Security-Token" is set from previous response with key "access_token"

    @sanity
    Scenario: View Terminal Group
        When System makes GET request with parameter "?institutionId=2000002450&originalUrl=http%3A%2F%2Fvlmazapexuiap02.fisdev.local%3A4200%2Fapexdev%2Fterminal%2Fgroups%3FinstitutionId%3D2000002450&_t=1575893065248"
        Then Validate response code is "200"
        Then Validate response body matches in file "./API/TerminalGroupView01.result"

    Scenario: Add Terminal Group
        Given API end point is "http://vlmazapexuiap02.fisdev.local:4200/api/apexdev/terminals/groups?originalUrl=http%3A%2F%2Fvlmazapexuiap02.fisdev.local%3A4200%2Fapexdev%2Fterminal%2Fgroups%2Fadd%3FinstitutionId%3D2000003670&institutionId=2000003670&name=CreatedFromAPI&description=CreatedFromAPI"
        When System makes POST request with parameter "{}"
        Then Validate response code is "200"

    Scenario: Update Terminal Group
        When System makes PATCH request with parameter "/5242?institutionId=2000005350&name=FISB_Ally_Terminal_Group&description=FISB_Ally_Terminal_Group&originalUrl=http%3A%2F%2Fvlmazapexuiap02.fisdev.local%3A4200%2Fapexdev%2Fterminal%2Fgroups%3FinstitutionId%3D2000005350"
        Then Validate response code is "200"