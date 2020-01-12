"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
class CMSePrefixValidatePage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Click SUBMIT to LINK the Product and Prefix")]', undefined, "xpath"); //wait till the Prefix validate page is loaded
        super("", "Click SUBMIT to LINK the Product and Prefix", undefined, "text");
        this.ValidateLinkProductbutton = new Button_1.Button("id", "LinkProductConfiguration");
        this.UpdateProductbutton = new Button_1.Button("id", "UpdateProductConfiguration");
        this.ViewProductbutton = new Button_1.Button("id", "ViewProductConfiguration");
        this.Submitbutton = new Button_1.Button("id", "submitButton");
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSePrefixValidatePage = CMSePrefixValidatePage;
//# sourceMappingURL=CMSePrefixValidatePage.js.map