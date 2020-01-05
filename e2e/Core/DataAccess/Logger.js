"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fs_1 = require("fs");
const fs_2 = __importDefault(require("fs"));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Logger {
    static InstantiateLogger(fileName) {
        fs_1.writeFile(this.fileName, "", (err) => { if (err) {
            console.error(err);
        } });
    }
    static log(level, message) {
        switch (level) {
            case LogLevel.DEBUG:
                message = "\nDEBUG: " + message;
                fs_1.appendFile(this.fileName, message, (err) => { if (err) {
                    console.error(err);
                } });
            case LogLevel.INFO:
                message = "\nINFO: " + message;
                fs_1.appendFile(this.fileName, message, (err) => { if (err) {
                    console.error(err);
                } });
                break;
            case LogLevel.WARN:
                message = "\nWARN: " + message;
                fs_1.appendFile(this.fileName, message, (err) => { if (err) {
                    console.error(err);
                } });
                break;
            case LogLevel.ERROR:
                message = "\nERROR: " + message;
                fs_1.appendFile(this.fileName, message, (err) => { if (err) {
                    console.error(err);
                } });
                chai_1.assert.fail(message);
                break;
        }
    }
    static logSubHeading(subtitle) {
        fs_1.appendFile(this.fileName, `\n\n${subtitle}`, (err) => { if (err) {
            console.error(err);
        } });
    }
    static setCurrentScenario(CurrentScenario) {
        this.currentScenarioName = CurrentScenario;
    }
    static async writeScreenShot(data, screenshotFilename) {
        const stream = fs_2.default.createWriteStream(screenshotFilename);
        await stream.write(new Buffer(data, "base64"));
        stream.end();
    }
}
exports.Logger = Logger;
Logger.fileName = "./Reports/TSpector.log";
Logger.currentScenarioName = "";
//# sourceMappingURL=Logger.js.map