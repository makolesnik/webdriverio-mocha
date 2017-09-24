let MainPage = require('./main.page');

class SearchBox extends MainPage {

    static get destination() {
        return $$('#ss')[0];
    }

    static get optionsList() {
        return $$('ul[role="listbox"] li');
    }

    static get checkinfield() {
        return $$('[data-placeholder="Check-in Date"]')[0];
    }

    static get checkoutfield() {
        return $$('[data-placeholder="Check-out Date"]')[0];
    }

    static get submitButton() {
        return $('[class*=\'searchbox__footer\'] button[type=\'submit\']');
    }

    static get nextMonth() {
        return $$('[class*="button-further"]')[0];
    }

    static get monthNames() {
        return $$('[class*="monthname"]');
    }

    static monthDays(text) {
        return $$(`//th[contains(text(),"${text}")]/../../../tbody/tr/td`)
            .filter(x => x.getText() !== '');
    }

    static waitMenu() {
        browser.waitForVisible('ul[role="listbox"]', 3000);
    }

}


module.exports = SearchBox;
