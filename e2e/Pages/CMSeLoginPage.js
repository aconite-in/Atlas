"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const Label_1 = require("../Core/WebElements/Label");
class CMSeLoginPage extends BasePage_1.BasePage {
    constructor() {
        //super("http://vlcapweb03.fisdev.local:12143/main/cmse/Home", '//*[contains(text(),"Security Statement")]', undefined, "xpath"); //wait till the Login page is loaded
        super("http://vlcapweb03.fisdev.local:12143/main/cmse/Home", "Security Statement", undefined, "text"); //wait till the Login page is loaded
        this.UserName = new TextBox_1.TextBox("id", "userid");
        this.Password = new TextBox_1.TextBox("id", "password");
        this.ProceedBtn = new Button_1.Button("id", "loginButton");
        this.ErrorTopLevel = new Label_1.Label("classname", "error error-top-level");
    }
    navigateTo() {
        protractor_1.browser.get(this.pageURL);
    }
}
exports.CMSeLoginPage = CMSeLoginPage;
//# sourceMappingURL=CMSeLoginPage.js.map