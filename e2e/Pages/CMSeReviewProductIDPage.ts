import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";

export class CMSeReviewProductIDPage extends BasePage {

    public Submitbutton: Button = new Button("xpath", '//*[@id="viewSubmitForm"]/div/input');

    constructor() {
        // super("", '//*[contains(text(),"Review Product ID")]', undefined, "xpath"); //wait till the Review Product ID page is loaded
        super("", "Review Product ID", undefined, "text");
    }

    public navigateTo(): void {
        // throw new Error("Method not implemented.");
    }
}
