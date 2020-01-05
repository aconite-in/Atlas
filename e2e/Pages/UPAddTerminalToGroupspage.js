"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const HtmlTable_1 = require("../Core/WebElements/HtmlTable");
class UPAddTerminalToGroupspage extends BasePage_1.BasePage {
    constructor() {
        super("", "group-add-terminal-search-institutionId", 20000, "id"); //wait till the Add Terminal to Group page is loaded
        this.Searchbutton = new Button_1.Button("classname", "icon-search undefined medium icon");
        this.SearchresultsTable = new HtmlTable_1.HtmlTable("id", "select-group-terminals-data-table-content-wrapper");
        this.Searchfiltertextbox = new TextBox_1.TextBox("id", "select-group-terminals-keyword-search-results");
        this.Terminalcheckbox = new Button_1.Button("classname", "datatable-checkbox ng-star-inserted");
        this.AddselectedterminalButton = new Button_1.Button("partialbuttontext", ' Add selected terminals');
    }
    navigateTo() {
    }
}
exports.UPAddTerminalToGroupspage = UPAddTerminalToGroupspage;
//# sourceMappingURL=UPAddTerminalToGroupspage.js.map