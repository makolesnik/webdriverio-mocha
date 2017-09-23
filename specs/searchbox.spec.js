let steps = require('../steps/steps');
let order = require('../model/order').order;



describe('Main searchbox', function () {
    it('search tickets on specified destination', function () {

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
            .shouldNavigateTo('searchresults.page');

        let addresses = steps.searchResult.getAddressList();
        let wrong_address = addresses.filter(x => !x.match(order.destination));

        steps.expect(wrong_address,
            `Results should contain address "${order.destination}", but got: ${wrong_address}"`).to.be.empty;

        steps.expect(browser.getTitle()).to.contain(order.destination);
    });
});