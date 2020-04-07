const { BasePage } = require("../core/base.page");
const { By, WebDriver } = require("selenium-webdriver");

class EmailTempPage extends BasePage {
    /**
     * @param{WebDriver} driver
     */

    constructor(driver) {
        super(driver, "/EmailConfig");
    }

    get btnTemplate() {
    return this._driver.findElement(By.linkText("Template"));
    }   

    get edtCC() {
        return this._driver.findElement(By.name("cc"));
    }   

    async checkCC() {
        await this.btnTemplate.click();
        await this.edtCC.getAttribute("value");
    }

}

exports.EmailTempPage = EmailTempPage;