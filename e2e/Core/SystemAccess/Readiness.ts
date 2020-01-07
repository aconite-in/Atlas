import { promise } from "ping";
import { Logger, LogLevel } from "../DataAccess/Logger";

export class EnvironmentReadiness {

    public static endPoint: string;

    public static setEndpoint(endPoint: string) {
        this.endPoint = endPoint;
        Logger.log(LogLevel.INFO, `EnvironmentReadiness: Setting the end point to ${this.endPoint}`);
    }

    public static async validateEndpointStatus() {
        Logger.log(LogLevel.INFO, `EnvironmentReadiness: Trying to ping the end point: "${this.endPoint}"`);
        await promise.probe(this.endPoint).then((value) => {
            if (value.alive) {
                Logger.log(LogLevel.INFO, `EnvironmentReadiness: Success to ping the end point: "${this.endPoint}"`);
            } else {
                Logger.log(LogLevel.ERROR, `EnvironmentReadiness: Failed to ping the end point: "${this.endPoint}"`);
            }
        }).catch((error) => {
            Logger.log(LogLevel.ERROR, `EnvironmentReadiness: Failed to ping the end point: "${this.endPoint}"  with error ${error}`);
        });
    }

}
