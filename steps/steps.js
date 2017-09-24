// pages
let MainPage = require('../pages/main.page');
let SearchResultsPage = require('../pages/searchresults.page');
let SearchBoxPage = require('../pages/searchbox.page');
let SearchBoxFloat = require('../pages/searchbox.float.page');

// steps
let SearchBoxSteps = require('./lib/search.steps');
let SearchResultSteps = require('./lib/search.results.steps');


exports.searchBox = new SearchBoxSteps(SearchBoxPage);
exports.searchBoxFloat = new SearchBoxSteps(SearchBoxFloat);
exports.searchResult = new SearchResultSteps(SearchResultsPage);

