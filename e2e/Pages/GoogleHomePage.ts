import { BasePage } from "../Core/BasePage";
import { browser } from "protractor";
import { TextBox, Button } from "../Core/Elements";

export class GoogleHomePage extends BasePage {

    SearchTextBox: TextBox = new TextBox("xpath", "//*[@id='tsf']/div[2]/div[1]/div[1]/div[1]/div/div[2]/input");
    SearchButton: Button = new Button("xpath", `//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[1]`);

    constructor() {
        super('', '//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[1]');
    }

    async navigateTo() {
        console.log("Here you go");
        await browser.get("https://www.google.com/");
    }
}