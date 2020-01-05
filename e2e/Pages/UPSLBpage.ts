import { browser, element, by } from "protractor"
import { BasePage } from "../Core/BasePage";
import { UPLoginPage } from "./UPLoginPage";
import { UPSwitchselectPage } from "./UPSwitchselectPage";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { config } from "../protractor.conf";
import { Button } from "../Core/WebElements/Button";
import { Calendar } from "../Core/WebElements/Calendar";
import { TextBox } from "../Core/WebElements/TextBox";
import { UPHomePage } from "./UPHomePage";
import { DataTable } from "../Core/WebElements/DataTable";


export class UPSLBpage extends BasePage {

    public Newrulebutton: Button = new Button("id", "button-dashboard-page-open-dialog");
    public Declinetxnreportbutton: Button = new Button("id", "button-declined-transaction-report");
    public Recentactivitybutton: Button = new Button("id", "button-rule-audit-report");
    public SLBSearchresultsTable: DataTable = new DataTable("css", "#fraud-rules-data-table-content-wrapper", "#fraud-rules-data-table > div > datatable-footer > div > datatable-pager > ul > li:nth-child(8) > a > i", "#fraud-rules-data-table > div > datatable-footer > div > datatable-pager > ul > li:nth-child(2) > a > i");

    //Create Rule window
    public Blocklistarrowbutton: Button = new Button("css", "apex-bin-pan-selection mat-form-field");
    public Binsoptionlist: Button = new Button("id", "stepper-bin-pan-chose-bin-1");
    public Panoptionlist: Button = new Button("id", "stepper-bin-pan-chose-bin-2");
    public Pantextbox: TextBox = new TextBox("id", "stepper-bin-pan-pans-input");
    public Choosebinsarrowbutton: Button = new Button("xpath", '//*[@id="visual-select-select-0"]/div/div[2]/div');
    public selectallBins: Button = new Button("id", "bins-option-0");
    public Createrulewindow: Button = new Button("xpath", '//*[@id="rule-dialog-create-rule-block"]');
    public Nextbutton: Button = new Button("id", "rule-dialog-nxt-btn");
    public Cancelbutton: Button = new Button("partialbuttontext", "Cancel");
    public Startcalendar: Calendar = new Calendar("xpath", '//*[@id="cdk-step-content-4-1"]/apex-date-rule/div/div/mat-datepicker-toggle[1]/button/span/svg');
    public Endcalendar: Calendar = new Calendar("xpath", '//*[@id="cdk-step-content-4-1"]/apex-date-rule/div/div/mat-datepicker-toggle[2]/button/span/svg');
    public Conttoparambutton: Button = new Button("id", "rule-dialog-cntinu-param-btn");
    public EnterPantextbox: TextBox = new TextBox("id", "exclude-form-pans-mat-input");


    //Edit Rule
    public Editrulecancelbutton: Button = new Button("id", "define-rule-pge-cancel-btn");

    constructor() {
        super("", "dashboard-header-slb-title", 20000, "id"); //wait till the SLB Search page is loaded
    }

    async navigateTo() {
        let UPHomepage = new UPHomePage();
        if (await UPHomepage.isOpen()) { await UPHomepage.SLBlinklabel.click(); }
        else { await UPHomepage.navigateTo(); await UPHomepage.isOpen(); await UPHomepage.SLBlinklabel.click(); }
    }
}

