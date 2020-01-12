"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const HtmlTable_1 = require("../Core/WebElements/HtmlTable");
class CMSePrefixlistPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Please select a Prefix.")]', undefined, "xpath"); //wait till the Prefix list page is loaded
        super("", "Please select a Prefix.", undefined, "text");
        this.ValidateLinkProductbutton = new Button_1.Button("id", "LinkProductConfiguration");
        this.UpdateProductbutton = new Button_1.Button("id", "UpdateProductConfiguration");
        this.ViewProductbutton = new Button_1.Button("id", "ViewProductConfiguration");
        this.PrefixlistTable = new HtmlTable_1.HtmlTable("css", "#main-column > div > table", "#nextButton", "#previousButton");
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSePrefixlistPage = CMSePrefixlistPage;
//# sourceMappingURL=CMSePrefixlistPage.js.map