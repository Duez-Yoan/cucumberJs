import {After, Before, Given, Then, When} from "@cucumber/cucumber";
import {strictEqual} from "assert";
import DriverManager from "../driver/DriverManager";
import * as assert from "node:assert";

Given("j'ouvre le site Fnac", async function () {
    console.log("I go to Fnac");
    await DriverManager.page.goto('https://www.fnac.com', {waitUntil: 'domcontentloaded'});
});

Given("j'ouvre le site Darty", async function () {
    console.log("I go to Darty");
    await DriverManager.page.goto('https://www.darty.com/', {waitUntil: 'domcontentloaded'});
});

Then("je devrais voir le titre {string}", async function (expectedTitle) {
    const title = await DriverManager.page.title();
    strictEqual(title, expectedTitle);
    console.log("The title is ok");
});

When("je cherche le produit {string}", async function (product: string) {
    console.log("I search the product " + product);
    await DriverManager.page.fill('input[name="search"]', product);
    await DriverManager.page.press('input[name="search"]', 'Enter');
});

Before(async function (){
    console.log("Before ok");
    assert.ok("Before ok");
});

After(async function (){
    console.log("After fail");
    assert.fail("After fail");
});

After(async function (){
    console.log("After ok");
    assert.ok("After ok");
});