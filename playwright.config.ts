import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {

        // Browser options
        actionTimeout: 20000,

        // Run tests in headless browsers.
        headless: true,

        // Capture screenshot after each test failure.
        screenshot: 'on',

        // Record trace only when retrying a test for the first time.
        trace: 'on',

        // Record video only when retrying a test for the first time.
        video: 'on',


    },
    workers: 12,
});