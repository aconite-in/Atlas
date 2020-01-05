import { browser } from "protractor"
import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";
import { config } from "../protractor.conf";

export class UPLoginPage extends BasePage {

    public UserName: TextBox = new TextBox("id", "loginName");
    public Password: TextBox = new TextBox("model", "params.form.password");
    public SigninBtn: Button = new Button("partialbuttontext", "Sign in");
    public ErrorTopLevel: Label = new Label("classname", "error error-top-level");

    constructor() {
        super("http://vlmazapexuiap02.fisdev.local:4200/apexdev", "User Login", 20000, "text"); //wait till the Login page is loaded
    }

    navigateTo(): void {
        browser.get(config.constants.UPSITbaseURL);
    }
}
