import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { TextBox } from "../Core/WebElements/TextBox";
import { CMSeCardholderPage } from "./CMSeCardholderPage";

export class CMSeInstitutionPage extends BasePage {

    public InstitutionIDtextbox: TextBox = new TextBox("id", "inst");
    public IssuerIdConfigurationMenu: Button = new Button("id", "IssuerIdConfiguration");
    public ProductIdIssuerIdConfigurationViewMenu: Button = new Button("id", "ProductIdIssuerIdConfigurationView");
    public CardholderTab: Button = new Button("id", "CardholderMenuTab");

    constructor() {
        super("", "inst", undefined, "id"); // wait till the Institution Page is loaded
    }

    public async navigateTo() { // Navigate till Instititon ID Page
        // throw new Error("Method not implemented.");
        const CMSeCHpage = new CMSeCardholderPage();
        await CMSeCHpage.navigateTo();
        await CMSeCHpage.InstitutionTab.click();
        await this.isOpen();
    }
}
