// pages
const SearchResultsPage = require("../pages/search-results.page");
const SearchBoxPage = require("../pages/searchbox.page");
const SearchBoxFloat = require("../pages/float-searchbox.page");

// steps
const SearchBoxSteps = require("./lib/search.steps");
const SearchResultSteps = require("./lib/search-results.steps");

exports.searchBox = new SearchBoxSteps(SearchBoxPage);
exports.searchBoxFloat = new SearchBoxSteps(SearchBoxFloat);
exports.searchResult = new SearchResultSteps(SearchResultsPage);
