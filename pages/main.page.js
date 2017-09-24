let Page = require('./page');

class MainPage extends Page {
    static get urlPattern() {
        return '/'
    }

    static scrollDown() {
        let size = browser.getViewportSize();
        return browser.scroll(0, size.height);
    }
}

module.exports = MainPage;
