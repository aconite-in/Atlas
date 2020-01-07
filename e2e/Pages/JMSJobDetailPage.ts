import { BasePage } from "../Core/BasePage";

export class JMSJobDetailPage extends BasePage {

    constructor() {
        super("", "//span[@id='Label5']", 20000, "xpath");
    }

    public navigateTo(): void {
        throw new Error("Method not implemented.");
    }
}
