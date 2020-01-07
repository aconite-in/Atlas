import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { TextBox } from "../Core/WebElements/TextBox";
import { CMSeProductIDListPage } from "./CMSeProductIDListPage";

export class CMSeSearchProductIDPage extends BasePage {

    public InstitutionIDtextbox: TextBox = new TextBox("id", "inst");
    public productIdtextbox: TextBox = new TextBox("id", "productId");
    public searchSubmitbutton: Button = new Button("id", "searchSubmit");
    public viewAllSubmitbutton: Button = new Button("id", "viewAllSubmit");
    public addProductIdSubmitlink: LinkLabel = new LinkLabel("id", "addProductIdSubmit");

    constructor() {
        // super("", '//*[contains(text(),"Product ID Search")]', undefined, "xpath"); //wait till the Product ID Search Page is loaded
        super("", "Product ID Search", undefined, "text");
    }

    public async navigateTo() { // Navigate to Product ID Search page
        // throw new Error("Method not implemented.");
    }
}
