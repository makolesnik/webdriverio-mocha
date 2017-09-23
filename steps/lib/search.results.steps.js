let SearchResultsPage = require('../../pages/searchresults.page');

class SearchResultsSteps {
    constructor(){};

    static getAddressList() { return SearchResultsPage.addresses.map(x => x.getText()); }
}

module.exports = SearchResultsSteps;

