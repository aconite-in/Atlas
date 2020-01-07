import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";

export class HoldItemsConfirmationPage extends BasePage {

    public SubmitBtn: Button = new Button("id", "main_content_btnSubmit");

    constructor() {
        super("", "//*[@id='main_content_lblInfo']", 20000, "xpath");
    }

    public navigateTo(): void {
        throw new Error("Method not implemented.");
    }

}
