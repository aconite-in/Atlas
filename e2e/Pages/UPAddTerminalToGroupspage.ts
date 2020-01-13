import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";
import { HtmlTable } from "../Core/WebElements/HtmlTable";



export class UPAddTerminalToGroupspage extends BasePage {

    public Searchbutton: Button = new Button("classname", "icon-search undefined medium icon");
    public SearchresultsTable: HtmlTable = new HtmlTable("id", "select-group-terminals-data-table-content-wrapper");
    public Searchfiltertextbox: TextBox = new TextBox("id", "select-group-terminals-keyword-search-results");
    public Terminalcheckbox: Button = new Button("classname", "datatable-checkbox ng-star-inserted");
    public AddselectedterminalButton: Button = new Button("partialbuttontext", ' Add selected terminals');

    constructor() {
        super("", "group-add-terminal-search-institutionId", 20000, "id"); //wait till the Add Terminal to Group page is loaded
    }

    navigateTo(): void {

    }
}
