import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";

export class CMSeProductDetailPage extends BasePage {

    public ValidateLinkProductbutton: Button = new Button("id", "LinkProductConfiguration");
    public UpdateProductbutton: Button = new Button("id", "UpdateProductConfiguration");
    public ViewProductbutton: Button = new Button("id", "ViewProductConfiguration");

    constructor() {
        // super("", '//*[contains(text(),"Product ID Detail")]', undefined, "xpath"); //wait till the Product Detail page is loaded
        super("", "Product ID Detail", undefined, "text");
    }

    public navigateTo(): void {
        // throw new Error("Method not implemented.");
    }
}
