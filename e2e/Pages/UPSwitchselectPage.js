"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
class UPSwitchselectPage extends BasePage_1.BasePage {
    constructor() {
        super("", "card-switch-selection-FISB", 20000, "id"); //wait till the Switch selection page is loaded
        this.FISBButton = new Button_1.Button("id", "card-switch-selection-FISB");
        this.IFSAButton = new Button_1.Button("id", "card-switch-selection-IFSA");
        this.ISPAButton = new Button_1.Button("id", "card-switch-selection-ISPA");
        this.MCDPButton = new Button_1.Button("id", "card-switch-selection-MCDP");
        this.BCFSButton = new Button_1.Button("id", "card-switch-selection-BCFS");
        this.FISAButton = new Button_1.Button("id", "card-switch-selection-FISA");
        this.CUSAButton = new Button_1.Button("id", "card-switch-selection-CUSA");
        this.TDBKButton = new Button_1.Button("id", "card-switch-selection-TDBK");
    }
    navigateTo() {
    }
}
exports.UPSwitchselectPage = UPSwitchselectPage;
//# sourceMappingURL=UPSwitchselectPage.js.map