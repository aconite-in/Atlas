"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const TextBox_1 = require("../Core/WebElements/TextBox");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
class CMSeSearchProductIDPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Product ID Search")]', undefined, "xpath"); //wait till the Product ID Search Page is loaded
        super("", "Product ID Search", undefined, "text");
        this.InstitutionIDtextbox = new TextBox_1.TextBox("id", "inst");
        this.productIdtextbox = new TextBox_1.TextBox("id", "productId");
        this.searchSubmitbutton = new Button_1.Button("id", "searchSubmit");
        this.viewAllSubmitbutton = new Button_1.Button("id", "viewAllSubmit");
        this.addProductIdSubmitlink = new LinkLabel_1.LinkLabel("id", "addProductIdSubmit");
    }
    async navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSeSearchProductIDPage = CMSeSearchProductIDPage;
//# sourceMappingURL=CMSeSearchProductIDPage.js.map