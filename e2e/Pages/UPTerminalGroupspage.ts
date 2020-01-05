import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";
import { HtmlTable } from "../Core/WebElements/HtmlTable";
import { ComboBox } from "../Core/WebElements/ComboBox";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { UPHomePage } from "./UPHomePage";


export class UPTerminalGroupspage extends BasePage {

    public InstIDCombobox: ComboBox = new ComboBox("id", 'input-groups-criteria-instId');
    public Newgroupbutton: Button = new Button("id", "button-terminal-group-add");
    public Filtergrouptextbox: TextBox = new TextBox("id", "input-groups-criteria-filter-groups");
    public Successmessage: Label = new Label("id", "successDialogIcon");
    public DeleteGroupbuttonicon: Button = new Button("id", "enableDeleteGroups");
    public Groupassociatedcheckbox: Button = new Button("css", "apex-terminal-group-list apex-groups-card mat-checkbox");
    public DeleteGroupbutton: Button = new Button("id", "deleteGroupsButton");
    public removeGroupbutton: Button = new Button("css", "apex-remove-groups-dialog [ox-button-primary]");
    public returntodashboardbutton: Button = new Button("id", "apex-header-icon");
    public Terminalmatcardrecord: Button = new Button("css", "apex-terminal-group-list mat-card");
    public AddTerminallink: Label = new Label("xpath", '//*[contains(@id,"button-terminal-groups-title")]/mat-card/mat-card-content/div[2]/p/span/a');

    constructor() {
        super("", "Terminal Groups", 20000, "text"); //wait till the Terminal Groups page is loaded
    }

    async navigateTo() {
        let UPHomepage = new UPHomePage();
        if (await UPHomepage.isOpen()) { await UPHomepage.TerminalGroupslinklabel.click(); }
        else { await UPHomepage.navigateTo(); await UPHomepage.isOpen(); await UPHomepage.TerminalGroupslinklabel.click(); }

    }

}

