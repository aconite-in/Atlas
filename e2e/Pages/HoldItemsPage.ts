import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";

export class HoldItemsPage extends BasePage {

    public NextBtn: Button = new Button("id", "main_content_btnNext");

    constructor() {
        super("", "//*[@id='divItems']", 20000, "xpath");
    }

    navigateTo(): void {
        throw new Error("Method not implemented.");
    }

}