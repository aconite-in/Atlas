import { Given, Then } from "cucumber";
import { EnvironmentReadiness } from "../Core/SystemAccess/Readiness";


Given("System end point is {string}", async (systemEndPoint: string) => {
    await EnvironmentReadiness.setEndpoint(systemEndPoint)
});


Then("Validate the endpoint machine is running", async () => {
    await EnvironmentReadiness.validateEndpointStatus();
})