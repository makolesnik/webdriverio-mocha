function Page() {
}

Page.prototype.onPage = function (path) {
    browser.url(path);
};

Page.prototype.urlPattern = function () {
    return '/';
};

Page.prototype.shouldNavigateTo = function (pageName) {
    let currentPage = require(`./${pageName}`);
    let currentUrl = browser.getUrl();
    let expectedUrl = currentPage.urlPattern;
    if (!currentUrl.match(expectedUrl)) {
        throw `Expected navigation to page "${pageName}", urlPattern "${expectedUrl}, but got "${currentUrl}" `;
    }
    return this;
};


module.exports = new Page();