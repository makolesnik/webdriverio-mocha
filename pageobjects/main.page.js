var page = require('./page');
var mainPage = Object.create(page, {

    open: { value: function() {
        page.open.call(this, '/api/property/getTitle.html');
    } }
});

module.exports = mainPage;