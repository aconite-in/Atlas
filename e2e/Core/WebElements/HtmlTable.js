"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Logger_1 = require("../DataAccess/Logger");
const BaseElement_1 = require("./BaseElement");
class HtmlTable extends BaseElement_1.BaseElement {
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
                        await cell.click();
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
        const expectedRow = tableFromFeature.raw()[1];
        const table = await this.get();
        await table.isPresent().then(async (tablePresent) => {
            if (tablePresent) {
                const condition = expectedRow.filter((f) => !f.startsWith("###")).map((v) => `td='${v}'`).join(" and ");
                const baseXpath = `//tr[${condition}]`;
                // console.log(baseXpath);
                const rows = await table.all(protractor_1.by.xpath(baseXpath)).count();
                if (rows) {
                    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `HtmlTable: Found at least a row with the given data\n\t+${expectedRow}`);
                }
                else if (this.NextButtonCSS !== undefined) {
                    const nextButton = await protractor_1.$(this.NextButtonCSS);
                    await nextButton.getAttribute(this.NextButtonDisabledAttribute).then((attribute) => {
                        if (attribute) { // if the next button is disabled, stop recursion
                            Logger_1.Logger.log(Logger_1.LogLevel.ERROR, "Reached the last page of the table");
                        }
                        else {
                            Logger_1.Logger.log(Logger_1.LogLevel.INFO, "DataTable: Moving to next page to check if matching record exists");
                            nextButton.click();
                        }
                    });
                    const rows = await table.all(protractor_1.by.xpath(baseXpath)).count();
                    if (rows) {
                        Logger_1.Logger.log(Logger_1.LogLevel.INFO, `DataTable: Found at least a row with the given data\n\t+${expectedRow}`);
                    }
                }
                else {
                    Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `HtmlTable: Unable to find row with the given data\n\t+${expectedRow}`);
                }
            }
        });
    }
    async validateRowFromDB(columnName, tableName, where) {
        const sql = require("mssql");
        await sql.connect("mssql://www:www@agpjaxsql01/PaySpan_JobSystem");
        const result = await sql.query(`select top 1 ${columnName} from ${tableName} where ${where}`);
        const expectedRow = Object.values(result.recordset[0]).map((v) => String(v));
        const condition = expectedRow.filter((f) => !f.startsWith("###")).map((v) => `td='${v}'`).join(" and ");
        const baseXpath = `//tr[${condition}]`;
        const table = await this.get();
        await table.isPresent().then(async (tablePresent) => {
            if (tablePresent) {
                const rows = await table.all(protractor_1.by.xpath(baseXpath)).count();
                if (rows) {
                    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `HtmlTable: Found at least a row with the given data\n\t+${expectedRow}`);
                }
                else {
                    Logger_1.Logger.log(Logger_1.LogLevel.ERROR, `HtmlTable: Unable to find row with the given data\n\t+${expectedRow}`);
                }
            }
        });
    }
}
exports.HtmlTable = HtmlTable;
//# sourceMappingURL=HtmlTable.js.map