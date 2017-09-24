let SearchBox = require('./searchbox.page');

class SearchBoxFloat extends SearchBox {

    static get destination() {
        return $$('#ss')[1];
    }

    static get optionsList() {
        return $$('ul li[role="option"]');
    }

    static get checkoutfield() {
        return $$('[data-placeholder="Check-out Date"]')[1];
    }

    static get submitButton() {
        return $$('button[class*="searchbox__button"][type="submit"]')[1];
    }

    static waitMenu() {
        browser.waitForVisible('ul li[role="option"]', 3000);
    }

}

module.exports = SearchBoxFloat;
