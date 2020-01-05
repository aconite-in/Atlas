"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const HtmlTable_1 = require("../Core/WebElements/HtmlTable");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
class HomePage extends BasePage_1.BasePage {
    constructor() {
        super("", "//*[@id='main_content_lblLoggedInUser']", 20000, "xpath");
        this.LogoutLink = new LinkLabel_1.LinkLabel("css", "#mainContainer > table > tbody > tr > td:nth-child(5) > a");
        this.JobsMenuLink = new LinkLabel_1.LinkLabel("id", "parent___Menu1_menuNode");
        this.RecentJobs = new HtmlTable_1.HtmlTable("id", "main_content_grdRecentJobs");
    }
    navigateTo() {
        throw new Error("Method not implemented.");
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map