import { BasePage } from "../Core/BasePage";
import { config } from "../protractor.conf";
import { browser } from "protractor";
import { Button } from "../Core/Elements";

export class AtlasHomePage extends BasePage {

    newComponent: Button = new Button("xpath", "/html/body/app-root/div[2]/div[3]/div[1]/span");
    angularMaterial: Button = new Button("xpath", "/html/body/app-root/div[2]/div[3]/div[2]/span");

    constructor() {
        super('', '');
    }

    async navigateTo() {
        await browser.navigate().to(config.appURL);
    }
}