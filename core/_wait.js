const { WebDriver, WebElementPromise } = require("selenium-webdriver");;
 
const defaultTimeout = 11000;
 
/**
 *
 * @param {WebDriver} driver
 * @param {WebElementPromise} element
 */
const waitForElement = async (driver, element, timeout) => {
    return driver.wait(async (_) => {
        try {
            let isDisplayed = element.isDisplayed();
            if (isDisplayed) return true;
            else return false;
        }
        catch (err) {
            return false;
        }
    }, timeout ? timeout : defaultTimeout, `Element is not found after ${timeout ? timeout : defaultTimeout}`)
}
 
module.exports = {
    waitForElement
}