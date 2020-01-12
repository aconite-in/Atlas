"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_conf_1 = require("../../protractor.conf");
const Logger_1 = require("../DataAccess/Logger");
class BaseElement {
    constructor(locatorType, locatorValue) {
        this.locatorValue = locatorValue;
        this.locatorType = locatorType;
    }
    get() {
        switch (this.locatorType.toLocaleLowerCase()) {
            case "css":
                return protractor_1.element(protractor_1.by.css(this.locatorValue));
            case "classname":
                return protractor_1.element(protractor_1.by.className(this.locatorValue));
            case "linktext":
                return protractor_1.element(protractor_1.by.linkText(this.locatorValue));
            case "tagname":
                return protractor_1.element(protractor_1.by.tagName(this.locatorValue));
            case "xpath":
                return protractor_1.element(protractor_1.by.xpath(this.locatorValue));
            case "name":
                return protractor_1.element(protractor_1.by.name(this.locatorValue));
            case "partiallinktext":
                return protractor_1.element(protractor_1.by.partialLinkText(this.locatorValue));
            case "id":
                return protractor_1.element(protractor_1.by.id(this.locatorValue));
            case "model":
                return protractor_1.element(protractor_1.by.model(this.locatorValue));
            case "text":
                return protractor_1.element(protractor_1.by.xpath(`//*[text()='${this.locatorValue}']`));
            case "partialbuttontext":
                return protractor_1.element(protractor_1.by.partialButtonText(this.locatorValue));
            default:
                return protractor_1.element(protractor_1.by.id(this.locatorValue));
        }
    }
    async validateInnerText(validationText, inverseResult = false, Mandatory = true) {
        const innertext = await this.get().getText();
        if (innertext.trim() !== validationText.trim()) {
            if (Mandatory) {
                Logger_1.Logger.log(inverseResult ? Logger_1.LogLevel.INFO : Logger_1.LogLevel.ERROR, `BaseElement: Inner text did not matched.\n\t+ ${innertext}\n\t- ${validationText}`);
            }
            else {
                Logger_1.Logger.log(inverseResult ? Logger_1.LogLevel.INFO : Logger_1.LogLevel.WARN, `BaseElement: Inner text did not matched.\n\t+ ${innertext}\n\t- ${validationText}`);
            }
        }
        else {
            // if (Mandatory)
            Logger_1.Logger.log(inverseResult ? Logger_1.LogLevel.ERROR : Logger_1.LogLevel.INFO, `BaseElement: Inner text matched.\n\t+ ${innertext}\n\t- ${validationText}`);
            // else
            //    Logger.log(inverseResult ? LogLevel.INFO : LogLevel.WARN, `BaseElement: Inner text did not matched.\n\t+ ${innertext}\n\t- ${validationText}`)
        }
    }
    async getDisplayedText() {
        return await this.get().getText().then((displayedTxt) => {
            return displayedTxt;
        }).catch(() => {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Unable to find");
        });
    }
    async getDisplayeddata() {
        return await this.get().getAttribute("value").then((displayedval) => {
            return displayedval;
        }).catch(() => {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Unable to find");
        });
    }
    async isDisplayed() {
        return await this.get().isDisplayed();
    }
    async waitfor(failOnError) {
        await protractor_1.browser.wait(async () => await this.get().isPresent(), protractor_conf_1.config.elementTimeout).then(async () => {
            Logger_1.Logger.log(Logger_1.LogLevel.INFO, `Waited till ${this.locatorValue} is present in screen`);
        }, (err) => { Logger_1.Logger.log(failOnError ? Logger_1.LogLevel.ERROR : Logger_1.LogLevel.WARN, `Action to wait till ${this.locatorValue} is displayed in screen failed`); });
    }
    async valitdateAttributeValue(attribute, expectedAttribute) {
        await this.get().getAttribute(attribute).then((actualAttribute) => {
            if (expectedAttribute === actualAttribute) {
                Logger_1.Logger.log(Logger_1.LogLevel.INFO, `BaseElement: WebElement attribute ${attribute} has the required value ${actualAttribute}`);
            }
            else {
                Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `BaseElement: WebElement attribute ${attribute} does not have the required value ${actualAttribute}`);
            }
        }).catch(() => {
            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `BaseElement: Error while find the attribute ${attribute}`);
        });
    }
}
exports.BaseElement = BaseElement;
//# sourceMappingURL=BaseElement.js.map