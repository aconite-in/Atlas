"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_conf_1 = require("../../protractor.conf");
const Logger_1 = require("../DataAccess/Logger");
const BaseElement_1 = require("./BaseElement");
class TextBox extends BaseElement_1.BaseElement {
    async type(inputText) {
        await protractor_1.browser.wait(() => this.get().isDisplayed(), protractor_conf_1.config.elementTimeout).then(async () => {
            await protractor_1.browser.wait(async () => await this.get().isEnabled(), protractor_conf_1.config.elementTimeout).then(async () => {
                await this.get().clear();
                await this.get().sendKeys(inputText);
                Logger_1.Logger.log(Logger_1.LogLevel.INFO, `TextBox: Typed ${inputText} on element with ${this.locatorType} =  ${this.locatorValue}`);
            }, (err) => { Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `TextBox: Failed to Type ${inputText} on element with ${this.locatorType} =  ${this.locatorValue}`); });
        }, (err) => { Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `TextBox: Failed to Type ${inputText} on element with ${this.locatorType} =  ${this.locatorValue}`); });
    }
}
exports.TextBox = TextBox;
//# sourceMappingURL=TextBox.js.map