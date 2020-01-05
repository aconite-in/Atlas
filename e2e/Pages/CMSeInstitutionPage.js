"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const TextBox_1 = require("../Core/WebElements/TextBox");
const CMSeCardholderPage_1 = require("./CMSeCardholderPage");
class CMSeInstitutionPage extends BasePage_1.BasePage {
    constructor() {
        super("", "inst", undefined, "id"); //wait till the Institution Page is loaded
        this.InstitutionIDtextbox = new TextBox_1.TextBox("id", "inst");
        this.IssuerIdConfigurationMenu = new Button_1.Button("id", "IssuerIdConfiguration");
        this.ProductIdIssuerIdConfigurationViewMenu = new Button_1.Button("id", "ProductIdIssuerIdConfigurationView");
        this.CardholderTab = new Button_1.Button("id", "CardholderMenuTab");
    }
    async navigateTo() {
        //throw new Error("Method not implemented.");
        let CMSeCHpage = new CMSeCardholderPage_1.CMSeCardholderPage();
        await CMSeCHpage.navigateTo();
        await CMSeCHpage.InstitutionTab.click();
        await this.isOpen();
    }
}
exports.CMSeInstitutionPage = CMSeInstitutionPage;
//# sourceMappingURL=CMSeInstitutionPage.js.map