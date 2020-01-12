"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const Calendar_1 = require("../Core/WebElements/Calendar");
const TextBox_1 = require("../Core/WebElements/TextBox");
const UPHomePage_1 = require("./UPHomePage");
const DataTable_1 = require("../Core/WebElements/DataTable");
class UPSLBpage extends BasePage_1.BasePage {
    constructor() {
        super("", "dashboard-header-slb-title", 20000, "id"); //wait till the SLB Search page is loaded
        this.Newrulebutton = new Button_1.Button("id", "button-dashboard-page-open-dialog");
        this.Declinetxnreportbutton = new Button_1.Button("id", "button-declined-transaction-report");
        this.Recentactivitybutton = new Button_1.Button("id", "button-rule-audit-report");
        this.SLBSearchresultsTable = new DataTable_1.DataTable("css", "#fraud-rules-data-table-content-wrapper", "#fraud-rules-data-table > div > datatable-footer > div > datatable-pager > ul > li:nth-child(8) > a > i", "#fraud-rules-data-table > div > datatable-footer > div > datatable-pager > ul > li:nth-child(2) > a > i");
        //Create Rule window
        this.Blocklistarrowbutton = new Button_1.Button("css", "apex-bin-pan-selection mat-form-field");
        this.Binsoptionlist = new Button_1.Button("id", "stepper-bin-pan-chose-bin-1");
        this.Panoptionlist = new Button_1.Button("id", "stepper-bin-pan-chose-bin-2");
        this.Pantextbox = new TextBox_1.TextBox("id", "stepper-bin-pan-pans-input");
        this.Choosebinsarrowbutton = new Button_1.Button("xpath", '//*[@id="visual-select-select-0"]/div/div[2]/div');
        this.selectallBins = new Button_1.Button("id", "bins-option-0");
        this.Createrulewindow = new Button_1.Button("xpath", '//*[@id="rule-dialog-create-rule-block"]');
        this.Nextbutton = new Button_1.Button("id", "rule-dialog-nxt-btn");
        this.Cancelbutton = new Button_1.Button("partialbuttontext", "Cancel");
        this.Startcalendar = new Calendar_1.Calendar("xpath", '//*[@id="cdk-step-content-4-1"]/apex-date-rule/div/div/mat-datepicker-toggle[1]/button/span/svg');
        this.Endcalendar = new Calendar_1.Calendar("xpath", '//*[@id="cdk-step-content-4-1"]/apex-date-rule/div/div/mat-datepicker-toggle[2]/button/span/svg');
        this.Conttoparambutton = new Button_1.Button("id", "rule-dialog-cntinu-param-btn");
        this.EnterPantextbox = new TextBox_1.TextBox("id", "exclude-form-pans-mat-input");
        //Edit Rule
        this.Editrulecancelbutton = new Button_1.Button("id", "define-rule-pge-cancel-btn");
    }
    async navigateTo() {
        let UPHomepage = new UPHomePage_1.UPHomePage();
        if (await UPHomepage.isOpen()) {
            await UPHomepage.SLBlinklabel.click();
        }
        else {
            await UPHomepage.navigateTo();
            await UPHomepage.isOpen();
            await UPHomepage.SLBlinklabel.click();
        }
    }
}
exports.UPSLBpage = UPSLBpage;
//# sourceMappingURL=UPSLBpage.js.map