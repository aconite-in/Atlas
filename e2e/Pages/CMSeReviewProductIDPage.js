"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const Button_1 = require("../Core/WebElements/Button");
class CMSeReviewProductIDPage extends BasePage_1.BasePage {
    constructor() {
        //super("", '//*[contains(text(),"Review Product ID")]', undefined, "xpath"); //wait till the Review Product ID page is loaded
        super("", "Review Product ID", undefined, "text");
        this.Submitbutton = new Button_1.Button("xpath", '//*[@id="viewSubmitForm"]/div/input');
    }
    navigateTo() {
        //throw new Error("Method not implemented.");
    }
}
exports.CMSeReviewProductIDPage = CMSeReviewProductIDPage;
//# sourceMappingURL=CMSeReviewProductIDPage.js.map