import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { TextBox } from "../Core/WebElements/TextBox";
import { CMSeProductIDListPage } from "./CMSeProductIDListPage";

export class CMSeIssIdAddPage extends BasePage {

    public IssIDtextbox: TextBox = new TextBox("id", "issuerId");
    public Desctextbox: TextBox = new TextBox("id", "description");
    public Effdatetextbox: TextBox = new TextBox("id", "effectiveDate");
    public Characteristicstextbox: TextBox = new TextBox("id", "characteristic");
    public IsChipCheckbox: Button = new Button("id", "attribute");
    public Servicecodetextbox: TextBox = new TextBox("id", "serviceCode");
    public PrefixdefaultCheckbox: Button = new Button("id", "prefixDefault");
    public ReissuedefaultCheckbox: Button = new Button("id", "reissueDefault");
    public ReplacementdefaultCheckbox: Button = new Button("id", "replacementDefault");
    public CompromisedefaultCheckbox: Button = new Button("id", "compromisedDefault");
    public Submitbutton: Button = new Button("classname", "submit");

    constructor() {
        super("", "submit", undefined, "classname"); // wait till the Issuer ID add page is loaded
    }

    public navigateTo(): void {// Navigate to Issuer ID Configuration page
        // throw new Error("Method not implemented.");

    }
}
