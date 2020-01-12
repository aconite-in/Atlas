"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
class JMSJobDetailPage extends BasePage_1.BasePage {
    constructor() {
        super("", "//span[@id='Label5']", 20000, "xpath");
    }
    navigateTo() {
        throw new Error("Method not implemented.");
    }
}
exports.JMSJobDetailPage = JMSJobDetailPage;
//# sourceMappingURL=JMSJobDetailPage.js.map