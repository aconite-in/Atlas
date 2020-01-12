"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const CMSeLoginPage_1 = require("./CMSeLoginPage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
class CMSeCardholderPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Cardholder Search")]', undefined, "xpath"); //wait till the Cardholder Search page is loaded
        super("", "Cardholder Search", undefined, "text");
        this.InstitutionTab = new Button_1.Button("id", "InstitutionMenuTab");
        this.CardholderTab = new Button_1.Button("id", "CardholderMenuTab");
        this.InstIdtextbox = new TextBox_1.TextBox("id", "inst");
        this.CardNumberradio = new Button_1.Button("id", "rdCard");
        this.CardNumbertextbox = new TextBox_1.TextBox("id", "maskedCardNumber");
        this.Submitbutton = new Button_1.Button("id", "searchSubmit");
        this.NegFilestatusMenu = new Button_1.Button("id", "NegFile");
        this.logoutlink = new LinkLabel_1.LinkLabel("css", "#bannerLinkForm > a:nth-child(3)");
    }
    async navigateTo() {
        //throw new Error("Method not implemented.");
        let CMSeLogin = new CMSeLoginPage_1.CMSeLoginPage();
        await CMSeLogin.navigateTo();
        await CMSeLogin.UserName.type("W951gr5");
        await CMSeLogin.Password.type("Month$18");
        await CMSeLogin.ProceedBtn.click();
        await this.isOpen();
    }
}
exports.CMSeCardholderPage = CMSeCardholderPage;
//# sourceMappingURL=CMSeCardholderPage.js.map