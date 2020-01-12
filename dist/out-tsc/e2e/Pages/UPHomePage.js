"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("../Core/BasePage");
const UPLoginPage_1 = require("./UPLoginPage");
const UPSwitchselectPage_1 = require("./UPSwitchselectPage");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
const protractor_conf_1 = require("../protractor.conf");
class UPHomePage extends BasePage_1.BasePage {
    constructor() {
        super("", "page-link-container", 20000, "classname"); //wait till the Home Search page is loaded
        this.TerminalSearchlinklabel = new LinkLabel_1.LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"Terminal Search")]');
        this.TerminalGroupslinklabel = new LinkLabel_1.LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"Terminal Groups")]');
        this.Reportslinklabel = new LinkLabel_1.LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"Requests")]');
        this.SLBlinklabel = new LinkLabel_1.LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"SecurLOCK Block")]');
        this.SLBCasemanagerlinklabel = new LinkLabel_1.LinkLabel("xpath", '//*[contains(@class,"page-link-container")] //*[contains(text(),"SecurLOCK Case Manager")]');
    }
    async navigateTo() {
        let UPLoginpge = new UPLoginPage_1.UPLoginPage();
        let UPswitchpge = new UPSwitchselectPage_1.UPSwitchselectPage();
        protractor_1.browser.ignoreSynchronization = true; //to handle non-angular Login page
        await UPLoginpge.navigateTo();
        await UPLoginpge.isOpen(true);
        protractor_1.browser.sleep(500);
        await UPLoginpge.UserName.type(protractor_conf_1.config.constants.UPSITuser);
        await UPLoginpge.Password.type(protractor_conf_1.config.constants.UPSITpassword);
        await UPLoginpge.SigninBtn.click();
        protractor_1.browser.ignoreSynchronization = false; //to handle angular from this point
        await UPswitchpge.isOpen(true);
        await UPswitchpge.FISBButton.click();
    }
}
exports.UPHomePage = UPHomePage;
//# sourceMappingURL=UPHomePage.js.map