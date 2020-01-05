import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";


export class UPSwitchselectPage extends BasePage {

    public FISBButton: Button = new Button("id", "card-switch-selection-FISB");
    public IFSAButton: Button = new Button("id", "card-switch-selection-IFSA");
    public ISPAButton: Button = new Button("id", "card-switch-selection-ISPA");
    public MCDPButton: Button = new Button("id", "card-switch-selection-MCDP");
    public BCFSButton: Button = new Button("id", "card-switch-selection-BCFS");
    public FISAButton: Button = new Button("id", "card-switch-selection-FISA");
    public CUSAButton: Button = new Button("id", "card-switch-selection-CUSA");
    public TDBKButton: Button = new Button("id", "card-switch-selection-TDBK");

    constructor() {
        super("", "card-switch-selection-FISB", 20000, "id"); //wait till the Switch selection page is loaded
    }

    navigateTo(): void {
    }
}

