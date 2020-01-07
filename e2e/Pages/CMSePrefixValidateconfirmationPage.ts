import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { HtmlTable } from "../Core/WebElements/HtmlTable";

export class CMSePrefixValidateconfirmationPage extends BasePage {

    public ValidateLinkProductbutton: Button = new Button("id", "LinkProductConfiguration");
    public UpdateProductbutton: Button = new Button("id", "UpdateProductConfiguration");
    public ViewProductbutton: Button = new Button("id", "ViewProductConfiguration");
    public InstititonTab: Button = new Button("id", "InstitutionMenuTab");

    constructor() {
        // super("", '//*[contains(text(),"Product ID → Prefix Validate / Link")]', undefined, "xpath"); //wait till the Prefix validate confirmation page is loaded
        super("", "Product ID → Prefix Validate / Link", undefined, "text");
    }

    public navigateTo(): void {
        // throw new Error("Method not implemented.");
    }
}
