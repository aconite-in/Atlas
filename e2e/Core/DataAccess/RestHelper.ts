import * as fs from "fs";
import request = require("superagent");
import { Logger, LogLevel } from "./Logger";

const uuidv1 = require("uuid/v1");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export class RestHelper {

    public static async setEndPoint(apiEndPoint: string) {
        this.endPoint = apiEndPoint;
        Logger.log(LogLevel.INFO, `RestHelper: API end point set to ${apiEndPoint}.`);
    }

    public static async setHeaders(headers: string[]) {
        headers.forEach((header) => this.headers.add(header.replace("{{$guid}}", uuidv1())));
        Logger.log(LogLevel.INFO, `RestHelper: Headers updated with ${headers}`);
    }

    public static async setHeaderFromPreviousReponse(header: string, jsonPath: string) {
        if (this.resp) {
            this.headers.add(`${header}:${JSON.parse(JSON.stringify(this.resp.body))[jsonPath]}`);
        }
    }

    public static async setJSONContentType() {
        this.headers.add("Content-Type:application/json");
        Logger.log(LogLevel.INFO, `RestHelper: Content Type changed to application/json for the request`);
    }

    public static async getRequest(param?: string) {
        try {
            const url: string = param ? `${this.endPoint}${param}` : this.endPoint;
            Logger.log(LogLevel.INFO, `RestHelper: Attempting to make a GET request to endpoint ${this.endPoint} with paramenters ${param}`);
            const req = request("Get", url);
            if (this.cookie) {
                req.set("Cookie", this.cookie);
            }
            this.headers.forEach((header) => {
                const h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send();
            Logger.log(LogLevel.INFO, `RestHelper: Successfully to made a GET request to endpoint ${this.endPoint} with paramenters ${param}`);
            console.log(this.resp.body);
        } catch (error) {
            Logger.log(LogLevel.ERROR, `RestHelper: GET Request was unsucessful with error "${error}"`);
        }
    }

    public static async patchRequest(param?: string) {
        try {
            const url: string = param ? `${this.endPoint}${param}` : this.endPoint;
            Logger.log(LogLevel.INFO, `RestHelper: Attempting to make a GET request to endpoint ${this.endPoint} with paramenters ${param}`);
            const req = request("PATCH", url);
            if (this.cookie) {
                req.set("Cookie", this.cookie);
            }
            this.headers.forEach((header) => {
                const h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send();
            Logger.log(LogLevel.INFO, `RestHelper: Successfully to made a GET request to endpoint ${this.endPoint} with paramenters ${param}`);
            console.log(this.resp.body);
        } catch (error) {
            Logger.log(LogLevel.ERROR, `RestHelper: GET Request was unsucessful with error "${error}"`);
        }
    }

    public static async postRequest() {
        const url: string = `${this.endPoint}`;
        try {
            Logger.log(LogLevel.INFO, `RestHelper: Attempting to make a POST request to endpoint ${this.endPoint}`);
            const req = request("POST", url);
            if (this.cookie) {
                req.set("Cookie", this.cookie);
            }
            this.headers.forEach((header) => {
                const h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send();
            Logger.log(LogLevel.INFO, `RestHelper: Successfully to made a POST request to endpoint ${this.endPoint}`);
        } catch (error) {
            Logger.log(LogLevel.ERROR, `RestHelper: POST Request was unsucessful with error "${error}"`);
        }
    }

    public static async postRequestWithParam(paramenters: string) {
        const url: string = `${this.endPoint}`;
        try {
            Logger.log(LogLevel.INFO, `RestHelper: Attempting to make a POST request to endpoint ${this.endPoint}`);
            const req = request("POST", url);
            if (this.cookie) {
                req.set("Cookie", this.cookie);
            }
            this.headers.forEach((header) => {
                const h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send(paramenters);
            // console.log(this.resp.body)
            Logger.log(LogLevel.INFO, `RestHelper: Successfully to made a POST request to endpoint ${this.endPoint}`);
        } catch (error) {
            Logger.log(LogLevel.ERROR, `RestHelper: POST Request was unsucessful with error "${error}"`);
        }
    }

    public static async putRequestWithParam(paramenters: string) {
        const url: string = `${this.endPoint}`;
        try {
            const req = request("PUT", url);
            if (this.cookie) {
                req.set("Cookie", this.cookie);
            }
            this.headers.forEach((header) => {
                const h = header.split(":", 2);
                req.set(h[0], h[1]);
            });
            this.resp = await req.send(paramenters);
            Logger.log(LogLevel.INFO, `RestHelper: Successfully to made a PUT request to endpoint ${this.endPoint}`);
        } catch (error) {
            Logger.log(LogLevel.ERROR, `RestHelper: PUT Request was unsucessful with error "${error}"`);
        }
    }

    public static async validateResponseStatusCode(statusCode: number) {
        if (this.resp.status == statusCode) {
            Logger.log(LogLevel.INFO, `RestHelper: Response code matched ${statusCode}`);
        }
        else {
            Logger.log(LogLevel.INFO, `RestHelper: Response code matched did not matched\n\tExpected:${statusCode}\n\tActual:${this.resp.status}`);
        }
    }

    public static async validateResponseJSONBody(expectedResponseBody: string) {
        if (JSON.stringify(this.resp.body) === JSON.stringify(expectedResponseBody)) {
            Logger.log(LogLevel.INFO, "RestHelper: Expected response matches the API");
        } else {
            Logger.log(LogLevel.ERROR, "RestHelper: Expected response does not matches the API");
        }
    }

    public static async validateResponseJSONBodyAgainstFile(expectedResponseBodyFilePath: string) {
        Logger.log(LogLevel.INFO, `RestHelper: Attemptin to check the file on path ${expectedResponseBodyFilePath}`);
        const expectedResponse = JSON.parse(await this.getFileContent(expectedResponseBodyFilePath));
        Logger.log(LogLevel.INFO, `RestHelper: File parsed succefully. Attempting to vaildate against response ${expectedResponseBodyFilePath}`);
        await this.validateResponseJSONBody(expectedResponse);
    }

    public static async validateResponseXMLBody(expectedResponseBody: string) {
        if (JSON.stringify(this.resp.body) === JSON.stringify(expectedResponseBody)) {
            Logger.log(LogLevel.INFO, "RestHelper: Expected response matches the API");
        } else {
            Logger.log(LogLevel.ERROR, "RestHelper: Expected response does not matches the API");
        }
    }

    public static async validateResponseXMLBodyAgainstFile(expectedResponseBodyFilePath: string) {
        Logger.log(LogLevel.INFO, `RestHelper: Attemptin to check the file on path ${expectedResponseBodyFilePath}`);
        const expectedResponse: string = await this.getFileContent(expectedResponseBodyFilePath);
        Logger.log(LogLevel.INFO, `RestHelper: File parsed succefully. Attempting to vaildate against response ${expectedResponseBodyFilePath}`);
        if (Buffer.from(expectedResponse).compare(this.resp.body) === 0) {
            Logger.log(LogLevel.INFO, `RestHelper: file are same ${expectedResponseBodyFilePath}`);
        }
        else {
            Logger.log(LogLevel.ERROR, `RestHelper: File are different ${expectedResponseBodyFilePath}`);
        }
    }

    public static async getFileContent(filePath: string) {
        const filecontents = await fs.readFileSync(__dirname + "..\\..\\..\\" + filePath);
        return filecontents.toString();
    }

    private static endPoint: string;
    private static resp: request.Response;
    private static cookie: string[];
    private static headers: Set<string> = new Set();
}
