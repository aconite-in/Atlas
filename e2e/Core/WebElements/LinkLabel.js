"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_conf_1 = require("../../protractor.conf");
const Logger_1 = require("../DataAccess/Logger");
const BaseElement_1 = require("./BaseElement");
class LinkLabel extends BaseElement_1.BaseElement {
    async click() {
        await protractor_1.browser.wait(async () => await this.get().isDisplayed(), protractor_conf_1.config.elementTimeout).then(async () => {
            const EC = protractor_1.protractor.ExpectedConditions;
            await protractor_1.browser.wait(async () => await EC.elementToBeClickable(this.get()), protractor_conf_1.config.elementTimeout).then(async () => {
                await this.get().click();
                Logger_1.Logger.log(Logger_1.LogLevel.INFO, `LinkLabel: Clicked label with ${this.locatorType} =  ${this.locatorValue}`);
            }, (err) => { Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `LinkLabel: Failed to click label with ${this.locatorType} =  ${this.locatorValue}`); });
        }, (err) => { Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `LinkLabel: Failed to click label with ${this.locatorType} =  ${this.locatorValue}`); });
    }
}
exports.LinkLabel = LinkLabel;
//# sourceMappingURL=LinkLabel.js.map