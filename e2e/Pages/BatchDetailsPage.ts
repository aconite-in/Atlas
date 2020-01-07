import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";

export class BatchDetailsPage extends BasePage {

    public NextBtn: Button = new Button("id", "main_content_btnNext");

    constructor() {
        super("", "//*[@id='main_content_pnlSummaryGrid']", 70000, "xpath");
    }

    public navigateTo(): void {
        throw new Error("Method not implemented.");
    }

}
