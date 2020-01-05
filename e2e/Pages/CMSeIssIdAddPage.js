"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const TextBox_1 = require("../Core/WebElements/TextBox");
class CMSeIssIdAddPage extends BasePage_1.BasePage {
    constructor() {
        super("", "submit", undefined, "classname"); //wait till the Issuer ID add page is loaded
        this.IssIDtextbox = new TextBox_1.TextBox("id", "issuerId");
        this.Desctextbox = new TextBox_1.TextBox("id", "description");
        this.Effdatetextbox = new TextBox_1.TextBox("id", "effectiveDate");
        this.Characteristicstextbox = new TextBox_1.TextBox("id", "characteristic");
        this.IsChipCheckbox = new Button_1.Button("id", "attribute");
        this.Servicecodetextbox = new TextBox_1.TextBox("id", "serviceCode");
        this.PrefixdefaultCheckbox = new Button_1.Button("id", "prefixDefault");
        this.ReissuedefaultCheckbox = new Button_1.Button("id", "reissueDefault");
        this.ReplacementdefaultCheckbox = new Button_1.Button("id", "replacementDefault");
        this.CompromisedefaultCheckbox = new Button_1.Button("id", "compromisedDefault");
        this.Submitbutton = new Button_1.Button("classname", "submit");
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSeIssIdAddPage = CMSeIssIdAddPage;
//# sourceMappingURL=CMSeIssIdAddPage.js.map