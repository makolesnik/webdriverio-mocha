let page = require('./page');


let mainPage = Object.create(page, {

    urlPattern: {
        get: function () {
            return '/'
        }
    },

    onPage: {
        value: function () {
            page.onPage.call(this, '/');
            return this;
        }
    }

});

module.exports = mainPage;