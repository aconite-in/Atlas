"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const Label_1 = require("../Core/WebElements/Label");
const ComboBox_1 = require("../Core/WebElements/ComboBox");
const UPHomePage_1 = require("./UPHomePage");
class UPTerminalGroupspage extends BasePage_1.BasePage {
    constructor() {
        super("", "Terminal Groups", 20000, "text"); //wait till the Terminal Groups page is loaded
        this.InstIDCombobox = new ComboBox_1.ComboBox("id", 'input-groups-criteria-instId');
        this.Newgroupbutton = new Button_1.Button("id", "button-terminal-group-add");
        this.Filtergrouptextbox = new TextBox_1.TextBox("id", "input-groups-criteria-filter-groups");
        this.Successmessage = new Label_1.Label("id", "successDialogIcon");
        this.DeleteGroupbuttonicon = new Button_1.Button("id", "enableDeleteGroups");
        this.Groupassociatedcheckbox = new Button_1.Button("css", "apex-terminal-group-list apex-groups-card mat-checkbox");
        this.DeleteGroupbutton = new Button_1.Button("id", "deleteGroupsButton");
        this.removeGroupbutton = new Button_1.Button("css", "apex-remove-groups-dialog [ox-button-primary]");
        this.returntodashboardbutton = new Button_1.Button("id", "apex-header-icon");
        this.Terminalmatcardrecord = new Button_1.Button("css", "apex-terminal-group-list mat-card");
        this.AddTerminallink = new Label_1.Label("xpath", '//*[contains(@id,"button-terminal-groups-title")]/mat-card/mat-card-content/div[2]/p/span/a');
    }
    async navigateTo() {
        let UPHomepage = new UPHomePage_1.UPHomePage();
        if (await UPHomepage.isOpen()) {
            await UPHomepage.TerminalGroupslinklabel.click();
        }
        else {
            await UPHomepage.navigateTo();
            await UPHomepage.isOpen();
            await UPHomepage.TerminalGroupslinklabel.click();
        }
    }
}
exports.UPTerminalGroupspage = UPTerminalGroupspage;
//# sourceMappingURL=UPTerminalGroupspage.js.map