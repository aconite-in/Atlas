"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../Core/BasePage");
const TextBox_1 = require("../Core/WebElements/TextBox");
const Button_1 = require("../Core/WebElements/Button");
const LinkLabel_1 = require("../Core/WebElements/LinkLabel");
const ComboBox_1 = require("../Core/WebElements/ComboBox");
class UploadFilePage extends BasePage_1.BasePage {
    constructor() {
        super("", "//*[@id='selectfilediv']");
        this.FileUploadInput = new TextBox_1.TextBox("id", "fileSelector_html_file1");
        this.FileUploadBtn = new Button_1.Button("id", "uploadButton");
        this.ApplicationComboBox = new ComboBox_1.ComboBox("id", "main_content_Applications");
        this.LogoutLink = new LinkLabel_1.LinkLabel("css", "#mainContainer > table > tbody > tr > td:nth-child(5) > a");
    }
    navigateTo() {
        throw new Error("Method not implemented.");
    }
}
exports.UploadFilePage = UploadFilePage;
//# sourceMappingURL=UploadFilePage.js.map