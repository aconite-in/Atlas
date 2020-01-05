import { BasePage } from "../Core/BasePage";
import { Button } from "../Core/WebElements/Button";
import { TextBox } from "../Core/WebElements/TextBox";

export class CMSeIssadminProductIDPage extends BasePage {

    //Issuer ID admin fields
    public DefaultIssueridbutton: Button = new Button("xpath", '//*[@id="attributes"]/li[1]/span[1]');
    public DefaultIssueridtextbox: TextBox = new TextBox("id", "130818");
    public DefaultIssueridaddattributebutton: Button = new Button("xpath", '//*[@id="attributes"]/li[1]/a[2]');

    public Defaultreplacementissidbutton: Button = new Button("xpath", '//*[@id="attributes"]/li[2]/span[1]');
    public Defaultreplacementissidtextbox: TextBox = new TextBox("css", "#\\31 30857");
    public Defaultreplacementissidaddattributebutton: Button = new Button("xpath", '//*[@id="attributes"]/li[2]/a[2]');

    public Defaultreissueissidbutton: Button = new Button("xpath", '//*[@id="attributes"]/li[3]/span[1]');
    public Defaultreissueissidtextbox: TextBox = new TextBox("id", "202448");
    public Defaultreissueissidaddattritubebutton: Button = new Button("xpath", '//*[@id="attributes"]/li[3]/a[2]');

    public Defaultcompromiseissidbutton: Button = new Button("xpath", '//*[@id="attributes"]/li[4]/span[1]');
    public Defaultcompromiseissidtextbox: TextBox = new TextBox("id", "202610");
    public Defaultcompromiseissidaddattritubebutton: Button = new Button("xpath", '//*[@id="attributes"]/li[4]/a[2]');

    public ContinueLink: Button = new Button("xpath", '//*[@id="main-column"]/div/div[2]/a[3]');

    constructor() {
        //super("", '//*[contains(text(),"Issuer Id Admin")]', undefined, "xpath"); //wait till the Issuer ID admin Product information page is loaded
        super("", "Issuer Id Admin", undefined, "text");
    }

    navigateTo(): void {
        //throw new Error("Method not implemented.");
    }
}