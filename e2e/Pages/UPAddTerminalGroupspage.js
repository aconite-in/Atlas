"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
class UPAddTerminalGroupspage extends BasePage_1.BasePage {
    constructor() {
        super("", "Add Terminal Group", 20000, "text"); //wait till the Add Terminal Groups page is loaded
        this.Terminalgrpnametextbox = new TextBox_1.TextBox("id", 'input-terminal-group-dialog-name');
        this.Terminalgrpdesctextbox = new TextBox_1.TextBox("id", 'input-terminal-group-dialog-desc');
        this.Resetbutton = new Button_1.Button("id", "button-terminal-group-dialog-reset");
        this.Savebutton = new Button_1.Button("id", "button-terminal-group-dialog-save");
        this.returntodashboardbutton = new Button_1.Button("id", "apex-header-icon");
    }
    navigateTo() {
    }
}
exports.UPAddTerminalGroupspage = UPAddTerminalGroupspage;
//# sourceMappingURL=UPAddTerminalGroupspage.js.map