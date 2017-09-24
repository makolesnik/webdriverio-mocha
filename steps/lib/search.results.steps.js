let CommonSteps = require('./common.steps');


class SearchResultsSteps extends CommonSteps {

    getAddressList() { return this.page.addresses.map(x => x.getText()); }
}

module.exports = SearchResultsSteps;

