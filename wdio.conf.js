exports.config = {
    runner: 'local',
    specs: [
        './test/*.js'
    ],
    suites: {
        addToCartFunc: ['./test/addToCart.js'],
        baseFunc: ['./test/base.js']
    },
    maxInstances: 2,
    capabilities: [
            {
                browserName: 'chrome',
            },
        ],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://militarist.ua/ru/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
    before: function() {
        browser.url("");
        browser.maximizeWindow();
        browser.addCommand('highlightElement', function (element) {
            browser.execute('arguments[0].style.outline = "#DA70D6 solid 3px";', element);
        });
        browser.addCommand('jsClick', function (element) {
           browser.execute('arguments[0].click();', element) ;
        });
    },
    afterAll: function () {
        browser.deleteCookies();
    }
}
