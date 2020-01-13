import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { HtmlTable } from "../Core/WebElements/HtmlTable";

export class CMSePrefixlistPage extends BasePage {

    public ValidateLinkProductbutton: Button = new Button("id", "LinkProductConfiguration");
    public UpdateProductbutton: Button = new Button("id", "UpdateProductConfiguration");
    public ViewProductbutton: Button = new Button("id", "ViewProductConfiguration");
    public PrefixlistTable: HtmlTable = new HtmlTable("css", "#main-column > div > table", "#nextButton", "#previousButton");


    constructor() {
        //super("", '//*[contains(text(),"Please select a Prefix.")]', undefined, "xpath"); //wait till the Prefix list page is loaded
        super("", "Please select a Prefix.", undefined, "text");
    }

    navigateTo(): void {
        //throw new Error("Method not implemented.");
    }
}