"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
class HoldItemsConfirmationPage extends BasePage_1.BasePage {
    constructor() {
        super("", "//*[@id='main_content_lblInfo']", 20000, "xpath");
        this.SubmitBtn = new Button_1.Button("id", "main_content_btnSubmit");
    }
    navigateTo() {
        throw new Error("Method not implemented.");
    }
}
exports.HoldItemsConfirmationPage = HoldItemsConfirmationPage;
//# sourceMappingURL=HoldItemsConfirmationPage.js.map