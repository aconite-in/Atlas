"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const protractor_1 = require("protractor");
const Elements_1 = require("../Core/Elements");
class GoogleHomePage extends BasePage_1.BasePage {
    constructor() {
        super('', '//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[1]');
        this.SearchTextBox = new Elements_1.TextBox("xpath", "//*[@id='tsf']/div[2]/div[1]/div[1]/div[1]/div/div[2]/input");
        this.SearchButton = new Elements_1.Button("xpath", `//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[1]`);
    }
    async navigateTo() {
        console.log("Here you go");
        await protractor_1.browser.get("https://www.google.com/");
    }
}
exports.GoogleHomePage = GoogleHomePage;
//# sourceMappingURL=GoogleHomePage.js.map