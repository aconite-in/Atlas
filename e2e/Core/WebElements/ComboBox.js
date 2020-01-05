"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_conf_1 = require("../../protractor.conf");
const Logger_1 = require("../DataAccess/Logger");
const BaseElement_1 = require("./BaseElement");
class ComboBox extends BaseElement_1.BaseElement {
    async selectByText(text) {
        await protractor_1.browser.wait(() => this.get().isDisplayed(), protractor_conf_1.config.elementTimeout).then(async () => {
            await this.get().sendKeys(text).then(() => Logger_1.Logger.log(Logger_1.LogLevel.INFO, `ComboBox: selected option ${text} from ${this.locatorType} =  ${this.locatorValue}`));
        }, (err) => { Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `ComboBox: Failed to select option ${text} from element ${this.locatorType} =  ${this.locatorValue}`); });
    }
}
exports.ComboBox = ComboBox;
//# sourceMappingURL=ComboBox.js.map