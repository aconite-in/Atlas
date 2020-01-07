"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const RestHelper_1 = require("../Core/DataAccess/RestHelper");
/**
 * This step stores the End-Point of API to be used in the POST and GET request steps. In case your API calls requires headers, those can be specified using a other step provided to set the default headers.
 * It is highly recommended to use this step in "Backgroud" of the feature file so various scenarios can be tested for same end-point and feature file becomes more readable.
 *
 * End-Point (Parameter 1): The URL of API to be used for next requests.
 */
cucumber_1.Given("API end point is {string}", async (apiEndPoint) => {
    await RestHelper_1.RestHelper.setEndPoint(apiEndPoint);
});
cucumber_1.Given("Request content Type is JS Object", async () => {
    await RestHelper_1.RestHelper.setJSONContentType();
});
/**
 * This step makes a GET request to API.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 */
cucumber_1.When("System makes GET request", async () => {
    await RestHelper_1.RestHelper.getRequest();
});
/**
 * This step makes a GET request to API with the parameters specified in the 1st parameter.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
cucumber_1.When("System makes GET request with parameter {string}", async (parameters) => {
    await RestHelper_1.RestHelper.getRequest(parameters);
});
/**
 * This step makes a PATCH request to API with the parameters specified in the 1st parameter.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
cucumber_1.When("System makes PATCH request with parameter {string}", async (parameters) => {
    await RestHelper_1.RestHelper.patchRequest(parameters);
});
/**
 * This step makes a POST request to API.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 */
cucumber_1.When("System makes POST request", async () => {
    await RestHelper_1.RestHelper.postRequest();
});
/**
 * This step makes a POST request to API with the parameters specified in the 1st parameter.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
cucumber_1.When("System makes POST request with parameter {string}", async (parameters) => {
    await RestHelper_1.RestHelper.postRequestWithParam(parameters);
});
/**
 * This step makes a POST request to API with the parameters specified document string.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
cucumber_1.When("System makes POST request with parameter", async (parameters) => {
    await RestHelper_1.RestHelper.postRequestWithParam(parameters);
});
/**
 * This step makes a PUT request to API with the parameters specified in the 1st parameter.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
cucumber_1.When("System makes PUT request with parameter {string}", async (parameters) => {
    await RestHelper_1.RestHelper.putRequestWithParam(parameters);
});
/**
 * This step stores the headers of the End-Point of the API to be used in the POST and GET request steps.
 * It is highly recommended to use this step in "Backgroud" of the feature file so various scenarios can be tested for same end-point and feature file becomes more readable.
 */
cucumber_1.Given("API request default headers are", async (headers) => {
    RestHelper_1.RestHelper.setHeaders(headers.split("\n"));
});
cucumber_1.When("header {string} is set from previous response with key {string}", async (header, jsonPath) => {
    await RestHelper_1.RestHelper.setHeaderFromPreviousReponse(header, jsonPath);
});
cucumber_1.Then("Validate response code is {string}", async (statusCode) => {
    await RestHelper_1.RestHelper.validateResponseStatusCode(statusCode);
});
cucumber_1.Then("Validate response body is", async (expectedResponseBody) => {
    await RestHelper_1.RestHelper.validateResponseJSONBody(expectedResponseBody);
});
cucumber_1.Then("Validate response body matches in file {string}", async (expectedResponseBodyFilePath) => {
    await RestHelper_1.RestHelper.validateResponseJSONBodyAgainstFile(expectedResponseBodyFilePath);
});
cucumber_1.Then("Validate XML response body matches in file {string}", async (expectedResponseBodyFilePath) => {
    await RestHelper_1.RestHelper.validateResponseXMLBodyAgainstFile(expectedResponseBodyFilePath);
});
//# sourceMappingURL=APISteps.js.map