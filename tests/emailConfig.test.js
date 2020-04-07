const ava = require("ava");
const { EmailConfigPage } = require("../pom");
const { list_invalid_configuration } = require("../data");

require("../core/_ui.base.test");  

ava.serial.beforeEach(async t => {
    const { driver } = t.context;
    t.context.emailConfigPage = new EmailConfigPage(driver);
});

/**
 *
 * @param {{context: {emailConfigPage: EmailConfigPage}}} t
 * @param {*} stmp
 * @param {*} port
 * @param {*} display
 * @param {*} address
 * @param {*} account
 * @param {*} password
 */

 async function testSaveConfigUnsuccessfully (t, stmp, port, display, address, account, password, errorMessage) {
    t.plan(1);
    let { emailConfigPage } = t.context;
    await emailConfigPage.openPage();
    await emailConfigPage.configuration(stmp, port, display, address, account, password);
    try {
         await emailConfigPage.waitForErrorDisplay();
    } catch (err) {
        console.log(err);
        t.fail(err.message);
    }
    let actualErrorMessage = await emailConfigPage.atlErrorMessage.Text;
    t.deepEqual(actualErrorMessage, errorMessage, `Expect error message '${errorMessage}' but '${actualErrorMessage}' is displayed`);
 }

 testSaveConfigUnsuccessfully.title = (providedTitle, _1, _2, _3, _4, _5, _6, _7) => "Test save configuration unsuccessfully with information " + _1 + "/" +_2 + "/" +_3 + "/" +_4 + "/" +_5 + "/" +_6;

 list_invalid_configuration.forEach(item => {
     ava(testSaveConfigUnsuccessfully, item.stmp, item.port, item.display, item.address, item.account, item.password, item.errorMessage);
 });