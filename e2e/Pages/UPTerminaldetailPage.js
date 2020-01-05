"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Label_1 = require("../Core/WebElements/Label");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
const Button_1 = require("../Core/WebElements/Button");
const UPTerminalSearchPage_1 = require("./UPTerminalSearchPage");
const protractor_conf_1 = require("../protractor.conf");
const protractor_1 = require("protractor");
class UPTerminaldetailPage extends BasePage_1.BasePage {
    constructor() {
        super("", "Terminal Details", 20000, "text"); //wait till the Terminal detail page is loaded
        this.TerminalInsttexttlabel = new Label_1.Label("id", "terminal-institution-text");
        this.Terminaladdresstextlabel = new Label_1.Label("id", "terminal-address-text");
        this.Cashmanagementlink = new LinkLabel_1.LinkLabel("css", "#mat-tab-label-0-4");
        this.Transactionlink = new LinkLabel_1.LinkLabel("css", "#mat-tab-label-0-1");
        this.Terminalhistorylink = new LinkLabel_1.LinkLabel("css", "#mat-tab-label-0-2");
        this.Terminallabel = new Label_1.Label("id", "header-terminal-field-title");
        this.TerminalFIlabel = new Label_1.Label("id", "terminal-institution-text");
        this.Terminaladdresslabel = new Label_1.Label("id", "terminal-address-text");
        this.Terminaltimezonelabel = new Label_1.Label("id", "terminal-timezone-text");
        this.returntodashboardbutton = new Button_1.Button("id", "apex-header-icon");
    }
    async navigateTo() {
        let UPTermsearchpage = new UPTerminalSearchPage_1.UPTerminalSearchPage();
        await UPTermsearchpage.navigateTo();
        await UPTermsearchpage.isOpen();
        protractor_1.browser.ignoreSynchronization = true;
        await UPTermsearchpage.InstIDtextbox.type(protractor_conf_1.config.constants.UPSITFI);
        await UPTermsearchpage.Terminaltextbox.type(protractor_conf_1.config.constants.UPSITTerminal);
        await UPTermsearchpage.Showhealthstatuscheckbox.click();
        await UPTermsearchpage.Searchbutton.click();
        await UPTermsearchpage.Serchresultslabel.waitfor(false); //true is to make it fail
        await UPTermsearchpage.SearchresultsTable.clickByText('*', protractor_conf_1.config.constants.UPSITTerminal); //* is to search across all tags in the table
        protractor_1.browser.ignoreSynchronization = false;
        await UPTermsearchpage.TerminIDinpopup.click();
    }
}
exports.UPTerminaldetailPage = UPTerminaldetailPage;
//# sourceMappingURL=UPTerminaldetailPage.js.map