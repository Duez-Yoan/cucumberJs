const reporter = require('cucumber-html-reporter');

const options = {
    jsonFile: 'target/cucumber.json',
    launchReport: true,
    noInlineScreenshots: false,
    output: 'target/cucumber-html-reporter.html',
    reportSuiteAsScenarios: false,
    scenarioTimestamp: true,
    screenshotsDirectory: 'target/screenshots/',
    storeScreenshots: true,
    theme: 'bootstrap',
};

reporter.generate(options);