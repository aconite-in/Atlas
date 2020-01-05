"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
class BatchDetailsPage extends BasePage_1.BasePage {
    constructor() {
        super("", "//*[@id='main_content_pnlSummaryGrid']", 70000, "xpath");
        this.NextBtn = new Button_1.Button("id", "main_content_btnNext");
    }
    navigateTo() {
        throw new Error("Method not implemented.");
    }
}
exports.BatchDetailsPage = BatchDetailsPage;
//# sourceMappingURL=BatchDetailsPage.js.map