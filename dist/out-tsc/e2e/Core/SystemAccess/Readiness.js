"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ping_1 = require("ping");
const Logger_1 = require("../DataAccess/Logger");
class EnvironmentReadiness {
    static setEndpoint(endPoint) {
        this.endPoint = endPoint;
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `EnvironmentReadiness: Setting the end point to ${this.endPoint}`);
    }
    static async validateEndpointStatus() {
        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `EnvironmentReadiness: Trying to ping the end point: "${this.endPoint}"`);
        await ping_1.promise.probe(this.endPoint).then((value) => {
            if (value.alive)
                Logger_1.Logger.log(Logger_1.LogLevel.INFO, `EnvironmentReadiness: Success to ping the end point: "${this.endPoint}"`);
            else
                Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `EnvironmentReadiness: Failed to ping the end point: "${this.endPoint}"`);
        }).catch((error) => {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `EnvironmentReadiness: Failed to ping the end point: "${this.endPoint}"  with error ${error}`);
        });
    }
}
exports.EnvironmentReadiness = EnvironmentReadiness;
//# sourceMappingURL=Readiness.js.map