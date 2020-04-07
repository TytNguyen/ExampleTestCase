const ava = require("ava");
const { EmailTempPage } = require("../pom");

require("../core/_ui.base.test");  

ava.serial.beforeEach(async t => {
    const { driver } = t.context;
    t.context.emailTempPage = new EmailTempPage(driver);
});

/**
 *
 * @param {{context: {emailTempPage: EmailTempPage}}} t
 */

 async function testWrongTypeCC (t) {
    t.plan(1);
    let { emailTempPage } = t.context;
    await emailTempPage.openPage();
    await emailTempPage.testWrongTpeCC();
 }
// testWrongTypeCC.title = 


 ava('cc is IT@kms-technology.com', t => {
    t.deepEqual(testWrongTypeCC, 'IT@kms-technology.com', `Expect error message`);
 });