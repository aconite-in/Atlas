"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Label_1 = require("../Core/WebElements/Label");
const JMSLoginPage_1 = require("./JMSLoginPage");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
class PortalPage extends BasePage_1.BasePage {
    constructor() {
        super("https://pr-jms.fisintegratedpayables.com/jms/portal/portal.aspx", "//*[@id='Left']/tbody/tr/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span", 20000, "xpath");
        //public RecentJobs: HtmlTable = new HtmlTable("", "", "#main_content_pneGridUsers_lbForward", undefined, "class");
        this.HomeLink = new LinkLabel_1.LinkLabel("partiallinktext", "Home");
        this.JobsLink = new LinkLabel_1.LinkLabel("partiallinktext", "Jobs");
        this.PayeeStatus = new Label_1.Label("xpath", "//*[@id='Left']/tbody/tr/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span");
        this.JobSummaryLink = new LinkLabel_1.LinkLabel("partiallinktext", "Job Summary");
        this.EventHistory = new Label_1.Label("xpath", "//*[@id='Left']/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span");
        this.OutputSummary = new Label_1.Label("xpath", "//*[@id='Right']/tbody/tr/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span");
        this.BillingMonthToDate = new Label_1.Label("xpath", "//*[@id='Right']/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span");
        this.QueuedOutbonedTransmissions = new LinkLabel_1.LinkLabel("partiallinktext", "Queued Outbound Transmissions");
    }
    async navigateTo() {
        let jms = new JMSLoginPage_1.JMSLoginPage();
        await jms.navigateTo();
        await jms.UserName.type("ImranJMS");
        await jms.proceedButton.click();
        await jms.Password.type("ImAm@005");
        await jms.proceedButton.click();
    }
}
exports.PortalPage = PortalPage;
//# sourceMappingURL=PortalPage.js.map