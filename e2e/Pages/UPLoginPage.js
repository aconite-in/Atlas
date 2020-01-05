"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const Label_1 = require("../Core/WebElements/Label");
const protractor_conf_1 = require("../protractor.conf");
class UPLoginPage extends BasePage_1.BasePage {
    constructor() {
        super("http://vlmazapexuiap02.fisdev.local:4200/apexdev", "User Login", 20000, "text"); //wait till the Login page is loaded
        this.UserName = new TextBox_1.TextBox("id", "loginName");
        this.Password = new TextBox_1.TextBox("model", "params.form.password");
        this.SigninBtn = new Button_1.Button("partialbuttontext", "Sign in");
        this.ErrorTopLevel = new Label_1.Label("classname", "error error-top-level");
    }
    navigateTo() {
        protractor_1.browser.get(protractor_conf_1.config.constants.UPSITbaseURL);
    }
}
exports.UPLoginPage = UPLoginPage;
//# sourceMappingURL=UPLoginPage.js.map