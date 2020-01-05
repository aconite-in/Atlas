import { Given, When } from "cucumber";
import { browser } from "protractor";
import { Logger, LogLevel } from "../Core/DataAccess/Logger";
import { Button, LinkLabel, TextBox } from "../Core/Elements";

/**
 * Smart Selector
 * Opens the browser and navigate to the link specified in the first parameter
 *
 * URL (Parameter 1): URL that need to be opened in the browser after opening the browser
 */
Given("Browser is loaded with URL {string}", async (URL: string) => {
    Logger.log(LogLevel.INFO, `SmartStep: User is on Page ${URL}`);
    await browser.get(URL);
});

/**
 * Smart Selector
 * Clicks the button by the text sepecifed in first parameter.
 *
 * Button Text (Parameter 1): The text displayed on link to be clicked.
 */
When("User clicks {string} button", async (ButtonText: string) => {
    Logger.log(LogLevel.INFO, `SmartStep: User clicks ${ButtonText} button`);
    await new Button("xpath", `//button[text()='${ButtonText}']|//input[@value='${ButtonText}']`).click();
});

/**
 * Smart Selector
 * Types text on the screen using the label text specified in the input text of step.
 *
 * Input Text (Parameter 1): The text to be typed in the text box.
 * Label (Parameter 2): The label text that appears before the text box.
 */
When("User types {string} into textbox next to {string}", async (inputText: string, elementObject: string) => {
    Logger.log(LogLevel.INFO, `SmartStep: User types ${inputText} into textbox near ${elementObject}`);
    await new TextBox("xpath", `//*[text()='${elementObject}']/following::input[1]`).type(inputText);
});

/**
 * Smart Selector
 * Types text on the screen using the label text specified in the input text of step.
 *
 * Input Text (Parameter 1): The text to be typed in the text box.
 * Label (Parameter 2): The label text that appears before the text box.
 */
When("User types {string} into textbox before {string}", async (inputText: string, elementObject: string) => {
    Logger.log(LogLevel.INFO, `SmartStep: User types ${inputText} into textbox near ${elementObject}`);
    await new TextBox("xpath", `//*[text()='${elementObject}']/preceding::input[1]`).type(inputText);
});

/**
 * Smart Selector
 * Clicks the button by the text sepecifed in first parameter, however if the button is not present the step will not fail but log a warning in log and will continue the execution of the consecutive of the steps. This step can be used where there are concurrent login pop-up, which are not always appear and in case the show up, we need to click OK on them.
 *
 * Button Text (Parameter 1): The text displayed on link to be clicked.
 */
When("User clicks {string} button if present", async (ButtonText: string) => {
    Logger.log(LogLevel.INFO, `SmartStep: User clicks ${ButtonText} button  if present`);
    await new Button("xpath", `//button[text()='${ButtonText}']|//input[@value='${ButtonText}']`).click(false);
});

/**
 * Smart Selector
 * Clicks the link by the text sepecifed in first parameter.
 *
 * Link Text (Parameter 1): The text displayed on link to be clicked.
 */
When("User clicks {string} link", async (LinkText: string) => {
    Logger.log(LogLevel.INFO, `SmartStep: User clicks ${LinkText} link`);
    await new LinkLabel("xpath", `//a[text()='${LinkText}']`).click();
});
