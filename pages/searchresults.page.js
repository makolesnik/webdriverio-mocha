let page = require('./main.page');

let searchResultsPage = Object.create(page, {
    urlPattern: {
        get: function () {
            return '/searchresults.html'
        }
    },

    addresses: {
        get: function () {
            return $$('.address');
        }
    },

});
module.exports = searchResultsPage;