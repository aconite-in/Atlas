"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const TextBox_1 = require("../Core/WebElements/TextBox");
const CMSeCardholderPage_1 = require("./CMSeCardholderPage");
const CMSeInstitutionPage_1 = require("./CMSeInstitutionPage");
const ComboBox_1 = require("../Core/WebElements/ComboBox");
const Label_1 = require("../Core/WebElements/Label");
class CMSeNegFilestatusPage extends BasePage_1.BasePage {
    constructor() {
        //super("", "//*[contains(text(),'NEG FILE STATUS')]", undefined, "xpath"); //wait till Neg File status page is loaded
        super("", "NEG FILE STATUS", undefined, "text");
        this.InstitutionTab = new Button_1.Button("id", "InstitutionMenuTab");
        this.CardholderTab = new Button_1.Button("id", "CardholderMenuTab");
        this.Hotradiobutton = new Button_1.Button("id", "Hot");
        this.Reasoncombobox = new ComboBox_1.ComboBox("id", "cardStatusReason");
        this.Orderreplacementcardcheckbox = new Button_1.Button("id", "orderReplacementCard");
        this.Orderpinmailercheckbox = new Button_1.Button("id", "optPinMailer");
        this.instandcardperscheckbox = new Button_1.Button("id", "optExpressPrint");
        this.PrefixLabel = new Label_1.Label("id", "newPrefixId");
        this.Expfileupdatecombobox = new ComboBox_1.ComboBox("id", "negativeFileUpdateCode");
        this.Expfileactioncombobox = new ComboBox_1.ComboBox("id", "negativeFileActionCode");
        this.Exppurgedatetextbox = new TextBox_1.TextBox("id", "negativeFilePurgeDate");
        this.Distregioncanadacheckbox = new Button_1.Button("id", "optRegionC");
        this.Submitbutton = new Button_1.Button("id", "Submit");
    }
    async navigateTo() {
        //throw new Error("Method not implemented.");
        let Cardholderpage = new CMSeCardholderPage_1.CMSeCardholderPage();
        let Instpage = new CMSeInstitutionPage_1.CMSeInstitutionPage();
        await Instpage.CardholderTab.click();
        await Cardholderpage.InstIdtextbox.type("00547");
        await Cardholderpage.CardNumberradio.click();
        await Cardholderpage.CardNumbertextbox.type("4495480000000081");
        await Cardholderpage.NegFilestatusMenu.click();
        await this.isOpen();
    }
}
exports.CMSeNegFilestatusPage = CMSeNegFilestatusPage;
//# sourceMappingURL=CMSeNegFilestatusPage.js.map