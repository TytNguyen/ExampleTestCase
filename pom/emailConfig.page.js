const { By, WebDriver } = require("selenium-webdriver");
const { BasePage } = require("../core/base.page");
const { waitForElement } = require("../core/_wait");

class EmailConfigPage extends BasePage {
    /**
     * @param{WebDriver} driver
     */

    constructor(driver) {
         super(driver, "/EmailConfig");
    }

    get edtSmtpServer() {
        return this._driver.findElement(By.name("smtpserver"));
    }

    get edtPort() {
        return this._driver.findElement(By.name("port"));
    }

    get edtDisplayName() {
        return this._driver.findElement(By.name("displayname"));
    }

    get edtFromAddress() {
        return this._driver.findElement(By.name("fromaddress"));
    }

    get edtAccount() {
        return this._driver.findElement(By.name("account"));
    }

    get edtPassword() {
        return this._driver.findElement(By.name("password"));
    }

    get btnSaveConfig() {
        return this._driver.findElement(By.id("saveConfig"));
    }

    get btnReset() {
        return this._driver.findElement(By.id("resetConfig"));
    }

    get atlErrorMessage() {
        return this._driver.SwitchTo().Alert();
    }

    async configuration(stmp, port, display, address, account, password) {
        await this.btnReset.click();
        await this.edtSmtpServer.sendKeys(stmp || "");
        await this.edtPort.sendKeys(port || "");
        await this.edtDisplayName.sendKeys(display || "");
        await this.edtFromAddress.sendKeys(address || "");
        await this.edtAccount.sendKeys(account || "");
        await this.edtPassword.sendKeys(password || "");
        await this.btnSaveConfig.click();
    }

    async waitForErrorDisplay() {
        return waitForElement(this._driver, this.spnErrorMessage);
    }
}

exports.EmailConfigPage = EmailConfigPage;