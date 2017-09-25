let expect = require('chai').expect;
let steps = require('../../steps/steps');
let Order = require('../../model/order');

describe('Search using main SearchBox', function () {
    it('search tickets on specified destination', function () {

        let order = new Order();
        order.destination = 'New York';
        order.checkin = {
            month: "December 2017",
            day: 10
        };
        order.checkout = {
            month: "December 2017",
            day: 15
        };


        steps.searchBox.onPage()
            .selectDestination(order.destination)
            .selectCheckinDate(order.checkin)
            .selectCheckoutDate(order.checkout)
            .submit()
            .fromPage().shouldNavigateTo('search-results.page');

        let addresses = steps.searchResult.getAddressList();
        let wrong_address = addresses.filter(x => !x.match(order.destination));

        expect(wrong_address,
            `Results should contain address "${order.destination}", but got: ${wrong_address}"`).to.be.empty;

        expect(browser.getTitle()).to.contain(order.destination);
    });
});