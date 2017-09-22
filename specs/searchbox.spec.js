let expect = require('chai').expect;
let searchBox = require('../steps/search.steps');
let searchResult = require('../steps/search.results.steps');


describe('Main searchbox', function () {
    it('search tickets on specified destination', function () {

        let order = {
            destination: 'New York',
            checkin: {
                month: "December 2017",
                day: 10
            },
            checkout: {
                month: "December 2017",
                day: 15
            }
        };


        searchBox.onPage()
            .selectDestination(order.destination)
            .selectCheckinDate(order.checkin)
            .selectCheckoutDate(order.checkout)
            .submit()
            .shouldNavigateTo('searchresults.page');

        let addresses = searchResult.getAddressList();
        let wrong_address = addresses.filter(x => !x.match(order.destination));

        expect(wrong_address,
            `Results should contain address "${order.destination}", but got: ${wrong_address}"`).to.be.empty;

        expect(browser.getTitle()).to.contain(order.destination);
    });
});