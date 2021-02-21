const HomePage = require('../pageobjects/homePage.page');
const loginData = require('../testData/loginData');
const { assert, expect } = require('chai');

describe('Base functionality testing', function() {
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

    it('Should open "EQUIPMENT AND GEAR" dropdown', function() {
        HomePage.getEquipmentAndGearDropdown();
        expect(HomePage.equipmentAndGearDropdown, 'Снаряжение и экипировка');
    })

    it('Should open "About magazine"', function() {
        browser.jsClick(HomePage.aboutStoreButton);
        assert.exists(HomePage.aboutStoreButton, ' ПРО МАГАЗИН');
    })

    it('Should check that page "About magazine" contains diplomas', function() {
        HomePage.scrollToLuganskDiploma();
        assert.exists(HomePage.waitForLuganskDiploma(), 'Подяка від В4252 ОТУ "Луганськ"');
    })

    it('Should click on the "Up" button', function() {
        HomePage.clickUpButton();
        assert.deepStrictEqual(HomePage.getTextFromSubHeaderOfTheCurrentPage(), 'О МАГАЗИНЕ');
    })

    it('Should search "Recon Tanto" through the site', function() {
        HomePage.enterDataIntoTheSearchbox('Recon Tanto');
        browser.jsClick(HomePage.searchButton);
        assert.isTrue(HomePage.waitForElementAfterSearch(), 'Поиск выполнен');
    })
})
