let MainPage = require('./main.page');

class SearchResultsPage extends MainPage {
    static get urlPattern() {
        return '/searchresults.html'
    }

    static get addresses() {
        return $$('.address');
    }
}

module.exports = SearchResultsPage;
