let MainPage = require('./main.page');

class SearchBox extends MainPage {

    static get destination() {
        return $$('#ss')[0];
    }

    static get optionsList() {
        browser.waitForVisible('ul[role="listbox"]', 3000);
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
        browser.waitForVisible('[class*="button-further"]');
        return $$('[class*="button-further"]').filter(x => x.isVisible())[0];
    }


    static months(date) {
        let timestamp = new Date(`${date.month} 1 GMT`).getTime();
        browser.waitForVisible('[class*="calendar-header"]');
        return $$(`[data-id="M${timestamp}"]`)
            .filter(x => x.isVisible());
    }

    static monthDays(date) {
        let timestamp = new Date(`${date.month} ${date.day} GMT`).getTime();
        return $$(`td[data-id="${timestamp}"]`);
    }
}


module.exports = SearchBox;
