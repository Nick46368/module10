const HomePage = require('../pageobjects/homePage.page');
const loginData = require('../testData/loginData');
const { assert, expect } = require('chai');

describe('Add gear to Cart after search', function() {
    it('Should go to the Homepage', function() {
        browser.highlightElement(HomePage.pageHeader);
        assert.deepStrictEqual(HomePage.pageHeader.isDisplayed(), true);
    })

    it('Should select russian language',function() {
        browser.highlightElement(HomePage.changeLanguageRU);
        HomePage.clickChangeLanguageRU();
        assert.deepStrictEqual(HomePage.getTextFromAddressOfTheShops(), 'Адреса магазинов');
    })

    it('Should open login form before entering credentials', function() {
        browser.highlightElement(HomePage.loginButton);
        HomePage.clickLoginButton();
        assert.isNotEmpty(HomePage.bannerWithLoginForm);
    })

    it('Should enter valid testData with credentials in login form', function () {
        HomePage.enterEmail(loginData.email);
        HomePage.enterPassword(loginData.password);
        browser.execute(() => {
            document.querySelector(`input[name="Login"]`).style.color = `GreenYellow`;
        });
        browser.highlightElement(HomePage.loginButtonFromLoginForm);
        HomePage.clickLoginButtonFromLoginForm();
        assert.deepStrictEqual(HomePage.waitForIconAfterSuccessfulLogin(), true)
    })

    it('Should search "BLADE BROTHERS МАЧЕТЕ ГОЛОК" through the site', function() {
        HomePage.enterDataIntoTheSearchbox('BLADE BROTHERS МАЧЕТЕ ГОЛОК');
        browser.jsClick(HomePage.searchButton);
        assert.isTrue(HomePage.waitForElementAfterSearch(), 'Поиск выполнен');
    })

    it('Should click on "Buy" button after searching specific gear', function() {
        browser.highlightElement(HomePage.buyButton);
        browser.jsClick(HomePage.buyButton);
        //HomePage.clickOnBuyButton();
        assert.isTrue(HomePage.waitForBannerAddItemInCart());
    })
})
