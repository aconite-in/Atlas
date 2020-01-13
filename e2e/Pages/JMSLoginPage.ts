import { browser } from "protractor"
import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";
import { config } from "../protractor.conf";

export class JMSLoginPage extends BasePage {

    public UserName: TextBox = new TextBox("id", "txtUsername");
    public Password: TextBox = new TextBox("id", "txtPassword");
    public proceedButton: Button = new Button("id", "CustomImageButtonControl1");
    public ErrorLabel: Label = new Label("id", "lblError");
    public LoggedInUserName: Button = new Button("id", "btnContinue");

    constructor() {
        super("https://pr-jms.fisintegratedpayables.com/jms/login.aspx", "//span[@id='AppName']", 20000, "xpath");
        //super("http://idp-apex-ui-dev.sdlocpapp.fisdev.local/IdPRI-4.15.0/apexdev/", "")
    }

    navigateTo(): void {
        browser.get(this.pageURL)
    }
}