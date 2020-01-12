"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const Logger_1 = require("../Core/DataAccess/Logger");
const Elements_1 = require("../Core/Elements");
/**
 * Smart Selector
 * Opens the browser and navigate to the link specified in the first parameter
 *
 * URL (Parameter 1): URL that need to be opened in the browser after opening the browser
 */
cucumber_1.Given("Browser is loaded with URL {string}", async (URL) => {
    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `SmartStep: User is on Page ${URL}`);
    await protractor_1.browser.get(URL);
});
/**
 * Smart Selector
 * Clicks the button by the text sepecifed in first parameter.
 *
 * Button Text (Parameter 1): The text displayed on link to be clicked.
 */
cucumber_1.When("User clicks {string} button", async (ButtonText) => {
    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `SmartStep: User clicks ${ButtonText} button`);
    await new Elements_1.Button("xpath", `//button[text()='${ButtonText}']|//input[@value='${ButtonText}']`).click();
});
/**
 * Smart Selector
 * Types text on the screen using the label text specified in the input text of step.
 *
 * Input Text (Parameter 1): The text to be typed in the text box.
 * Label (Parameter 2): The label text that appears before the text box.
 */
cucumber_1.When("User types {string} into textbox next to {string}", async (inputText, elementObject) => {
    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `SmartStep: User types ${inputText} into textbox near ${elementObject}`);
    await new Elements_1.TextBox("xpath", `//*[text()='${elementObject}']/following::input[1]`).type(inputText);
});
/**
 * Smart Selector
 * Types text on the screen using the label text specified in the input text of step.
 *
 * Input Text (Parameter 1): The text to be typed in the text box.
 * Label (Parameter 2): The label text that appears before the text box.
 */
cucumber_1.When("User types {string} into textbox before {string}", async (inputText, elementObject) => {
    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `SmartStep: User types ${inputText} into textbox near ${elementObject}`);
    await new Elements_1.TextBox("xpath", `//*[text()='${elementObject}']/preceding::input[1]`).type(inputText);
});
/**
 * Smart Selector
 * Clicks the button by the text sepecifed in first parameter, however if the button is not present the step will not fail but log a warning in log and will continue the execution of the consecutive of the steps. This step can be used where there are concurrent login pop-up, which are not always appear and in case the show up, we need to click OK on them.
 *
 * Button Text (Parameter 1): The text displayed on link to be clicked.
 */
cucumber_1.When("User clicks {string} button if present", async (ButtonText) => {
    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `SmartStep: User clicks ${ButtonText} button  if present`);
    await new Elements_1.Button("xpath", `//button[text()='${ButtonText}']|//input[@value='${ButtonText}']`).click(false);
});
/**
 * Smart Selector
 * Clicks the link by the text sepecifed in first parameter.
 *
 * Link Text (Parameter 1): The text displayed on link to be clicked.
 */
cucumber_1.When("User clicks {string} link", async (LinkText) => {
    Logger_1.Logger.log(Logger_1.LogLevel.INFO, `SmartStep: User clicks ${LinkText} link`);
    await new Elements_1.LinkLabel("xpath", `//a[text()='${LinkText}']`).click();
});
//# sourceMappingURL=SmartSteps.js.map