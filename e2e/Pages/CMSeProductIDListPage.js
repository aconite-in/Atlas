"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const CMSeInstitutionPage_1 = require("./CMSeInstitutionPage");
const HtmlTable_1 = require("../Core/WebElements/HtmlTable");
class CMSeProductIDListPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Please select a Product by clicking on the Product ID.")]', undefined, "xpath"); //wait till the Product ID list Page is loaded
        super("", "Please select a Product by clicking on the Product ID.", undefined, "text");
        this.ProductMenuTab = new Button_1.Button("id", "Product");
        this.ProductlistTable = new HtmlTable_1.HtmlTable("css", "#product-list", "#nextButton", "#previousButton");
    }
    async navigateTo() {
        //throw new Error("Method not implemented.");
        let InstPage = new CMSeInstitutionPage_1.CMSeInstitutionPage();
        await InstPage.navigateTo();
        await InstPage.InstitutionIDtextbox.type("00547");
        await InstPage.IssuerIdConfigurationMenu.click();
        await InstPage.ProductIdIssuerIdConfigurationViewMenu.click();
        await this.isOpen();
    }
}
exports.CMSeProductIDListPage = CMSeProductIDListPage;
//# sourceMappingURL=CMSeProductIDListPage.js.map