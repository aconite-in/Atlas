"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const request = __importStar(require("request-promise-native"));
const Logger_1 = require("./Logger");
class RestHelper {
    static async setEndPoint(apiEndPoint) {
        this.endPoint = apiEndPoint;
        this.setDefault();
    }
    static setDefaultHeaders(headers) {
        if (headers === undefined) {
            this.options.headers = {
                "User-Agent": "test",
            };
        }
        else {
            this.options.headers = JSON.parse(headers);
        }
    }
    static async validateResponse(expectedResponse) {
        if (JSON.stringify(this.response) === JSON.stringify(expectedResponse)) {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RESTHELPER: Response from API matched the expected response\n\t\t+${this.response}`);
        }
        else {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `RESTHELPER: Response from API did not matched the expected response\n\t\t+${this.response}\n\t\t-${expectedResponse}`);
        }
    }
    static async validateFromFile(filePath) {
        const filecontents = await fs.readFileSync(__dirname + "..\\..\\..\\" + filePath);
        const expectedResponse = await filecontents.toString();
        if (JSON.parse(this.response) === JSON.parse(expectedResponse)) {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RESTHELPER: Response from API matched the expected response\n\t\t+${this.response}`);
        }
        else {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `RESTHELPER: Response from API did not matched the expected response\n\t\t+${this.response}\n\t\t-${filePath}`);
        }
    }
    static async getRequest(parameters) {
        this.options.qs = parameters;
        this.response = await request.get(this.options);
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `System made a sucessful get request to ${this.endPoint} with parameters\n\t\t+${parameters}`);
    }
    static async postRequest(parameters) {
        this.options.body = JSON.parse(parameters);
        this.options.json = true;
        this.response = await request.post(this.options);
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `System made a sucessful post request to ${this.endPoint} with parameters\n\t\t+${parameters}`);
    }
    static async getComplete(requestParameters, responsefileName) {
        this.options.uri = this.endPoint + "?" + requestParameters;
        // this.options.json = true;
        this.response = await request.get(this.options);
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `Successful API reqeuest with parameters ${this.options}`);
        const expectedResponse = await JSON.parse(await this.getFileContent(responsefileName));
        if (this.response === JSON.stringify(expectedResponse)) {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, "Expected response matches the API");
        }
        else {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Expected response does not matches the API it did not match" + expectedResponse);
        }
    }
    static async postComplete(requestfileName, responsefileName) {
        this.options.body = JSON.parse(await this.getFileContent(requestfileName));
        this.options.json = true;
        this.response = await request.post(this.options);
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `Successful API reqeuest with parameters ${this.options}`);
        const expectedResponse = JSON.parse(await this.getFileContent(responsefileName));
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `Actual Response: ${JSON.stringify(this.response)}`);
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `Expected Response: ${JSON.stringify(expectedResponse)}`);
        if (JSON.stringify(this.response) === JSON.stringify(expectedResponse)) {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, "Expected response matches the API");
        }
        else {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Expected response does not matches the API");
        }
    }
    static async getFileContent(filePath) {
        const filecontents = await fs.readFileSync(__dirname + "..\\..\\..\\" + filePath);
        return filecontents.toString();
    }
    static setDefault() {
        this.options = {
            uri: this.endPoint,
        };
    }
}
exports.RestHelper = RestHelper;
//# sourceMappingURL=RestHelper1.js.map