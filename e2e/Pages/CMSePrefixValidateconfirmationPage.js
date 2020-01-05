"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
class CMSePrefixValidateconfirmationPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Product ID → Prefix Validate / Link")]', undefined, "xpath"); //wait till the Prefix validate confirmation page is loaded
        super("", "Product ID → Prefix Validate / Link", undefined, "text");
        this.ValidateLinkProductbutton = new Button_1.Button("id", "LinkProductConfiguration");
        this.UpdateProductbutton = new Button_1.Button("id", "UpdateProductConfiguration");
        this.ViewProductbutton = new Button_1.Button("id", "ViewProductConfiguration");
        this.InstititonTab = new Button_1.Button("id", "InstitutionMenuTab");
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSePrefixValidateconfirmationPage = CMSePrefixValidateconfirmationPage;
//# sourceMappingURL=CMSePrefixValidateconfirmationPage.js.map