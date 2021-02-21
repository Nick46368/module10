const SearchPage = require('./searchPage');

class HomePage extends SearchPage {
  constructor() {
    super();
  }
  get pageHeader() { return $('img[alt="TITLE"]') }
  get subHeaderOfTheCurrentPage() { return $('div h1') }
  get changeLanguageRU() { return $('nav.about-menu li:nth-child(1) a.langs-item') }
  get textFromAddressOfTheShops() { return $('a.go-to-map') }
  get loginButton() { return $('.user-login .text') }
  get bannerWithLoginForm() { return $('.modal-header') }
  get emailField() { return $('input[name="USER_LOGIN"]') }
  get passwordField() { return $('input[name="USER_PASSWORD"]') }
  get loginButtonFromLoginForm() { return $('input[name="Login"]') }
  get iconAfterSuccessfulLogin() { return $('.login .icon') }
  get upButton() { return $('a.up_button') }
  get equipmentAndGearDropdown() { return $('#bx_1847241719_91') }
  get aboutStoreButton() { return $('nav.about-menu > ul li:nth-child(1) a') }
  get luganskDiploma() { return $('div.page-content.clearfix p:nth-child(23) img') }

  clickChangeLanguageRU() {
    this.changeLanguageRU.waitForDisplayed();
    this.changeLanguageRU.click();
  }

  getTextFromAddressOfTheShops() {
    this.textFromAddressOfTheShops.waitForDisplayed();
    return this.textFromAddressOfTheShops.getText();
  }

  clickLoginButton() {
    this.loginButton.waitForDisplayed();
    this.loginButton.click();

  }

  enterEmail(text) {
    this.emailField.waitForDisplayed();
    this.emailField.setValue(text);
  }

  enterPassword(text) {
    this.passwordField.waitForDisplayed();
    this.passwordField.setValue(text);
  }

  clickLoginButtonFromLoginForm() {
    this.loginButtonFromLoginForm.waitForDisplayed();
    this.loginButtonFromLoginForm.click();
  }

  waitForIconAfterSuccessfulLogin() {
    return this.iconAfterSuccessfulLogin.waitForDisplayed();
  }

  clickUpButton() {
    this.upButton.waitForDisplayed();
    this.upButton.click();
  }

  getTextFromSubHeaderOfTheCurrentPage() {
    this.subHeaderOfTheCurrentPage.waitForDisplayed();
    return this.subHeaderOfTheCurrentPage.getText();
  }

  getEquipmentAndGearDropdown() {
    this.equipmentAndGearDropdown.waitForDisplayed();
    this.equipmentAndGearDropdown.click();
  }

  scrollToLuganskDiploma() {
    this.luganskDiploma.scrollIntoView();
    this.luganskDiploma.waitForDisplayed();
  }

  waitForLuganskDiploma() {
    return this.luganskDiploma.waitForDisplayed();
  }
}

module.exports = new HomePage();
