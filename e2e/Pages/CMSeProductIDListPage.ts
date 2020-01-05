import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { CMSeInstitutionPage } from "./CMSeInstitutionPage";
import { HtmlTable } from "../Core/WebElements/HtmlTable";

export class CMSeProductIDListPage extends BasePage {

    public ProductMenuTab: Button = new Button("id", "Product");
    public ProductlistTable: HtmlTable = new HtmlTable("css", "#product-list", "#nextButton", "#previousButton");

    constructor() {
        //super("", '//*[contains(text(),"Please select a Product by clicking on the Product ID.")]', undefined, "xpath"); //wait till the Product ID list Page is loaded
        super("", "Please select a Product by clicking on the Product ID.", undefined, "text");
    }

    async navigateTo() { //Navigate till Product List page
        //throw new Error("Method not implemented.");
        let InstPage = new CMSeInstitutionPage();
        await InstPage.navigateTo();
        await InstPage.InstitutionIDtextbox.type("00547");
        await InstPage.IssuerIdConfigurationMenu.click();
        await InstPage.ProductIdIssuerIdConfigurationViewMenu.click();
        await this.isOpen();
    }
}