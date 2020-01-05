"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BaseElement_1 = require("./WebElements/BaseElement");
class BasePage {
    constructor(pageURL, xPathValidator, timeout, locatortype) {
        this.pageURL = pageURL;
        locatortype = locatortype ? locatortype : "xpath";
        this.xPathValidator = new BaseElement_1.BaseElement(locatortype, xPathValidator);
        this.timeout = timeout ? timeout : 200000;
    }
    // async isOpen() {
    //     return await browser.wait(async () => { return await this.xPathValidator.get().isPresent() }, this.timeout)
    //         .then((isDisplayed) => { return isDisplayed; })
    //         .catch(() => { return false; })
    // }
    async isOpen(useDefaultTimeout = false) {
        return await protractor_1.browser.wait(async () => await this.xPathValidator.get().isPresent(), useDefaultTimeout ? this.timeout : 10)
            .then((isDisplayed) => isDisplayed)
            .catch(() => false);
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map