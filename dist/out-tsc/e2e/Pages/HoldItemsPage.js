"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
class HoldItemsPage extends BasePage_1.BasePage {
    constructor() {
        super("", "//*[@id='divItems']", 20000, "xpath");
        this.NextBtn = new Button_1.Button("id", "main_content_btnNext");
    }
    navigateTo() {
        throw new Error("Method not implemented.");
    }
}
exports.HoldItemsPage = HoldItemsPage;
//# sourceMappingURL=HoldItemsPage.js.map