import jsSHA from "jssha";
// import { Logger, LogLevel } from "./Logger";

export class TOTPHelper {
    public getOTP(securityCode: any) {
        let dec2hex = function(s: number) {
            return (s < 15.5 ? "0" : "") + Math.round(s).toString(16);

        };

        let hex2dec = function(s: string) {
            return parseInt(s, 16);
        };

        let leftpad = function(s: string, l: number, p: string | undefined) {
            if (l + 1 >= s.length) {
                s = Array(l + 1 - s.length).join(p) + s;
            }
            return s;

        };

        let base32tohex = function(base32: { length: number; charAt: (arg0: number) => { toUpperCase: () => string; }; }) {
            let base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            let bits = "";
            let hex = "";
            for (let i = 0; i < base32.length; i++) {
                let val = base32chars.indexOf(base32.charAt(i).toUpperCase());
                bits += leftpad(val.toString(2), 5, "0");
            }
            for (let i = 0; i + 4 <= bits.length; i += 4) {
                let chunk = bits.substr(i, 4);
                hex = hex + parseInt(chunk, 2).toString(16);
            }
            return hex;
        };

        try {
            let epoch = Math.round(new Date().getTime() / 1000.0);
            let time = leftpad(dec2hex(Math.floor(epoch / 30)), 16, "0");
            let hmacObj = new jsSHA(time, "HEX");
            // @ts-ignore
            let hmac = hmacObj.getHMAC(base32tohex(securityCode), "HEX", "SHA-1", "HEX");
            let offset = hex2dec(hmac.substring(hmac.length - 1));
            let otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec("7fffffff")) + "";
            otp = (otp).substr(otp.length - 6, 6);
        } catch (error) {
            throw error;
        }
        return otp;
    }

}
