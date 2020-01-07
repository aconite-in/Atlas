import { BasePage } from "../Core/BasePage";
import { Label } from "../Core/WebElements/Label";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { JMSLoginPage } from "./JMSLoginPage";

export class PortalPage extends BasePage {

    // public RecentJobs: HtmlTable = new HtmlTable("", "", "#main_content_pneGridUsers_lbForward", undefined, "class");

    public HomeLink: LinkLabel = new LinkLabel("partiallinktext", "Home");
    public JobsLink: LinkLabel = new LinkLabel("partiallinktext", "Jobs");
    public PayeeStatus: Label = new Label("xpath", "//*[@id='Left']/tbody/tr/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span");
    public JobSummaryLink: LinkLabel = new LinkLabel("partiallinktext", "Job Summary");
    public EventHistory: Label = new Label("xpath", "//*[@id='Left']/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span");
    public OutputSummary: Label = new Label("xpath", "//*[@id='Right']/tbody/tr/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span");
    public BillingMonthToDate: Label = new Label("xpath", "//*[@id='Right']/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span");
    public QueuedOutbonedTransmissions: LinkLabel = new LinkLabel("partiallinktext", "Queued Outbound Transmissions");

    constructor() {
        super("https://pr-jms.fisintegratedpayables.com/jms/portal/portal.aspx", "//*[@id='Left']/tbody/tr/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/span", 20000, "xpath");
    }

    public async navigateTo() {
        const jms = new JMSLoginPage();
        await jms.navigateTo();
        await jms.UserName.type("ImranJMS");
        await jms.proceedButton.click();
        await jms.Password.type("ImAm@005");
        await jms.proceedButton.click();
    }

}
