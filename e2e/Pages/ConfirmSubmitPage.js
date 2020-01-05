"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Label_1 = require("../Core/WebElements/Label");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
class ConfirmSubmitPage extends BasePage_1.BasePage {
    constructor() {
        super("", "//*[@id='main_content_spanSubmit']", 20000, "xpath");
        this.JobIdLabel = new Label_1.Label("id", "main_content_hrefOnlySubmit");
        this.LogoutLink = new LinkLabel_1.LinkLabel("css", "#mainContainer > table > tbody > tr > td:nth-child(5) > a");
    }
    navigateTo() {
        throw new Error("Method not implemented.");
    }
}
exports.ConfirmSubmitPage = ConfirmSubmitPage;
//# sourceMappingURL=ConfirmSubmitPage.js.map