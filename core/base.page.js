const { WebDriver } = require("selenium-webdriver");
 
class BasePage {
    /**
     * @param{WebDriver} driver
     */
    constructor(driver, path){
        this.baseUrl = "http://tien.nguyen:Kms@2205@192.168.74.132:8081";
        this._driver = driver;
        this.path = path;
        this.loadingPageTimeout = 11000;
    }
 
    async openPage() {
        return this._driver.get(this.baseUrl + this.path);
    }
 
    async isOnPage() {
        return this._driver.getCurrentUrl() == this.path;
    }
}
 
exports.BasePage = BasePage;