import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { Calendar } from "../Core/WebElements/Calendar";
import { DataTable } from "../Core/WebElements/DataTable";
import { HtmlTable } from "../Core/WebElements/HtmlTable";
import { Label } from "../Core/WebElements/Label";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { TextBox } from "../Core/WebElements/TextBox";

export class UPTransactionsearchpage extends BasePage {

    public Startcalendar: Calendar = new Calendar("xpath", '(//span[@class="mat-button-wrapper"][1])[1]');
    public Endcalendar: Calendar = new Calendar("xpath", '(//span[@class="mat-button-wrapper"][1])[2]');
    public Searchbutton: Button = new Button("id", "button-date-search-confirm");

    public Keywordsearchtextbox: TextBox = new TextBox("id", "transactions-keyword-search-results");
    public Transactionsearchresultstable: DataTable = new DataTable("id", "transactions-data-table-table-view");
    public Transactionslabel: Label = new Label("text", "Transactions");

    public Reqamountlabel: Label = new Label("id", "field-transaction-detail-amount");
    public trandetailreconlabel: Label = new Label("id", "field-transaction-detail-recon");
    public trandetaildesclabel: Label = new Label("id", "field-transaction-detail-desc");
    public trandetailcodelabel: Label = new Label("id", "field-transaction-detail-code");
    public tranauthbylabel: Label = new Label("id", "field-transaction-detail-auth");
    public trandetailcvvdesclabel: Label = new Label("id", "field-transaction-detail-cvv-desc");
    public trandetailtrandesclabel: Label = new Label("id", "field-transaction-detail-transaction-type");
    public trandetailresultlabel: Label = new Label("id", "field-transaction-detail-result");
    public trandetailacqbanklabel: Label = new Label("id", "field-transaction-detail-acquirer-bank");
    public trandetailacqproclabel: Label = new Label("id", "field-transaction-detail-acquirer-processor");
    public trandetailacqbusslabel: Label = new Label("id", "field-transaction-detail-acquirer-business");
    public trandetailacqentlabel: Label = new Label("id", "field-transaction-detail-acquirer-entity");
    public trandetailissproclabel: Label = new Label("id", "field-transaction-detail-issuer-processor");
    public trandetailacqinstlabel: Label = new Label("id", "field-transaction-detail-acquirer-inst");
    public trandetailmcclabel: Label = new Label("id", "field-transaction-detail-category-code");
    public trandetailissnwlabel: Label = new Label("id", "field-transaction-detail-issuer-network");

    public resetbutton: Button = new Button("id", "button-date-search-reset");
    public exportbutton: Button = new Button("id", "transactions-data-table-header-export");
    public exportconfirmbutton: Button = new Button("text", "Confirm");
    public exportcontbutton: Button = new Button("id", "button-export-continue");
    public successdialog: Label = new Label("xpath", '//*[@id="successDialogContent"]');
    public closetransactiondetailbutton: Button = new Button("xpath", '//*[@id="button-transaction-detail-close"]/span/ox-icon');
    public returntodashboardbutton: Button = new Button("id", "apex-header-icon");

    constructor() {
        super("", "Search Criteria", 20000, "text"); // wait till the Transaction Search page is loaded
    }

    public navigateTo(): void {

    }
}
