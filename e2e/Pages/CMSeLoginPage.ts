import { browser } from "protractor"
import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";

export class CMSeLoginPage extends BasePage {

    public UserName: TextBox = new TextBox("id", "userid");
    public Password: TextBox = new TextBox("id", "password");
    public ProceedBtn: Button = new Button("id", "loginButton");
    public ErrorTopLevel: Label = new Label("classname", "error error-top-level");

    constructor() {
        //super("http://vlcapweb03.fisdev.local:12143/main/cmse/Home", '//*[contains(text(),"Security Statement")]', undefined, "xpath"); //wait till the Login page is loaded
        super("http://vlcapweb03.fisdev.local:12143/main/cmse/Home", "Security Statement", undefined, "text"); //wait till the Login page is loaded
    }

    navigateTo(): void {
        browser.get(this.pageURL)
    }
}