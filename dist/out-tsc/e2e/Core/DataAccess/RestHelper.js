"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const Logger_1 = require("./Logger");
const request = require("superagent");
const uuidv1 = require('uuid/v1');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
class RestHelper {
    static async setEndPoint(apiEndPoint) {
        this.endPoint = apiEndPoint;
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: API end point set to ${apiEndPoint}.`);
    }
    static async setHeaders(headers) {
        headers.forEach((header) => this.headers.add(header.replace("{{$guid}}", uuidv1())));
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Headers updated with ${headers}`);
    }
    static async setHeaderFromPreviousReponse(header, jsonPath) {
        if (this.resp) {
            this.headers.add(`${header}:${JSON.parse(JSON.stringify(this.resp.body))[jsonPath]}`);
        }
    }
    static async setJSONContentType() {
        this.headers.add("Content-Type:application/json");
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Content Type changed to application/json for the request`);
    }
    static async getRequest(param) {
        try {
            let url = param ? `${this.endPoint}${param}` : this.endPoint;
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Attempting to make a GET request to endpoint ${this.endPoint} with paramenters ${param}`);
            let req = request("Get", url);
            if (this.cookie)
                req.set("Cookie", this.cookie);
            this.headers.forEach(header => {
                let h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send();
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Successfully to made a GET request to endpoint ${this.endPoint} with paramenters ${param}`);
            console.log(this.resp.body);
        }
        catch (error) {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `RestHelper: GET Request was unsucessful with error "${error}"`);
        }
    }
    static async patchRequest(param) {
        try {
            let url = param ? `${this.endPoint}${param}` : this.endPoint;
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Attempting to make a GET request to endpoint ${this.endPoint} with paramenters ${param}`);
            let req = request("PATCH", url);
            if (this.cookie)
                req.set("Cookie", this.cookie);
            this.headers.forEach(header => {
                let h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send();
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Successfully to made a GET request to endpoint ${this.endPoint} with paramenters ${param}`);
            console.log(this.resp.body);
        }
        catch (error) {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `RestHelper: GET Request was unsucessful with error "${error}"`);
        }
    }
    static async postRequest() {
        let url = `${this.endPoint}`;
        try {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Attempting to make a POST request to endpoint ${this.endPoint}`);
            let req = request("POST", url);
            if (this.cookie)
                req.set("Cookie", this.cookie);
            this.headers.forEach(header => {
                let h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send();
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Successfully to made a POST request to endpoint ${this.endPoint}`);
        }
        catch (error) {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `RestHelper: POST Request was unsucessful with error "${error}"`);
        }
    }
    static async postRequestWithParam(paramenters) {
        let url = `${this.endPoint}`;
        try {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Attempting to make a POST request to endpoint ${this.endPoint}`);
            let req = request("POST", url);
            if (this.cookie)
                req.set("Cookie", this.cookie);
            this.headers.forEach(header => {
                let h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send(paramenters);
            //console.log(this.resp.body)
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Successfully to made a POST request to endpoint ${this.endPoint}`);
        }
        catch (error) {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `RestHelper: POST Request was unsucessful with error "${error}"`);
        }
    }
    static async putRequestWithParam(paramenters) {
        let url = `${this.endPoint}`;
        try {
            let req = request("PUT", url);
            if (this.cookie)
                req.set("Cookie", this.cookie);
            this.headers.forEach(header => {
                let h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send(paramenters);
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Successfully to made a PUT request to endpoint ${this.endPoint}`);
        }
        catch (error) {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `RestHelper: PUT Request was unsucessful with error "${error}"`);
        }
    }
    static async validateResponseStatusCode(statusCode) {
        if (this.resp.status == statusCode)
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Response code matched ${statusCode}`);
        else
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Response code matched did not matched\n\tExpected:${statusCode}\n\tActual:${this.resp.status}`);
    }
    static async validateResponseJSONBody(expectedResponseBody) {
        if (JSON.stringify(this.resp.body) === JSON.stringify(expectedResponseBody)) {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, "RestHelper: Expected response matches the API");
        }
        else {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "RestHelper: Expected response does not matches the API");
        }
    }
    static async validateResponseJSONBodyAgainstFile(expectedResponseBodyFilePath) {
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Attemptin to check the file on path ${expectedResponseBodyFilePath}`);
        const expectedResponse = JSON.parse(await this.getFileContent(expectedResponseBodyFilePath));
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: File parsed succefully. Attempting to vaildate against response ${expectedResponseBodyFilePath}`);
        await this.validateResponseJSONBody(expectedResponse);
    }
    static async validateResponseXMLBody(expectedResponseBody) {
        if (JSON.stringify(this.resp.body) === JSON.stringify(expectedResponseBody)) {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, "RestHelper: Expected response matches the API");
        }
        else {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "RestHelper: Expected response does not matches the API");
        }
    }
    static async validateResponseXMLBodyAgainstFile(expectedResponseBodyFilePath) {
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: Attemptin to check the file on path ${expectedResponseBodyFilePath}`);
        const expectedResponse = await this.getFileContent(expectedResponseBodyFilePath);
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: File parsed succefully. Attempting to vaildate against response ${expectedResponseBodyFilePath}`);
        if (Buffer.from(expectedResponse).compare(this.resp.body) === 0)
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `RestHelper: file are same ${expectedResponseBodyFilePath}`);
        else
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `RestHelper: File are different ${expectedResponseBodyFilePath}`);
    }
    static async getFileContent(filePath) {
        const filecontents = await fs.readFileSync(__dirname + "..\\..\\..\\" + filePath);
        return filecontents.toString();
    }
}
exports.RestHelper = RestHelper;
RestHelper.headers = new Set();
//# sourceMappingURL=RestHelper.js.map