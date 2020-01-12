"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const Readiness_1 = require("../Core/SystemAccess/Readiness");
cucumber_1.Given("System end point is {string}", async (systemEndPoint) => {
    await Readiness_1.EnvironmentReadiness.setEndpoint(systemEndPoint);
});
cucumber_1.Then("Validate the endpoint machine is running", async () => {
    await Readiness_1.EnvironmentReadiness.validateEndpointStatus();
});
//# sourceMappingURL=SystemSteps.js.map