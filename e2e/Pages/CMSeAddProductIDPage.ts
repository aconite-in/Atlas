import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { TextBox } from "../Core/WebElements/TextBox";
import { CMSeSearchProductIDPage } from "./CMSeSearchProductIDPage";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { Label } from "../Core/WebElements/Label";

export class CMSeAddProductIDPage extends BasePage {

    public Productdesctextbox: TextBox = new TextBox("id", "productDescription");
    public productIdtextbox: TextBox = new TextBox("id", "productId");
    public ContinueAddbutton: Button = new Button("id", "continueAdd");
    public CancelLink: LinkLabel = new LinkLabel("classname", "link");


    constructor() {
        //super("", '//*[contains(text(),"Add Product ID")]', undefined, "xpath"); //wait till the Add Product ID Page is loaded
        super("", "Add Product ID", undefined, "text");
    }

    async navigateTo() { //Navigate to Add Product ID Page
        //throw new Error("Method not implemented.");
    }
}