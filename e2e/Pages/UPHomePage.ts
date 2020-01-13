import { browser, element, by } from "protractor"
import { BasePage } from "../Core/BasePage";
import { UPLoginPage } from "./UPLoginPage";
import { UPSwitchselectPage } from "./UPSwitchselectPage";
import { LinkLabel } from "../Core/WebElements/LinkLabel";
import { config } from "../protractor.conf";


export class UPHomePage extends BasePage {

    public TerminalSearchlinklabel: LinkLabel = new LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"Terminal Search")]');
    public TerminalGroupslinklabel: LinkLabel = new LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"Terminal Groups")]');
    public Reportslinklabel: LinkLabel = new LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"Requests")]');
    public SLBlinklabel: LinkLabel = new LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"SecurLOCK Block")]');
    public SLBCasemanagerlinklabel: LinkLabel = new LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"SecurLOCK Case Manager")]');

    constructor() {
        super("", "page-link-container", 20000, "classname"); //wait till the Home Search page is loaded
    }

    async navigateTo() {
        let UPLoginpge = new UPLoginPage();
        let UPswitchpge = new UPSwitchselectPage();
        browser.ignoreSynchronization = true; //to handle non-angular Login page
        await UPLoginpge.navigateTo();
        await UPLoginpge.isOpen(true);
        browser.sleep(500);
        await UPLoginpge.UserName.type(config.constants.UPSITuser);
        await UPLoginpge.Password.type(config.constants.UPSITpassword);
        await UPLoginpge.SigninBtn.click();
        browser.ignoreSynchronization = false; //to handle angular from this point
        await UPswitchpge.isOpen(true);
        await UPswitchpge.FISBButton.click();
    }
}

