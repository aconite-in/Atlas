"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const Label_1 = require("../Core/WebElements/Label");
class JMSLoginPage extends BasePage_1.BasePage {
    constructor() {
        super("https://pr-jms.fisintegratedpayables.com/jms/login.aspx", "//span[@id='AppName']", 20000, "xpath");
        this.UserName = new TextBox_1.TextBox("id", "txtUsername");
        this.Password = new TextBox_1.TextBox("id", "txtPassword");
        this.proceedButton = new Button_1.Button("id", "CustomImageButtonControl1");
        this.ErrorLabel = new Label_1.Label("id", "lblError");
        this.LoggedInUserName = new Button_1.Button("id", "btnContinue");
        //super("http://idp-apex-ui-dev.sdlocpapp.fisdev.local/IdPRI-4.15.0/apexdev/", "")
    }
    navigateTo() {
        protractor_1.browser.get(this.pageURL);
    }
}
exports.JMSLoginPage = JMSLoginPage;
//# sourceMappingURL=JMSLoginPage.js.map