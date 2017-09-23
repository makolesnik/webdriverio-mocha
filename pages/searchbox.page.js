let page = require('./main.page');

let searchBox = Object.create(page, {

    destination: {
        get: function () {
            return $$('#ss')[0];
        }
    },

    list_options: {
        get: function () {
            return $$('ul[role="listbox"] li');
        }
    },

    checkinfield: {
        get: function () {
            return $$('[data-placeholder="Check-in Date"]')[0];
        }
    },

    checkoutfield: {
        get: function () {
            return $$('[data-placeholder="Check-out Date"]')[0];
        }
    },

    submitButton: {
        get: function () {
            return $('[class*=\'searchbox__footer\'] button[type=\'submit\']');
        }
    },

    waitMenu: {
        value: function () {
            browser.waitForVisible('ul[role="listbox"]', 3000);
        }
    },

    nextMonth: {
        get: function () {
            return $$('[class*="button-further"]')[0];
        }
    },

    monthNames: {
        get: function () {
            return $$('[class*="monthname"]');
        }
    },

    monthDays: {
        value: function (text) {
            return $$(`//th[contains(text(),"${text}")]/../../../tbody/tr/td`)
                .filter(x => x.getText() !== '');
        }
    },

});

module.exports = searchBox;