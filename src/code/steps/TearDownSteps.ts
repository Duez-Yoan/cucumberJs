import {After, AfterStep, Before, BeforeStep, ITestCaseHookParameter, world, World} from "@cucumber/cucumber";
import {v4 as uuidv4} from 'uuid';
import DriverManager from "../driver/DriverManager";

Before({name: "Lancement du navigateur"}, async function () {
    console.log("Lancement du navigateur Chromium");
    await DriverManager.init();
});

const takeScreenShotOnFailure = async (world: World, scenario: ITestCaseHookParameter) => {
    const screenshotPath: string = './target/screenshots/';
    const screensshotExtn: string = uuidv4() + '.png';
    const screenShot = await DriverManager.page?.screenshot({
        path: screenshotPath + scenario.pickle.name + screensshotExtn,
        fullPage: false,
    });
// attach the screenshot using World's attach()
    if (screenShot) world.attach(screenShot, 'image/png');
};

AfterStep(async function (scenario: ITestCaseHookParameter) {
    await takeScreenShotOnFailure(world, scenario);
});

BeforeStep(async function (scenario: ITestCaseHookParameter) {
    await takeScreenShotOnFailure(world, scenario);
});

After(async function () {
    console.log("Fermeture du navigateur");
    await DriverManager.browser.close();
});

