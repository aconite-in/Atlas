import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";

export class CMSeProductInformationPage extends BasePage {

    public LimitsMenu: Button = new Button("id", "LMT");
    public PINmainparametersMenu: Button = new Button("id", "PIN");
    public CardprogramsMenu: Button = new Button("id", "CDP");
    public ServicechargesMenu: Button = new Button("id", "SVC");
    public IssueridMenu: Button = new Button("id", "CSK");
    public IssueridadminMenu: Button = new Button("id", "CSA");
    public InstantissueMenu: Button = new Button("id", "IIS");
    public ContinueLink: Button = new Button("classname", "#main-column > div > div.product-navigation > a:nth-child(3)");
    public ProductIDlabel: Label = new Label("xpath", '//*[@id="product-information"]/span[2]');

    constructor() {
        // super("", '//*[contains(text(),"Image Store Parameters:")]', undefined, "xpath"); //wait till the Product ID information page is loaded
        super("", "Image Store Parameters:", undefined, "text");
    }

    public navigateTo(): void {
        // throw new Error("Method not implemented.");
    }
}
