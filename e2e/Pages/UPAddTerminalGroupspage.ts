import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";

export class UPAddTerminalGroupspage extends BasePage {

    public Terminalgrpnametextbox: TextBox = new TextBox("id", 'input-terminal-group-dialog-name');
    public Terminalgrpdesctextbox: TextBox = new TextBox("id", 'input-terminal-group-dialog-desc');
    public Resetbutton: Button = new Button("id", "button-terminal-group-dialog-reset");
    public Savebutton: Button = new Button("id", "button-terminal-group-dialog-save");
    public returntodashboardbutton: Button = new Button("id", "apex-header-icon");

    constructor() {
        super("", "Add Terminal Group", 20000, "text"); //wait till the Add Terminal Groups page is loaded
    }

    navigateTo(): void {

    }
}

