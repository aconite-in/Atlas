import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { TextBox } from "../Core/WebElements/TextBox";
import { ComboBox } from "../Core/WebElements/ComboBox";

export class SummaryPage extends BasePage {

    public JobsLink: LinkLabel = new LinkLabel("xpath", "//*[@id='Header1_MainMenuToolbar']/tbody/tr/td/table/tbody/tr/td[5]/font/b/a/font");
    public Status: ComboBox = new ComboBox("id", "listJobFilter");
    public Date: ComboBox = new ComboBox("id", "listDateFilter");
    public Databases: ComboBox = new ComboBox("id", "listATACFilter");
    public OutputType: ComboBox = new ComboBox("id", "listOutputType");
    public JobText: TextBox = new TextBox("id", "txtJobID");
    public GoButton: Button = new Button("id", "btnJobGo");

    constructor() {
        super("https://pr-jms.fisintegratedpayables.com/jms/job/summary.aspx", "//*[@id='dgActiveJobs']", 20000, "xpath");
    }

    navigateTo() {
    }

}