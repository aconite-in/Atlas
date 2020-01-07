import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";
import { TextBox } from "../Core/WebElements/TextBox";

export class CMSeIssIdconfPage extends BasePage {

    public AddIssuerIDbutton: Button = new Button("id", "AddIssuerId");
    public Effdatetextbox: TextBox = new TextBox("id", "EFFDATE");
    public Confirmationmessage: Label = new Label("classname", "success");
    public InstitutionTab: Button = new Button("id", "InstitutionMenuTab");
    public CardholderTab: Button = new Button("id", "CardholderMenuTab");

    constructor() {
        super("", "AddIssuerId", undefined, "id"); // wait till the Issuer ID configuration page is loaded
    }

    public navigateTo(): void {// Navigate to Issuer ID Configuration page
        // throw new Error("Method not implemented.");

    }
}
