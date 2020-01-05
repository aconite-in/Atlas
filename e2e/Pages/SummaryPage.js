"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
const TextBox_1 = require("../Core/WebElements/TextBox");
const ComboBox_1 = require("../Core/WebElements/ComboBox");
class SummaryPage extends BasePage_1.BasePage {
    constructor() {
        super("https://pr-jms.fisintegratedpayables.com/jms/job/summary.aspx", "//*[@id='dgActiveJobs']", 20000, "xpath");
        this.JobsLink = new LinkLabel_1.LinkLabel("xpath", "//*[@id='Header1_MainMenuToolbar']/tbody/tr/td/table/tbody/tr/td[5]/font/b/a/font");
        this.Status = new ComboBox_1.ComboBox("id", "listJobFilter");
        this.Date = new ComboBox_1.ComboBox("id", "listDateFilter");
        this.Databases = new ComboBox_1.ComboBox("id", "listATACFilter");
        this.OutputType = new ComboBox_1.ComboBox("id", "listOutputType");
        this.JobText = new TextBox_1.TextBox("id", "txtJobID");
        this.GoButton = new Button_1.Button("id", "btnJobGo");
    }
    navigateTo() {
    }
}
exports.SummaryPage = SummaryPage;
//# sourceMappingURL=SummaryPage.js.map