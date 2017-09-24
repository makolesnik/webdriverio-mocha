class Page {
    constructor() {
    }

    static get urlPattern() {
        return '/'
    }


    static open(path = '') {
        browser.url('/' + path);
        return this;
    }

    static shouldNavigateTo(pageName) {
        let currentPage = require(`./${pageName}`);
        let currentUrl = browser.getUrl();
        let expectedUrl = currentPage.urlPattern;
        if (!currentUrl.match(expectedUrl)) {
            throw `Expected navigation to page "${pageName}", urlPattern "${expectedUrl}, but got "${currentUrl}" `;
        }
        return this;
    }
}

module.exports = Page;