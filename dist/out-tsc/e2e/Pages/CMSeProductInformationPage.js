"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const Label_1 = require("../Core/WebElements/Label");
class CMSeProductInformationPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Image Store Parameters:")]', undefined, "xpath"); //wait till the Product ID information page is loaded
        super("", "Image Store Parameters:", undefined, "text");
        this.LimitsMenu = new Button_1.Button("id", "LMT");
        this.PINmainparametersMenu = new Button_1.Button("id", "PIN");
        this.CardprogramsMenu = new Button_1.Button("id", "CDP");
        this.ServicechargesMenu = new Button_1.Button("id", "SVC");
        this.IssueridMenu = new Button_1.Button("id", "CSK");
        this.IssueridadminMenu = new Button_1.Button("id", "CSA");
        this.InstantissueMenu = new Button_1.Button("id", "IIS");
        this.ContinueLink = new Button_1.Button("classname", "#main-column > div > div.product-navigation > a:nth-child(3)");
        this.ProductIDlabel = new Label_1.Label("xpath", '//*[@id="product-information"]/span[2]');
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSeProductInformationPage = CMSeProductInformationPage;
//# sourceMappingURL=CMSeProductInformationPage.js.map