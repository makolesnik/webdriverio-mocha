let Page = require('./page');

class MainPage extends Page {
    static get urlPattern() {
        return '/'
    }

}

module.exports = MainPage;
