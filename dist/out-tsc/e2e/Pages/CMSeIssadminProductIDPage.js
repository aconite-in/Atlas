"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const TextBox_1 = require("../Core/WebElements/TextBox");
class CMSeIssadminProductIDPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Issuer Id Admin")]', undefined, "xpath"); //wait till the Issuer ID admin Product information page is loaded
        super("", "Issuer Id Admin", undefined, "text");
        //Issuer ID admin fields
        this.DefaultIssueridbutton = new Button_1.Button("xpath", '//*[@id="attributes"]/li[1]/span[1]');
        this.DefaultIssueridtextbox = new TextBox_1.TextBox("id", "130818");
        this.DefaultIssueridaddattributebutton = new Button_1.Button("xpath", '//*[@id="attributes"]/li[1]/a[2]');
        this.Defaultreplacementissidbutton = new Button_1.Button("xpath", '//*[@id="attributes"]/li[2]/span[1]');
        this.Defaultreplacementissidtextbox = new TextBox_1.TextBox("css", "#\\31 30857");
        this.Defaultreplacementissidaddattributebutton = new Button_1.Button("xpath", '//*[@id="attributes"]/li[2]/a[2]');
        this.Defaultreissueissidbutton = new Button_1.Button("xpath", '//*[@id="attributes"]/li[3]/span[1]');
        this.Defaultreissueissidtextbox = new TextBox_1.TextBox("id", "202448");
        this.Defaultreissueissidaddattritubebutton = new Button_1.Button("xpath", '//*[@id="attributes"]/li[3]/a[2]');
        this.Defaultcompromiseissidbutton = new Button_1.Button("xpath", '//*[@id="attributes"]/li[4]/span[1]');
        this.Defaultcompromiseissidtextbox = new TextBox_1.TextBox("id", "202610");
        this.Defaultcompromiseissidaddattritubebutton = new Button_1.Button("xpath", '//*[@id="attributes"]/li[4]/a[2]');
        this.ContinueLink = new Button_1.Button("xpath", '//*[@id="main-column"]/div/div[2]/a[3]');
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSeIssadminProductIDPage = CMSeIssadminProductIDPage;
//# sourceMappingURL=CMSeIssadminProductIDPage.js.map