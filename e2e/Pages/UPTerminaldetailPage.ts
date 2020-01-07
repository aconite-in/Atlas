import { browser } from "protractor";
import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { Calendar } from "../Core/WebElements/Calendar";
import { DataTable } from "../Core/WebElements/DataTable";
import { Label } from "../Core/WebElements/Label";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { TextBox } from "../Core/WebElements/TextBox";
import { config } from "../protractor.conf";
import { UPHomePage } from "./UPHomePage";
import { UPTerminalSearchPage } from "./UPTerminalSearchPage";

export class UPTerminaldetailPage extends BasePage {

    public TerminalInsttexttlabel: Label = new Label("id", "terminal-institution-text");
    public Terminaladdresstextlabel: Label = new Label("id", "terminal-address-text");
    public Cashmanagementlink: LinkLabel = new LinkLabel("css", "#mat-tab-label-0-4");
    public Transactionlink: LinkLabel = new LinkLabel("css", "#mat-tab-label-0-1");
    public Terminalhistorylink: LinkLabel = new LinkLabel("css", "#mat-tab-label-0-2");
    public Terminallabel: Label = new Label("id", "header-terminal-field-title");
    public TerminalFIlabel: Label = new Label("id", "terminal-institution-text");
    public Terminaladdresslabel: Label = new Label("id", "terminal-address-text");
    public Terminaltimezonelabel: Label = new Label("id", "terminal-timezone-text");
    public returntodashboardbutton: Button = new Button("id", "apex-header-icon");

    constructor() {
        super("", "Terminal Details", 20000, "text"); // wait till the Terminal detail page is loaded
    }

    public async navigateTo() {
        const UPTermsearchpage = new UPTerminalSearchPage();
        await UPTermsearchpage.navigateTo();
        await UPTermsearchpage.isOpen();
        browser.ignoreSynchronization = true;
        await UPTermsearchpage.InstIDtextbox.type(config.constants.UPSITFI);
        await UPTermsearchpage.Terminaltextbox.type(config.constants.UPSITTerminal);
        await UPTermsearchpage.Showhealthstatuscheckbox.click();
        await UPTermsearchpage.Searchbutton.click();
        await UPTermsearchpage.Serchresultslabel.waitfor(false); // true is to make it fail
        await UPTermsearchpage.SearchresultsTable.clickByText("*", config.constants.UPSITTerminal); // * is to search across all tags in the table
        browser.ignoreSynchronization = false;
        await UPTermsearchpage.TerminIDinpopup.click();
    }
}
