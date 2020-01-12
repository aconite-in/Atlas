"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const Label_1 = require("../Core/WebElements/Label");
const UPHomePage_1 = require("./UPHomePage");
const DataTable_1 = require("../Core/WebElements/DataTable");
class UPTerminalSearchPage extends BasePage_1.BasePage {
    constructor() {
        super("", "Terminal Search", 20000, "text"); //wait till the Terminal Search page is loaded
        this.InstIDtextbox = new TextBox_1.TextBox("id", "terminal-search-header-institutionId");
        this.Terminaltextbox = new TextBox_1.TextBox("id", "terminal-search-header-terminalId");
        this.Showhealthstatuscheckbox = new Button_1.Button("xpath", '//*[@id="terminal-search-headershowStatus-checkbox"]');
        this.Showcurrentcashcheckbox = new Button_1.Button("xpath", '//*[@id="terminal-search-headershowCurrentCash-checkbox"]');
        this.Searchbutton = new Button_1.Button("xpath", '//*[@id="button-terminal-search-header-submit"]');
        this.SearchresultsTable = new DataTable_1.DataTable("css", "#search-results-data-table-content-wrapper", "#search-results-data-table > div > datatable-footer > div > datatable-pager > ul > li:nth-child(5)", "#search-results-data-table > div > datatable-footer > div > datatable-pager > ul > li:nth-child(2)", "class");
        this.Serchresultslabel = new Label_1.Label("text", "Search Results");
        this.Actionslink = new Button_1.Button("id", "search-results-data-table-actions-toggle");
        this.Cancellink = new Button_1.Button("partialbuttontext", 'Cancel');
        this.Settleterminalmenu = new Button_1.Button("id", "search-results-data-table-actions-settle-terminals-button");
        this.TerminIDinpopup = new Label_1.Label("xpath", '//*[contains(@id,"table-details-modal-")]/apex-terminal-preview/div/div[1]/header/h3/a');
        this.FIIdinpopup = new Label_1.Label("xpath", '//*[contains(@id,"table-details-modal-")]/apex-terminal-preview/div/div[1]/header/h4/h5');
        this.Terimaladdress1inpopup = new Label_1.Label("xpath", '//*[@id="terminal-address-section"]/span[1]');
        this.Terminaladdress2inpopup = new Label_1.Label("xpath", '//*[@id="terminal-address-section"]/span[2]');
        this.returntodashboardbutton = new Button_1.Button("id", "apex-header-icon");
    }
    async navigateTo() {
        let UPHomepage = new UPHomePage_1.UPHomePage();
        if (await UPHomepage.isOpen()) {
            await UPHomepage.TerminalSearchlinklabel.click();
        }
        else {
            await UPHomepage.navigateTo();
            await UPHomepage.isOpen();
            await UPHomepage.TerminalSearchlinklabel.click();
        }
    }
}
exports.UPTerminalSearchPage = UPTerminalSearchPage;
//# sourceMappingURL=UPTerminalSearchPage.js.map