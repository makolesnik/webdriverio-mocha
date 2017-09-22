let searchresults = require('../pages/searchresults.page');

let steps = Object.create(searchresults, {
    getAddressList: {
        value: function () {
            return this.addresses.map(x => x.getText());
        }
    }
});

module.exports = steps;

