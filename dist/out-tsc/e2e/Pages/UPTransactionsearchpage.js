"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const Label_1 = require("../Core/WebElements/Label");
const DataTable_1 = require("../Core/WebElements/DataTable");
const Calendar_1 = require("../Core/WebElements/Calendar");
class UPTransactionsearchpage extends BasePage_1.BasePage {
    constructor() {
        super("", "Search Criteria", 20000, "text"); //wait till the Transaction Search page is loaded
        this.Startcalendar = new Calendar_1.Calendar("xpath", '(//span[@class="mat-button-wrapper"][1])[1]');
        this.Endcalendar = new Calendar_1.Calendar("xpath", '(//span[@class="mat-button-wrapper"][1])[2]');
        this.Searchbutton = new Button_1.Button("id", "button-date-search-confirm");
        this.Keywordsearchtextbox = new TextBox_1.TextBox("id", "transactions-keyword-search-results");
        this.Transactionsearchresultstable = new DataTable_1.DataTable("id", "transactions-data-table-table-view");
        this.Transactionslabel = new Label_1.Label("text", "Transactions");
        this.Reqamountlabel = new Label_1.Label("id", "field-transaction-detail-amount");
        this.trandetailreconlabel = new Label_1.Label("id", "field-transaction-detail-recon");
        this.trandetaildesclabel = new Label_1.Label("id", "field-transaction-detail-desc");
        this.trandetailcodelabel = new Label_1.Label("id", "field-transaction-detail-code");
        this.tranauthbylabel = new Label_1.Label("id", "field-transaction-detail-auth");
        this.trandetailcvvdesclabel = new Label_1.Label("id", "field-transaction-detail-cvv-desc");
        this.trandetailtrandesclabel = new Label_1.Label("id", "field-transaction-detail-transaction-type");
        this.trandetailresultlabel = new Label_1.Label("id", "field-transaction-detail-result");
        this.trandetailacqbanklabel = new Label_1.Label("id", "field-transaction-detail-acquirer-bank");
        this.trandetailacqproclabel = new Label_1.Label("id", "field-transaction-detail-acquirer-processor");
        this.trandetailacqbusslabel = new Label_1.Label("id", "field-transaction-detail-acquirer-business");
        this.trandetailacqentlabel = new Label_1.Label("id", "field-transaction-detail-acquirer-entity");
        this.trandetailissproclabel = new Label_1.Label("id", "field-transaction-detail-issuer-processor");
        this.trandetailacqinstlabel = new Label_1.Label("id", "field-transaction-detail-acquirer-inst");
        this.trandetailmcclabel = new Label_1.Label("id", "field-transaction-detail-category-code");
        this.trandetailissnwlabel = new Label_1.Label("id", "field-transaction-detail-issuer-network");
        this.resetbutton = new Button_1.Button("id", "button-date-search-reset");
        this.exportbutton = new Button_1.Button("id", "transactions-data-table-header-export");
        this.exportconfirmbutton = new Button_1.Button("text", "Confirm");
        this.exportcontbutton = new Button_1.Button("id", "button-export-continue");
        this.successdialog = new Label_1.Label("xpath", '//*[@id="successDialogContent"]');
        this.closetransactiondetailbutton = new Button_1.Button("xpath", '//*[@id="button-transaction-detail-close"]/span/ox-icon');
        this.returntodashboardbutton = new Button_1.Button("id", "apex-header-icon");
    }
    navigateTo() {
    }
}
exports.UPTransactionsearchpage = UPTransactionsearchpage;
//# sourceMappingURL=UPTransactionsearchpage.js.map