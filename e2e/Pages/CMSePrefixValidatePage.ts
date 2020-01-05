import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { HtmlTable } from "../Core/WebElements/HtmlTable";

export class CMSePrefixValidatePage extends BasePage {

    public ValidateLinkProductbutton: Button = new Button("id", "LinkProductConfiguration");
    public UpdateProductbutton: Button = new Button("id", "UpdateProductConfiguration");
    public ViewProductbutton: Button = new Button("id", "ViewProductConfiguration");
    public Submitbutton: Button = new Button("id", "submitButton");

    constructor() {
        //super("", '//*[contains(text(),"Click SUBMIT to LINK the Product and Prefix")]', undefined, "xpath"); //wait till the Prefix validate page is loaded
        super("", "Click SUBMIT to LINK the Product and Prefix", undefined, "text");
    }

    navigateTo(): void {
        //throw new Error("Method not implemented.");
    }
}