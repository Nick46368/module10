class SearchPage {
    get searchBox() { return $('.input #title-search-input') }
    get searchButton() { return $('.input input[type=submit]') }
    get elementAfterSearch() { return $('.item-name') }
    get buyButton() { return $('.buy-btn ')}
    get bannerAddItemInCart() { return $('#addItemInCart > div') }

    enterDataIntoTheSearchbox(text) {
        this.searchBox.waitForDisplayed(1000);
        this.searchBox.setValue(text);
    }

    waitForElementAfterSearch() {
        return this.elementAfterSearch.waitForDisplayed();
    }

    clickOnBuyButton() {
        this.buyButton.waitForDisplayed();
        this.buyButton.click();
    }

    waitForBannerAddItemInCart() {
        return this.bannerAddItemInCart.waitForDisplayed();
    }
}

module.exports = SearchPage;
