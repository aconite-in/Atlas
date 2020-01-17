import { browser, Config } from "protractor";
import { Logger } from "./Core/DataAccess/Logger";
const fs = require("fs");

export const config: Config = {
    //seleniumAddress: "http://cucumber-selenium-hub-ifs-dev-ocp.sdlocpapp.fisdev.local/wd/hub ",
    directConnect: true,
    //SELENIUM_PROMISE_MANAGER: true,
    getPageTimeout: 200000,
    allScriptsTimeout: 14400000,
    elementTimeout: 10000,

    framework: "custom",
    // path relative to the current config file
    frameworkPath: "./node_modules/protractor-cucumber-framework",
    capabilities:
    {
        browserName: "chrome",
        // browserName: 'internet explorer',
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
          }
    },
    chromeDriver: 'chromedriver',
    // Spec patterns are relative to this directory.
    specs: [
        // UP UI Regression flows -----------------------
        // 'Features/UPLoginPage.feature', 'Features/UPHomePage.feature', 'Features/UPTerminalGroupspage.feature', 'Features/UPTerminalSearchPage.feature', 'Features/UPTerminaldetailPage.feature',

        // //CMSe UI Regression flows -----------------------
        // 'Features/CMSeLoginPage.feature', 'Features/CMSeInstitutionPage.feature', 'Features/CMSeProductIDListPage.feature', 'Features/CMSeSearchProductIDPage.feature', 'Features/CMSeAddProductIDPage.feature',
        // 'Features/CMSeProductInformationPage.feature', 'Features/CMSeIssadminProductIDPage.feature', 'Features/CMSeReviewProductIDPage.feature', 'Features/CMSeProductDetailPage.feature',
        // 'Features/CMSeIssIdconfPage.feature', 'Features/CMSeCardholderPage.feature', 'Features/CMSeNegFilestatusPage.feature', 'Features/CMSeLogout.feature',

        // //CDP UI Regression flows ---------------------
        // 'Features/CDPCustomerLoginPage.feature', 'Features/CDPJMSJobPage.feature',

        // //API Regression flows ---------------------
        // 'Features/CDPAPI.feature', 'Features/UPAPI.Feature'

        "Features/*.feature",
    ],

    isAPI: "True",
    constants: {
        CDPUser: "muthub1",
        CDPPassword: "aBCD12345",
        UPSITuser: "e3003143",
        UPSITpassword: "QAZwsx@4142189841ABC",
        UPSITSLBuser: "BCFS.SLB2",
        UPSITSLBpassword: "Test1234#",
        UPSITbaseURL: "http://vlmazapexuiap02.fisdev.local:4200/apexdev",
        UPSITFI: "59067015656",
        UPSITTerminal: "IC001457",
    },

    cucumberOpts: {
        "require": "Steps/*.js",
        // tags: '@Terminal_set1',
        // tags: '@Transearch_set2',
        // tags: '@SLB_set3',
        "tags": "@e2e",
        "profile": false,
        "format": `json:./Reports/TSpector.json`,
        "no-source": true,
    },

    appURL: "http://localhost:4200/",
    baseURL: "http://vlmazapexuiap02.fisdev.local:4200/apexdev",

    onPrepare() {
        if (!config.directConnect) {
            config.cucumberOpts.format = `json:./Reports/TSpector${process.pid}.json`;
        }
        if (!config.isAPI) {
            browser.driver.manage().window().maximize();
            browser.ignoreSynchronization = true; // false is the value to handle Angular js}
        }
        Logger.InstantiateLogger();
    },

    onComplete() {
        if (config.directConnect) {
            let reporter = require("cucumber-html-reporter");
            let options = {
                theme: "bootstrap",
                jsonFile: `./Reports/TSpector.json`,
                // jsonDir: './Reports',
                output: `./Reports/TSpector.html`,
                reportSuiteAsScenarios: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "Pre-Production",
                    "Browser": "Chrome 75.0.3770.90",
                    "Platform": "Windows 10",
                    "Parallel": "No",
                    "Executed": "Locally",
                },
            };
            reporter.generate(options);
        }
    },
};
