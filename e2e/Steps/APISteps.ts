import { Given, TableDefinition, Then, When } from "cucumber";
import { async } from "q";
import { RestHelper } from "../Core/DataAccess/RestHelper";

/**
 * This step stores the End-Point of API to be used in the POST and GET request steps. In case your API calls requires headers, those can be specified using a other step provided to set the default headers.
 * It is highly recommended to use this step in "Backgroud" of the feature file so various scenarios can be tested for same end-point and feature file becomes more readable.
 *
 * End-Point (Parameter 1): The URL of API to be used for next requests.
 */
Given("API end point is {string}", async (apiEndPoint: string) => {
    await RestHelper.setEndPoint(apiEndPoint);
});

Given("Request content Type is JS Object", async () => {
    await RestHelper.setJSONContentType();
});

/**
 * This step makes a GET request to API.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 */
When("System makes GET request", async () => {
    await RestHelper.getRequest();
});

/**
 * This step makes a GET request to API with the parameters specified in the 1st parameter.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
When("System makes GET request with parameter {string}", async (parameters: string) => {
    await RestHelper.getRequest(parameters);
});

/**
 * This step makes a PATCH request to API with the parameters specified in the 1st parameter.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
When("System makes PATCH request with parameter {string}", async (parameters: string) => {
    await RestHelper.patchRequest(parameters);
});

/**
 * This step makes a POST request to API.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 */
When("System makes POST request", async () => {
    await RestHelper.postRequest();
});

/**
 * This step makes a POST request to API with the parameters specified in the 1st parameter.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
When("System makes POST request with parameter {string}", async (parameters: string) => {
    await RestHelper.postRequestWithParam(parameters);
});

/**
 * This step makes a POST request to API with the parameters specified document string.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
When("System makes POST request with parameter", async (parameters: string) => {
    await RestHelper.postRequestWithParam(parameters);
});

/**
 * This step makes a PUT request to API with the parameters specified in the 1st parameter.
 * The API End point can be set using other step Given('API end point is ""), which should be used before using this step.
 *
 * Payload (Parameter 1): Payload to be sent in the request.
 */
When("System makes PUT request with parameter {string}", async (parameters: string) => {
    await RestHelper.putRequestWithParam(parameters);
});

/**
 * This step stores the headers of the End-Point of the API to be used in the POST and GET request steps.
 * It is highly recommended to use this step in "Backgroud" of the feature file so various scenarios can be tested for same end-point and feature file becomes more readable.
 */
Given("API request default headers are", async (headers: string) => {
    RestHelper.setHeaders(headers.split("\n"));
});

When("header {string} is set from previous response with key {string}", async (header: string, jsonPath) => {
    await RestHelper.setHeaderFromPreviousReponse(header, jsonPath);
});

Then("Validate response code is {string}", async (statusCode: number) => {
    await RestHelper.validateResponseStatusCode(statusCode);
});

Then("Validate response body is", async (expectedResponseBody: string) => {
    await RestHelper.validateResponseJSONBody(expectedResponseBody);
});

Then("Validate response body matches in file {string}", async (expectedResponseBodyFilePath: string) => {
    await RestHelper.validateResponseJSONBodyAgainstFile(expectedResponseBodyFilePath);
});

Then("Validate XML response body matches in file {string}", async (expectedResponseBodyFilePath: string) => {
    await RestHelper.validateResponseXMLBodyAgainstFile(expectedResponseBodyFilePath);
});
