"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const Label_1 = require("../Core/WebElements/Label");
class LoginPage extends BasePage_1.BasePage {
    constructor() {
        super("https://pr.fisintegratedpayables.com/fis/CustomerLogin.aspx", "//*[@id='_Input']", 20000, "xpath");
        this.UserName = new TextBox_1.TextBox("id", "_Input");
        this.Password = new TextBox_1.TextBox("id", "main_PasswordTextBox");
        this.ProceedBtn = new Button_1.Button("id", "main_LoginButton");
        this.ConcurrentLoginYesBtn = new Button_1.Button("id", "main_btnContinueConcurrentLogin");
        this.ErrorLabel = new Label_1.Label("id", "LoginError");
    }
    navigateTo() {
        protractor_1.browser.get(this.pageURL);
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map