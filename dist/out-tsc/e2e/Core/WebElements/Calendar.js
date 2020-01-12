"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_conf_1 = require("../../protractor.conf");
const Logger_1 = require("../DataAccess/Logger");
const BaseElement_1 = require("./BaseElement");
class Calendar extends BaseElement_1.BaseElement {
    async selectCalendarDate(year, month, day) {
        await protractor_1.browser.wait(async () => await this.get().isDisplayed(), protractor_conf_1.config.elementTimeout).then(async () => {
            const EC = protractor_1.protractor.ExpectedConditions;
            await protractor_1.browser.wait(async () => await EC.elementToBeClickable(this.get()), protractor_conf_1.config.elementTimeout).then(async () => {
                await this.get().click();
                await protractor_1.element(protractor_1.by.xpath('//button[@cdkarialive="polite"] | //button[contains(@aria-label,"Choose month and year")]')).click();
                await protractor_1.element(protractor_1.by.xpath(`//div[@class="mat-calendar-body-cell-content"][contains(text(),"${year}")] | 
                //div[@class="mat-calendar-body-cell-content mat-calendar-body-selected mat-calendar-body-today"][contains(text(),"${year}")] | 
                //table//tbody//tr//td[contains(.,"${year}")]`)).click();
                await protractor_1.element(protractor_1.by.xpath(`//div[@class="mat-calendar-body-cell-content"][contains(text(),"${month}")] | 
                //div[@class="mat-calendar-body-cell-content mat-calendar-body-selected mat-calendar-body-today"][contains(text(),"${month}")] | 
                //table//tbody//tr//td[contains(.,"${month}")]`)).click();
                await protractor_1.element(protractor_1.by.xpath(`//div[@class="mat-calendar-body-cell-content"][normalize-space()="${day}"] | 
                //div[@class="mat-calendar-body-cell-content mat-calendar-body-selected mat-calendar-body-today"][normalize-space()="${day}"] | 
                //table//tbody//tr//td[contains(.,"${day}")]`)).click();
                Logger_1.Logger.log(Logger_1.LogLevel.INFO, `Button: Clicked Button with ${this.locatorType} =  ${this.locatorValue}`);
            }, (err) => { Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `Calendar: Failed to click Xpath with ${this.locatorType} =  ${this.locatorValue}`); });
        }, (err) => { Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `Calendar: Failed to click Xpath with ${this.locatorType} =  ${this.locatorValue}`); });
    }
}
exports.Calendar = Calendar;
//# sourceMappingURL=Calendar.js.map