import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { CMSeLoginPage } from "./CMSeLoginPage";
import { TextBox } from "../Core/WebElements/TextBox";
import { LinkLabel } from "../Core/WebElements/LinkLabel";

export class CMSeCardholderPage extends BasePage {

    public InstitutionTab: Button = new Button("id", "InstitutionMenuTab");
    public CardholderTab: Button = new Button("id", "CardholderMenuTab");
    public InstIdtextbox: TextBox = new TextBox("id", "inst");
    public CardNumberradio: Button = new Button("id", "rdCard");
    public CardNumbertextbox: TextBox = new TextBox("id", "maskedCardNumber");
    public Submitbutton: Button = new Button("id", "searchSubmit");
    public NegFilestatusMenu: Button = new Button("id", "NegFile");
    public logoutlink: LinkLabel = new LinkLabel("css", "#bannerLinkForm > a:nth-child(3)");

    constructor() {
        //super("", '//*[contains(text(),"Cardholder Search")]', undefined, "xpath"); //wait till the Cardholder Search page is loaded
        super("", "Cardholder Search", undefined, "text");
    }

    async navigateTo() {//Navigate till Cardholder Search page
        //throw new Error("Method not implemented.");
        let CMSeLogin = new CMSeLoginPage();
        await CMSeLogin.navigateTo();
        await CMSeLogin.UserName.type("W951gr5");
        await CMSeLogin.Password.type("Month$18");
        await CMSeLogin.ProceedBtn.click();
        await this.isOpen();
    }
}