import { BasePage } from "../Core/BasePage";
import { HtmlTable } from "../Core/WebElements/HtmlTable";
import { LinkLabel } from "../Core/WebElements/LinkLabel";


export class HomePage extends BasePage {

    public LogoutLink: LinkLabel = new LinkLabel("css", "#mainContainer > table > tbody > tr > td:nth-child(5) > a");
    public JobsMenuLink: LinkLabel = new LinkLabel("id", "parent___Menu1_menuNode");
    public RecentJobs: HtmlTable = new HtmlTable("id", "main_content_grdRecentJobs");

    constructor() {
        super("", "//*[@id='main_content_lblLoggedInUser']", 20000, "xpath");
    }

    navigateTo(): void {
        throw new Error("Method not implemented.");
    }

}