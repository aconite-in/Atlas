import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { TextBox } from "../Core/WebElements/TextBox";
import { Label } from "../Core/WebElements/Label";

export class CMSeIssIdconfPage extends BasePage {

    public AddIssuerIDbutton: Button = new Button("id", "AddIssuerId");
    public Effdatetextbox: TextBox = new TextBox("id", "EFFDATE");
    public Confirmationmessage: Label = new Label("classname", "success");
    public InstitutionTab: Button = new Button("id", "InstitutionMenuTab");
    public CardholderTab: Button = new Button("id", "CardholderMenuTab");

    constructor() {
        super("", 'AddIssuerId', undefined, "id"); //wait till the Issuer ID configuration page is loaded
    }

    navigateTo(): void {//Navigate to Issuer ID Configuration page
        //throw new Error("Method not implemented.");

    }
}