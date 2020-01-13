import { BasePage } from "../Core/BasePage";
import { Label } from "../Core/WebElements/Label";
import { LinkLabel } from "../Core/WebElements/LinkLabel";

export class ConfirmSubmitPage extends BasePage {

    public JobIdLabel: Label = new Label("id", "main_content_hrefOnlySubmit");
    public LogoutLink: LinkLabel = new LinkLabel("css", "#mainContainer > table > tbody > tr > td:nth-child(5) > a");

    constructor() {
        super("", "//*[@id='main_content_spanSubmit']", 20000, "xpath");
    }

    navigateTo(): void {
        throw new Error("Method not implemented.");
    }

}