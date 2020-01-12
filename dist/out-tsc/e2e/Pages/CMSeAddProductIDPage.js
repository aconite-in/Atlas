"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
const TextBox_1 = require("../Core/WebElements/TextBox");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
class CMSeAddProductIDPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Add Product ID")]', undefined, "xpath"); //wait till the Add Product ID Page is loaded
        super("", "Add Product ID", undefined, "text");
        this.Productdesctextbox = new TextBox_1.TextBox("id", "productDescription");
        this.productIdtextbox = new TextBox_1.TextBox("id", "productId");
        this.ContinueAddbutton = new Button_1.Button("id", "continueAdd");
        this.CancelLink = new LinkLabel_1.LinkLabel("classname", "link");
    }
    async navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSeAddProductIDPage = CMSeAddProductIDPage;
//# sourceMappingURL=CMSeAddProductIDPage.js.map