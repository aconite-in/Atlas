import { browser } from "protractor";
import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";
import { TextBox } from "../Core/WebElements/TextBox";

export class LoginPage extends BasePage {

    public UserName: TextBox = new TextBox("id", "_Input");
    public Password: TextBox = new TextBox("id", "main_PasswordTextBox");
    public ProceedBtn: Button = new Button("id", "main_LoginButton");
    public ConcurrentLoginYesBtn: Button = new Button("id", "main_btnContinueConcurrentLogin");
    public ErrorLabel: Label = new Label("id", "LoginError");

    constructor() {
        super("https://pr.fisintegratedpayables.com/fis/CustomerLogin.aspx", "//*[@id='_Input']", 20000, "xpath");
    }

    public navigateTo(): void {
        browser.get(this.pageURL);
    }
}
