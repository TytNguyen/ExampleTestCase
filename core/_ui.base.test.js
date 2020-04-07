const ava = require("ava");
const { Builder } = require("selenium-webdriver");
 
function setUp() {
    ava.serial.beforeEach(async t => {
        t.context.driver = await createDriver();
        // global.driver = t.context.driver;
        global.something = "A Global variable";
        t.log("BeforeEach serial is run");
    });
}
 
function tearDown() {
    ava.afterEach.always(async t => {
        const { driver } = t.context;
        await driver.quit();
    });
}
 
const createDriver = async (browserName = 'chrome') => {
    return new Builder().forBrowser(browserName).build();
};
 
// Initial
setUp();
tearDown();