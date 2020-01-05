"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
class CMSeProductDetailPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Product ID Detail")]', undefined, "xpath"); //wait till the Product Detail page is loaded
        super("", "Product ID Detail", undefined, "text");
        this.ValidateLinkProductbutton = new Button_1.Button("id", "LinkProductConfiguration");
        this.UpdateProductbutton = new Button_1.Button("id", "UpdateProductConfiguration");
        this.ViewProductbutton = new Button_1.Button("id", "ViewProductConfiguration");
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSeProductDetailPage = CMSeProductDetailPage;
//# sourceMappingURL=CMSeProductDetailPage.js.map