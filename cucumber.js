const argv = require('yargs').argv;
const path = require("path");

module.exports = {
    default: {
        requireModule: [
            'ts-node/register'
        ],
        require: [
            'src/code/steps/**/*.ts',
            'cucumber.node.js'
        ],
        format: [
            'progress',
            'json:target/cucumber.json',
            'html:target/cucumber.html',
            'junit:target/cucumber.xml',
            'message:target/cucumber-html-reporter.ndjson',
            '@cucumber/pretty-formatter',
        ],
        paths: [
            'src/resources/features/**/*.feature'
        ],
        tags: argv.tags || process.env.npm_config_tags,
        parallel: 12,
        retry: 1,
        timeout: 20000,
        pretty: true,
        dryRun:false,
    },
};