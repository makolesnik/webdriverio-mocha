let searchResults = require('../pages/searchresults.page');

let searchResultsSteps = Object.create(searchResults, {
    getAddressList: {
        value: function () {
            return this.addresses.map(x => x.getText());
        }
    }
});

module.exports = searchResultsSteps;

