"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Label_1 = require("../Core/WebElements/Label");
class CMSeIssIdconfPage extends BasePage_1.BasePage {
    constructor() {
        super("", 'AddIssuerId', undefined, "id"); //wait till the Issuer ID configuration page is loaded
        this.AddIssuerIDbutton = new Button_1.Button("id", "AddIssuerId");
        this.Effdatetextbox = new TextBox_1.TextBox("id", "EFFDATE");
        this.Confirmationmessage = new Label_1.Label("classname", "success");
        this.InstitutionTab = new Button_1.Button("id", "InstitutionMenuTab");
        this.CardholderTab = new Button_1.Button("id", "CardholderMenuTab");
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSeIssIdconfPage = CMSeIssIdconfPage;
//# sourceMappingURL=CMSeIssIdconfPage.js.map