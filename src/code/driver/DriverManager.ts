import {Browser, chromium, Page} from "playwright";

class DriverManager {
    static page: Page;
    static browser: Browser;

    static async init() {
        this.browser = await chromium.launch({headless: false});
        this.page = await this.browser.newPage();
    }

    static async getPage(): Promise<Page> {
        return this.page;
    }

    static async getBrowser(): Promise<Browser> {
        return this.browser;
    }

    static async close() {
        await this.browser.close();
    }

}

export default DriverManager;