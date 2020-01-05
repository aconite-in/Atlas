"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_conf_1 = require("../../protractor.conf");
const Logger_1 = require("../DataAccess/Logger");
const BaseElement_1 = require("./BaseElement");
class Button extends BaseElement_1.BaseElement {
    async click(failOnError = true) {
        await protractor_1.browser.wait(async () => await this.get().isDisplayed(), protractor_conf_1.config.elementTimeout).then(async () => {
            const EC = protractor_1.protractor.ExpectedConditions;
            await protractor_1.browser.wait(async () => await EC.elementToBeClickable(this.get()), protractor_conf_1.config.elementTimeout).then(async () => {
                await this.get().click();
                Logger_1.Logger.log(Logger_1.LogLevel.INFO, `Button: Clicked Button with ${this.locatorType} =  ${this.locatorValue}`);
            }, (err) => { Logger_1.Logger.log(failOnError ? Logger_1.LogLevel.ERROR : Logger_1.LogLevel.WARN, `Button: Failed to click Button with ${this.locatorType} =  ${this.locatorValue}`); });
        }, (err) => { Logger_1.Logger.log(failOnError ? Logger_1.LogLevel.ERROR : Logger_1.LogLevel.WARN, `Button: Failed to click Button with ${this.locatorType} =  ${this.locatorValue}`); });
    }
}
exports.Button = Button;
//# sourceMappingURL=Button.js.map