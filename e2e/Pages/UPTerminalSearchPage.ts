import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";
import { HtmlTable } from "../Core/WebElements/HtmlTable";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { UPHomePage } from "./UPHomePage";
import { DataTable } from "../Core/WebElements/DataTable";


export class UPTerminalSearchPage extends BasePage {

    public InstIDtextbox: TextBox = new TextBox("id", "terminal-search-header-institutionId");
    public Terminaltextbox: TextBox = new TextBox("id", "terminal-search-header-terminalId");

    public Showhealthstatuscheckbox: Button = new Button("xpath", '//*[@id="terminal-search-headershowStatus-checkbox"]');
    public Showcurrentcashcheckbox: Button = new Button("xpath", '//*[@id="terminal-search-headershowCurrentCash-checkbox"]');
    public Searchbutton: Button = new Button("xpath", '//*[@id="button-terminal-search-header-submit"]');

    public SearchresultsTable: DataTable = new DataTable("css", "#search-results-data-table-content-wrapper", "#search-results-data-table > div > datatable-footer > div > datatable-pager > ul > li:nth-child(5)", "#search-results-data-table > div > datatable-footer > div > datatable-pager > ul > li:nth-child(2)", "class");

    public Serchresultslabel: Label = new Label("text", "Search Results");
    public Actionslink: Button = new Button("id", "search-results-data-table-actions-toggle");
    public Cancellink: Button = new Button("partialbuttontext", 'Cancel');

    public Settleterminalmenu: Button = new Button("id", "search-results-data-table-actions-settle-terminals-button");


    public TerminIDinpopup: Label = new Label("xpath", '//*[contains(@id,"table-details-modal-")]/apex-terminal-preview/div/div[1]/header/h3/a');
    public FIIdinpopup: Label = new Label("xpath", '//*[contains(@id,"table-details-modal-")]/apex-terminal-preview/div/div[1]/header/h4/h5');
    public Terimaladdress1inpopup: Label = new Label("xpath", '//*[@id="terminal-address-section"]/span[1]');
    public Terminaladdress2inpopup: Label = new Label("xpath", '//*[@id="terminal-address-section"]/span[2]');
    public returntodashboardbutton: Button = new Button("id", "apex-header-icon");



    constructor() {
        super("", "Terminal Search", 20000, "text"); //wait till the Terminal Search page is loaded
    }

    async navigateTo() {
        let UPHomepage = new UPHomePage();
        if (await UPHomepage.isOpen()) { await UPHomepage.TerminalSearchlinklabel.click(); }
        else { await UPHomepage.navigateTo(); await UPHomepage.isOpen(); await UPHomepage.TerminalSearchlinklabel.click(); }
    }
}

