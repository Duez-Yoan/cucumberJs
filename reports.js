const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./target/",
    reportPath: "./target/",
    reportName: "Rapport de test de l'équipe AQT",
    pageFooter: "<div class='created-by'>Créé par Yoan DUEZ de la QA-Transverse</div>",
    displayDuration: true,
    displayReportTime: true,
    useCDN: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "127",
        },
        device: "Local test machine",
        platform: {
            name: "Windwos",
            version: "10",
        },
    },
    customData: {
        title: "Run info",
        data: [
            {label: "Project", value: "AQT"},
        ],
    },
});