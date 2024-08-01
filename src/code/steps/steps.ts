import {
    After, AfterAll,
    AfterStep,
    Before,
    BeforeAll, BeforeStep,
    Given,
    ITestCaseHookParameter,
    Then,
    world,
    World
} from "@cucumber/cucumber";
import {Browser, chromium, Page} from "playwright";
import {strictEqual} from "assert";
import config from '../../../playwright.config'
import {v4 as uuidv4} from 'uuid';
import * as assert from "node:assert";

let browser: Browser;
let page: Page;


Before({name: "hook before"},async function () {
    console.log("Lancement du navigateur Chromium");
    browser = await chromium.launch(config.use);
    page = await browser.newPage();
});

Given("j'ouvre le site Playwright", async function () {
    console.log("Navigation vers le site de Playwright");
    await page.goto('https://www.rec1.fr.fd-recette.net/', {waitUntil: 'domcontentloaded'});
});

Given("j\'ouvre le site Playwright {string}", async function () {
    console.log("Navigation vers le site de Playwright");
    await page.goto('https://www.rec1.fr.fd-recette.net/', {waitUntil: 'domcontentloaded'});
});

Then('je devrais voir le titre {string}', async function (expectedTitle) {
    const title = await page.title();
    strictEqual(title, expectedTitle);
    assert.ok(getRandomBoolean(), "Assertion failed");
    // je veux faire un random sur un assert qui failed et qui reussi ici
    console.log("Le titre de la page est correct");

});

function getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
}

const takeScreenShotOnFailure = async (world: World, scenario: ITestCaseHookParameter) => {
    const screenshotPath: string = './target/screenshots/';
    const screensshotExtn: string = uuidv4() + '.png';
    const screenShot = await page?.screenshot({
        path: screenshotPath + scenario.pickle.name + screensshotExtn,
        fullPage: false,
    });
// attach the screenshot using World's attach()
    if (screenShot) await world.attach(screenShot, 'image/png');
};

After({tags: "@fail", name: "hook After"}, async function () {
    console.log("Fait peter le test");
    assert.ok(false, "Assertion failed");
});

AfterStep(async function (scenario: ITestCaseHookParameter) {
    await takeScreenShotOnFailure(world, scenario);
});

BeforeStep(async function (scenario: ITestCaseHookParameter) {
    await takeScreenShotOnFailure(world, scenario);
});

After(async function () {
    console.log("Fermeture du navigateur");
    await browser.close();
});

BeforeAll(async function () {
    console.log("Lancement des tests");
    //je veux créer une variable d'environnement avec la date et heure actuelle
    const start_date: Date = new Date();
});

AfterAll(async function () {
    console.log("Fin des tests");
    //je veux créer une variable d'environnement avec la date et heure actuelle
    const end_date: Date = new Date();
    //je veux calculer la durée des tests
});

