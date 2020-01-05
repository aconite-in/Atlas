"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Logger_1 = require("../DataAccess/Logger");
const BaseElement_1 = require("./BaseElement");
class DataTable extends BaseElement_1.BaseElement {
    constructor(locatorType, locatorValue, NextButtonCSS, PreviousButtonCSS, NextButtonDiabledAttribute) {
        super(locatorType, locatorValue);
        this.PreviousButtonCSS = PreviousButtonCSS;
        this.NextButtonCSS = NextButtonCSS;
        this.NextButtonDisabledAttribute = (NextButtonDiabledAttribute) ? NextButtonDiabledAttribute : "disabled";
    }
    async clickByText(cellTagClick, cellText) {
        const table = await this.get();
        await table.isPresent().then(async (tablePresent) => {
            if (tablePresent) {
                const cell = await table.element(protractor_1.by.xpath(`//${cellTagClick}[text()="${cellText}"]`));
                await cell.isPresent().then(async (isPresent) => {
                    if (isPresent) {
                        await protractor_1.browser.executeScript("arguments[0].click();", cell);
                    }
                    else if (this.NextButtonCSS !== undefined) {
                        const nextButton = await protractor_1.$(this.NextButtonCSS);
                        await nextButton.getAttribute(this.NextButtonDisabledAttribute).then((attribute) => {
                            if (attribute) { // if the next button is disabled, stop recursion
                                Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Reached the last page of the table");
                            }
                            else {
                                nextButton.click();
                            }
                        });
                        await this.clickByText(cellTagClick, cellText);
                    }
                    else {
                        Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Unable to find the element");
                    }
                });
            }
            else {
                Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `Unable to find table with ${this.locatorType} = ${this.locatorValue}`);
            }
        });
    }
    async doubleclickByText(cellTagClick, cellText) {
        const table = await this.get();
        await table.isPresent().then(async (tablePresent) => {
            if (tablePresent) {
                const cell = await table.element(protractor_1.by.xpath(`//${cellTagClick}[text()="${cellText}"]`));
                await cell.isPresent().then(async (isPresent) => {
                    if (isPresent) {
                        await protractor_1.browser.actions().mouseMove(cell).mouseMove({ x: 50, y: 0 }).doubleClick().perform();
                    }
                    else if (this.NextButtonCSS !== undefined) {
                        const nextButton = await protractor_1.$(this.NextButtonCSS);
                        await nextButton.getAttribute(this.NextButtonDisabledAttribute).then((attribute) => {
                            if (attribute) { // if the next button is disabled, stop recursion
                                Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Reached the last page of the table");
                            }
                            else {
                                nextButton.click();
                                protractor_1.browser.sleep(500);
                                protractor_1.browser.executeScript("window.scrollBy(0,-500)");
                            }
                        });
                        await this.doubleclickByText(cellTagClick, cellText);
                    }
                    else {
                        Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Unable to find the element");
                    }
                });
            }
            else {
                Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `Unable to find table with ${this.locatorType} = ${this.locatorValue}`);
            }
        });
    }
    async validateRow(tableFromFeature) {
        const expectedRows = tableFromFeature.rows();
        for (const expectedRow of expectedRows) {
            await this.validateRowX(expectedRow);
        }
    }
    async validateRowX(expectedRow) {
        const table = await this.get();
        await table.isPresent().then(async (tablePresent) => {
            if (tablePresent) {
                const condition = expectedRow.filter((f) => !f.startsWith("###")).map((v) => `datatable-body-cell='${v}'`).join(" and ");
                const baseXpath = `//div[${condition}]`;
                // console.log(baseXpath);
                const rows = await table.all(protractor_1.by.xpath(baseXpath)).count();
                if (rows) {
                    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `DataTable: Found at least a row with the given data\n\t+${expectedRow}`);
                }
                else if (this.NextButtonCSS !== undefined) {
                    const nextButton = await protractor_1.$(this.NextButtonCSS);
                    await nextButton.getAttribute(this.NextButtonDisabledAttribute).then(async (attribute) => {
                        if (attribute) { // if the next button is disabled, stop recursion
                            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `Reached the last page of the table, but unable to find\n\t+${expectedRow}`);
                        }
                        else {
                            Logger_1.Logger.log(Logger_1.LogLevel.INFO, "DataTable: Moving to next page to check if matching record exists");
                            nextButton.click();
                            await this.validateRowX(expectedRow);
                        }
                    });
                }
                else {
                    Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `DataTable: Unable to find row with the given data\n\t+${expectedRow}`);
                }
            }
        });
    }
}
exports.DataTable = DataTable;
//# sourceMappingURL=DataTable.js.map